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
}
