class Gallery {
    constructor(data) {
        this.employees = data.map((employee) => {
            return new Employee(employee);
        });

        this.gallery = document.querySelector("#gallery");
    }

    render() {
        for (const employee of this.employees) {
            this.gallery.appendChild(employee.card());
        }
    }

    setInteractionEmployeeCard() {
        this.gallery.addEventListener("click", (event) =>
            this.handleInteractionEmployeeCard(event)
        );
    }

    handleInteractionEmployeeCard(event) {
        const target = event.target;
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
            default:
                break;
        }

        new Modal(uuid, this.employees);
    }
}
