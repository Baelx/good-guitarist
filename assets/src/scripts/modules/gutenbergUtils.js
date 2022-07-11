/**
 * Sets a max height for the sidebar CTA dropdowns since there may be
 * very many CTAs to choose from.
 * 
 * @todo    Finish this function/see if there's a better way to implement it.
 * @return  {void}
 */
export const sidebarCTASelectsMaxHeight = () => {
    // Hack: Need to set a timer to wait for Gutenber to populate dropdowns.
    // Not sure if there's a hook/event I can hook into instead.
    setTimeout(() => {
        // Give Youtube Post sidebar CTA dropdown max height and make it scroll-able.
        const sidebarCTASelects = document.querySelectorAll('.sidebar-cta-select-control');
        
        sidebarCTASelects.forEach(select => {
            select.addEventListener('mousedown', (e) => {
                if (e.target.options.length > 8) {
                    e.size = 8;
                }
            });
        })
    }, 3000);
}


/**
 * Bootstrap function for all Gutenberg utility functions.
 * 
 * @return {void}
 */
const gutenbergUtils = () => {
    sidebarCTASelectsMaxHeight();
}

// gutenbergUtils();
