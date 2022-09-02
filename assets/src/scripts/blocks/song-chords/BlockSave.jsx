import { __ } from '@wordpress/i18n';

export const BlockSave = ({ className, attributes }) => {
    const { chords } = attributes;

    return (
        <div className={className}>
            { chords.length > 0 && chords.map((chord, i, array) => (
                <>
                    <span key={chord}>{chord}</span>
                    {true ? ", " : ""}
                </>
            ))}
        </div>
    )
}