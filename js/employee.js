/**
 * Employee class hold employee parameters and build card and modal info
 */
class Employee {
    /**
     * Set class parameters
     *
     * @param {object} employee employee parametes to set in class
     */
    constructor(employee) {
        for (const [key, value] of Object.entries(employee)) {
            this[key] = value;
        }
    }

    /**
     * Build employee card
     *
     * @returns {HTMLElement}
     */
    card() {
        const infoContainer = wrapper(
            "div",
            { className: "card-info-container" },
            [
                createElement("h3", {
                    id: `name-${this.name.first}-${this.name.last}`,
                    className: "card-name cap",
                    textContent: `${this.name.first} ${this.name.last}`,
                }),
                createElement("p", {
                    className: "card-text",
                    textContent: this.email,
                }),
                createElement("p", {
                    className: "card-text cap",
                    textContent: `${this.location.city}, ${this.location.state}`,
                }),
            ]
        );

        infoContainer.dataset.uuid = this.login.uuid;

        const imgContainer = wrapper(
            "div",
            { className: "card-img-container" },
            [
                createElement("img", {
                    className: "card-img",
                    src: this.picture.medium,
                    alt: `profile picture ${this.name.first} ${this.name.last}`,
                }),
            ]
        );

        return wrapper("div", { className: "card" }, [
            imgContainer,
            infoContainer,
        ]);
    }
    /**
     * Build employee modal info
     *
     * @returns {HTMLElement}
     */
    modalInfoContainer() {
        return wrapper("div", { className: "modal-info-container" }, [
            createElement("img", {
                className: "modal-img",
                src: this.picture.large,
                alt: `profile picture ${this.name.first} ${this.name.last}`,
            }),
            createElement("h3", {
                id: "name",
                className: "modal-name cap",
                textContent: `${this.name.first} ${this.name.last}`,
            }),
            createElement("p", {
                className: "modal-text",
                textContent: this.email,
            }),
            createElement("p", {
                className: "modal-text cap",
                textContent: this.location.city,
            }),
            createElement("hr"),
            createElement("p", {
                className: "modal-text",
                textContent: this._formatPhoneNumber(this.cell),
            }),
            createElement("p", {
                className: "modal-text",
                textContent: `${this.location.street.number} ${this.location.street.name}, ${this.location.city}, ${this.location.state} ${this.location.postcode}`,
            }),
            createElement("p", {
                className: "modal-text",
                textContent: `Birthday: ${this._formatBirthDate(
                    this.dob.date
                )}`,
            }),
        ]);
    }

    /**
     * Formats the birth date to display format
     *
     * @param {string} date the date string from the api
     * @returns string
     */
    _formatBirthDate(date) {
        const dateObject = new Date(date);
        return `${
            dateObject.getMonth() + 1
        }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
    }
    /**
     * Formats the cell number to display format
     *
     * @param {string} number the phone number from the api
     * @returns string
     */
    _formatPhoneNumber(number) {
        return number.replace(/^.*(\d{3}).*(\d{3}).*(\d{4})$/, "($1) $2-$3");
    }
}
