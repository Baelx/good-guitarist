import { __ } from '@wordpress/i18n';

export const BlockEdit = ({ className, attributes }) => {
    const { difficulty } = attributes;

    return (
        <div className={className}>
            {difficulty && <span>{__('Song difficulty: ')}</span>}
            {difficulty && <span>{difficulty}</span>}
        </div>
    )
}