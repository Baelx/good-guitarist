<?php

namespace GoodGuitarist\Custom;

class DataEncryption {
	/**
	 * The key to encrypt/decrypt with.
	 * @var private
	 */
	private $key;

	/**
	 * The salt to encrypt/decrypt with.
	 * @var private
	 */
	private $salt;

	public function __construct() {
		$this->key  = $this->get_default_key();
		$this->salt = $this->get_default_salt();
	}

	/**
	 * Get WP default key.
	 *
	 * @return	void
	 */
	private function get_default_key() {
		if ( defined( 'LOGGED_IN_KEY' ) && '' !== LOGGED_IN_KEY ) {
			return LOGGED_IN_KEY;
		}

		return 'No key detected.';
	}

	/**
	 * Get WP default salt.
	 *
	 * @return	void
	 */
	private function get_default_salt() {
		if ( defined( 'LOGGED_IN_SALT' ) && '' !== LOGGED_IN_SALT ) {
			return LOGGED_IN_SALT;
		}

		return 'No salt detected.';
	}

	/**
	 * Encrypt a value.
	 *
	 * @param	string	$value	The value to encrypt.
	 * @return	string
	 */
	public function encrypt( string $value ): string {
		if ( ! \extension_loaded( 'openssl' ) ) {
			return $value;
		}

		$method = 'aes-256-ctr';
		$ivlen  = \openssl_cipher_iv_length( $method );
		$iv     = \openssl_random_pseudo_bytes( $ivlen );
		$raw_value = \openssl_encrypt( $value . $this->salt, $method, $this->key, 0, $iv );

		if ( ! $raw_value ) {
			return false;
		}

		return \base64_encode( $iv . $raw_value );
	}

	/**
	 * Decrypt a value.
	 *
	 * @param	string	$raw_value	The value to decrypt.
	 * @return	string
	 */
	public function decrypt( string $raw_value ): string {
		if ( ! \extension_loaded( 'openssl' ) ) {
			return $raw_value;
		}

		$method = 'aes-256-ctr';
		$raw_value = \base64_decode( $raw_value, true );
		$ivlen  = \openssl_cipher_iv_length( $method );
		$iv     = \substr( $raw_value, 0, $ivlen );
		$raw_value = \substr( $raw_value, $ivlen );
		$value = \openssl_decrypt( $raw_value, $method, $this->key, 0, $iv );

		if ( ! $value || substr( $value, - strlen( $this->salt ) ) !== $this->salt ) {
			return false;
		}

		return substr( $value, 0, - strlen( $this->salt ) );
	}
}
