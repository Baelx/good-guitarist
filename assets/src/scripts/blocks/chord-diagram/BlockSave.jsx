export const BlockSave = ({ className, attributes, setAttributes }) => {
    const { chords } = attributes;

    return (
        <figure className={className}>
            { chords && chords.map(chord => (
                <img src={chord.image} alt={`${chord.title} chord`}/>
            ))}
        </figure>
    )
}