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
                    textContent: `${this.name.title} ${this.name.first} ${this.name.last}`,
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

        const imgContainer = wrapper(
            "div",
            { className: "card-img-container" },
            [
                createElement("img", {
                    className: "card-img",
                    src: "https://place-hold.it/90x90",
                    alt: "profile picture",
                }),
            ]
        );

        return wrapper("div", { className: "card" }, [
            infoContainer,
            imgContainer,
        ]);
    }
}
