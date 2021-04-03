class Modal {
    constructor(uuid, employees) {
        this.modalWrapper = document.querySelector("#modal-wrapper");
        this.employees = employees;

        this.modalContainer = this.modalContainerRenderer();
        this.modalWrapper.appendChild(this.modalContainer);
        this.setEmployeeInfo(uuid);
    }

    modalContainerRenderer() {
        this.modal = wrapper("div", { className: "modal" }, [
            wrapper(
                "button",
                {
                    id: "modal-close-btn",
                    className: "modal-close-btn",
                },
                [createElement("strong", { textContent: "X" })]
            ),
        ]);
        return wrapper("div", { className: "modal-container" }, [this.modal]);
    }

    getInfoContainer(uuid) {
        const employee = this.employees.find(
            (employee) => employee.login.uuid === uuid
        );
        return employee.modalInfoContainer();
    }

    setEmployeeInfo(uuid) {
        this.modal.appendChild(this.getInfoContainer(uuid));
    }
}
