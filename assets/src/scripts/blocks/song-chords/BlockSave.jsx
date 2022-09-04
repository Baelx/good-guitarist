import { __ } from '@wordpress/i18n';

export const BlockSave = ({ className, attributes }) => {
    const { chords } = attributes;

    return (
        <div className={className}>
            <span>{__('Song Chords: ')}</span>
            { chords.length > 0 ? chords.map((chord, i, array) => (
                <>
                    <span key={chord}>{chord}</span>
                    {i !== array.length - 1 ? ", " : ""}
                </>
            )) : <span></span>}
        </div>
    )
}