import { __ } from '@wordpress/i18n';

export const BlockEdit = ({ className, attributes, setAttributes }) => {
    const { chords } = attributes;

    return (
        <figure className={className}>
            { chords.length > 0 ? chords.map(chord => (
                <img src={chord.image} alt={`${chord.title} chord`}/>
            )) : <p>{__('No chords selected.')}</p>}
        </figure>
    )
}