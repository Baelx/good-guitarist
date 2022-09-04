import { __ } from '@wordpress/i18n';

export const BlockSave = ({ className, attributes }) => {
    const { difficulty } = attributes;

    return (
        <div className={className}>
            <span>{__('Song difficulty: ')}</span>
            {difficulty ? <span>{difficulty}</span> : <span></span>}
        </div>
    )
}