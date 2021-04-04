/**
 * Gallery class for all gallery functions
 */
class Gallery {
    /**
     * Make the api data to Employee classes
     * @param {object[]} data Employees array from the api
     */
    constructor(data) {
        this.employees = data.map((employee) => {
            return new Employee(employee);
        });
        this.filteredEmployees = this.employees;

        this.gallery = document.querySelector("#gallery");
    }

    /**
     * Render all employee cards to the gallery
     */
    render() {
        for (const employee of this.filteredEmployees) {
            this.gallery.appendChild(employee.card());
        }
    }

    /**
     * Remove all cards before placing new cards
     */
    removeAllEmployeeCards() {
        this.gallery.querySelectorAll("*").forEach((n) => n.remove());
    }

    /**
     * Set event listener for listening to click in gallery
     */
    setInteractionEmployeeCard() {
        this.gallery.addEventListener("click", (event) =>
            this.handleInteractionEmployeeCard(event.target)
        );
    }

    /**
     * Handle all clicks in gallery, abort if click is outside a card. React on click on all parts of the card
     * @param {HTMLElement} clicked element
     * @returns
     */
    handleInteractionEmployeeCard(target) {
        if (target.id === "gallery") return;
        let uuid;
        switch (target.className) {
            case "card-img":
                uuid = target.parentElement.nextElementSibling.dataset.uuid;
                break;
            case "card-img-container":
                uuid = target.nextElementSibling.dataset.uuid;
                break;
            case "card-name cap":
            case "card-text":
            case "card-text cap":
                uuid = target.parentElement.dataset.uuid;
                break;
            case "card":
                uuid = target.lastElementChild.dataset.uuid;
                break;
            case "card-info-container":
                uuid = target.dataset.uuid;
                break;
            default:
                break;
        }

        new Modal(uuid, this.filteredEmployees);
    }

    /**
     * Add the search form on to the page
     */
    addFilterToGallery() {
        const searchContainer = document.querySelector(".search-container");
        const filterForm = wrapper("form", { action: "#", method: "get" }, [
            createElement("input", {
                type: "search",
                id: "search-input",
                className: "search-input",
                placeholder: "Search...",
            }),
            createElement("input", {
                type: "submit",
                value: "🔍",
                id: "search-submit",
                className: "search-submit",
            }),
        ]);

        filterForm.firstElementChild.addEventListener("search", (event) =>
            this.handleFilter(event.target.value)
        );

        searchContainer.appendChild(filterForm);
    }

    /**
     * Handle searching employees, empty the gallery and call render to fill it again
     *
     * @param {string} searchString the string to search fore
     */
    handleFilter(searchString) {
        this.filteredEmployees = this.employees.filter(
            (employee) =>
                employee.name.first
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                employee.name.last
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
        );

        this.removeAllEmployeeCards();
        this.render();
    }
}
