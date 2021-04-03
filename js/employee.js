class Employee {
    constructor(employee) {
        for (const [key, value] of Object.entries(employee)) {
            this[key] = value;
        }
    }

    card() {
        const infoContainer = wrapper(
            "div",
            { className: "card-info-container" },
            [
                createElement("h3", {
                    id: "name",
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
                textContent: this.cell,
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

    _formatBirthDate(date) {
        const dateObject = new Date(date);
        return `${
            dateObject.getMonth() + 1
        }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
    }
}
