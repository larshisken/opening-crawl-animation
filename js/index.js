/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T13:23:23+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-31T19:06:08+02:00
 */

module.exports = (options = {
    containerClassName: 'oca-container',
    childClassName: 'oca-text',
    interval: 1000
}) => {

    /**
     * Wait for the DOM to load
     * @param {Function} callback
     */
    const DOMReady = callback => {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };

    /**
     * Loop over each container and pass DOM elements to the callback
     * @param  {Function} callback
     */
    const forEachContainer = callback => {
        const elements = document.getElementsByClassName(options.containerClassName);
        Array.prototype.forEach.call(elements, callback);
    };

    /**
     * Get the child by childClassName
     * @param  {Object} container A DOM element
     * @return {Object}           Returns the child DOM element
     */
    const getChild = container => {
        const child = container.getElementsByClassName(options.childClassName);
        return child[0];
    };

    /**
     * Get the computed style of an element
     * @param  {Object} element A DOM element
     * @return {Object}         Return a CSSStyleDeclaration object
     */
    const getStyle = element => window.getComputedStyle(element, null);

    /**
     * Get the height from a CSSStyleDeclaration
     * @param  {Object} style A CSSStyleDeclaration object
     * @return {Number}
     */
    const getStyleHeight = style => style['height'].replace('px', '');

    /**
     * Get the line-height from a CSSStyleDeclaration
     * @param  {Object} style A CSSStyleDeclaration object
     * @return {Number}
     */
    const getStyleLineHeight = style => style['line-height'].replace('px', '');

    /**
     * Set the height style of a DOM element
     * @param {Object} element A DOM element
     * @param {Number} height
     */
    const setElementHeight = (element, height) => element.style.height = `${height}px`;

    /**
     * Set the bottom style of a DOM element
     * @param {Object} element A DOM element
     * @param {Number} bottom
     */
    const setElementBottom = (element, bottom) => element.style.bottom = `${bottom}px`;

    /**
     * Calculate the steps between two values
     * @param  {Number} a
     * @param  {Number} b
     * @return {Number}   Number of steps
     */
    const calculateSteps = (a, b) => Math.ceil(a / b);

    /**
     * Initialize
     */
    DOMReady(() => {
        forEachContainer(container => {

            const child = getChild(container);
            const style = getStyle(child);

            const height = getStyleHeight(style);
            const lineHeight = getStyleLineHeight(style);

            setElementHeight(container, height);
            setElementBottom(child, -height);

            const steps = calculateSteps(height, lineHeight);

            const animate = (idx = 0) => {
                const fromBottom = height - idx * lineHeight;
                if (idx <= steps) {
                    setElementBottom(child, -fromBottom);
                    idx++;
                    setTimeout(() => {
                        animate(idx);
                    }, options.interval);
                }
            }

            animate();
        })
    });

};
