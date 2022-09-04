import { __ } from '@wordpress/i18n';

export const BlockEdit = ({ className, attributes }) => {
    const { difficulty } = attributes;

    return (
        <div className={className}>
            <span>{__('Song difficulty: ')}</span>
            {difficulty ? <span>{difficulty}</span> : <span>{__('(Difficulty will populate when post is saved)')}</span>}
        </div>
    )
}