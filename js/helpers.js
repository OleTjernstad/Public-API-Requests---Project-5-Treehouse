const helpers = () => {
    /**
     * Creating the DOM element with different props
     * @param {string} elementName The HTML element name
     * @param {Object} props Object of element attributes key value pair
     *
     * @returns {HTMLElement}
     */
    const createElement = (elementName, props = []) => {
        const element = document.createElement(elementName);

        for (const [key, value] of Object.entries(props)) {
            element[key] = value;
        }

        return element;
    };

    /**
     * Creating the parent element, with classes
     * @param {string} elementName The HTML element name
     * @param {Object} props Object of element attributes key value pair
     * @param {HTMLElement[]} children An array with children HTML elements
     */
    const wrapper = (elementName, props, children = []) => {
        const element = createElement(elementName, props);

        for (let i = 0; i < children.length; i++) {
            element.appendChild(children[i]);
        }

        return element;
    };

    return { createElement, wrapper };
};
