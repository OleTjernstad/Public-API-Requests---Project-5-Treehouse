class Employees {
    constructor() {
        this.employees = [];
    }

    async loadEmployees() {
        try {
            const response = await fetch(
                "https://randomuser.me/api/?results=12"
            );
            if (response.ok) {
                const data = await response.json();
                console.log(response);
                this.employees = data.results;
                console.log(data);
            } else {
                // handle error
            }
        } catch (error) {}
    }
}
