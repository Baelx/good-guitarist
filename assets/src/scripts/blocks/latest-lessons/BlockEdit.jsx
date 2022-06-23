const { __ } = wp.i18n;

export const BlockEdit = () => {
    return (
        <div>
            <h2 className="dynamic-block-h2">{__('Latest Lessons Carousel')}</h2>
            <small>{__('A carousel of the latest lessons will appear here on the frontend.')}</small>
        </div>
    )
}