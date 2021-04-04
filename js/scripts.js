/**
 * Load employees and initialize the gallery with filter
 */
const init = async () => {
    try {
        const data = await loadEmployees();
        if (data) {
            const gallery = new Gallery(data);
            gallery.render();
            gallery.setInteractionEmployeeCard();
            gallery.addFilterToGallery();
        } else {
            noResultOrError();
        }
    } catch (error) {
        noResultOrError();
    }
};

const noResultOrError = () => {
    document.querySelector("#gallery").appendChild(
        createElement("p", {
            className: "no-result",
            textContent:
                "Couldn't find any employees, because we are all playing hide and seek",
        })
    );
};

/**
 * call init
 */
init();
