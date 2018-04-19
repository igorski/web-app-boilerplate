"use strict";

/**
 * inject given HTML template in the given container
 * this replaces existing content
 *
 * @param {Function} template EJS template
 * @param {Element} container to inject template contents into
 * @param {Object=} optData optional data to pass to the template
 * @return {boolean} whether template was injected successfully
 */
export function inject( template, container, optData = {} )
{
    if ( typeof template !== "function" || !( container instanceof Element )) {
        return false;
    }
    container.innerHTML = template( optData );

    return true;
}

/**
 * appends given HTML template in the given container
 * this keeps existing contents
 *
 * @param {Function} template EJS template
 * @param {Element} container to inject template contents into
 * @param {Object=} optData optional data to pass to the template
 * @return {boolean} whether template was injected successfully
 */
export function append( template, container, optData = {} )
{
    if ( typeof template !== "function" || !( container instanceof Element )) {
        return false;
    }
    const wrapper     = document.createElement( "div" );
    wrapper.innerHTML = template( optData );

    container.appendChild( wrapper );

    return true;
}
