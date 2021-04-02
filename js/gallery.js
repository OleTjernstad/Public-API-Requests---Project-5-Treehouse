class Gallery {
    constructor(data) {
        this.employees = data.map((employee) => {
            return new Employee(employee);
        });
    }

    render() {
        const gallery = document.querySelector("#gallery");

        for (const employee of this.employees) {
            gallery.appendChild(employee.card());
        }
    }
}
