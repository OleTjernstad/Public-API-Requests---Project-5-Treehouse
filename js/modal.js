class Modal {
    constructor(uuid, employees) {
        this.body = document.querySelector("body");
        this.employees = employees;
        this.employee = null;

        this.modalContainer = this.modalContainerRenderer();
        this.body.appendChild(this.modalContainer);
        this.modalContainer.addEventListener("click", (event) =>
            this.handleInteractionModalClose(event)
        );
        this.pagination.addEventListener("click", (event) =>
            this.handlePagination(event.target)
        );

        this.setEmployeeInfo(uuid);
        const index = this.employees.findIndex(
            (employee) => employee === this.employee
        );
        this.checkEmployeeIndex(index);
    }

    modalContainerRenderer() {
        this.modal = wrapper("div", { className: "modal" }, [
            wrapper(
                "button",
                {
                    id: "modal-close-btn",
                    className: "modal-close-btn",
                },
                [
                    createElement("strong", {
                        className: "modal-close-x",
                        textContent: "X",
                    }),
                ]
            ),
        ]);
        this.prevButton = createElement("button", {
            type: "button",
            id: "modal-prev",
            className: "modal-prev btn",
            textContent: "Prev",
        });
        this.nextButton = createElement("button", {
            type: "button",
            id: "modal-next",
            className: "modal-next btn",
            textContent: "Next",
        });
        this.pagination = wrapper("div", { className: "modal-btn-container" }, [
            this.prevButton,
            this.nextButton,
        ]);
        return wrapper("div", { className: "modal-container" }, [
            this.modal,
            this.pagination,
        ]);
    }

    getInfoContainer(uuid) {
        this.employee = this.employees.find(
            (employee) => employee.login.uuid === uuid
        );
        return this.employee.modalInfoContainer();
    }

    setEmployeeInfo(uuid) {
        this.modal.appendChild(this.getInfoContainer(uuid));
    }

    removeEmployeeInfo() {
        this.modal.lastElementChild.remove();
    }

    handleInteractionModalClose(event) {
        if (
            event.target.className === "modal-container" ||
            event.target.className === "modal-close-btn" ||
            event.target.className === "modal-close-x"
        ) {
            this.modalContainer.remove();
        }
    }

    handlePagination(element) {
        const index = this.employees.findIndex(
            (employee) => employee === this.employee
        );

        if (element.id === "modal-prev") {
            if (this.checkEmployeeIndex(index) === "low") return;
            this.removeEmployeeInfo();
            this.setEmployeeInfo(this.employees[index - 1].login.uuid);
            this.checkEmployeeIndex(index - 1);
        } else if (element.id === "modal-next") {
            if (this.checkEmployeeIndex(index) === "high") return;
            this.removeEmployeeInfo();

            this.setEmployeeInfo(this.employees[index + 1].login.uuid);
            this.checkEmployeeIndex(index + 1);
        }
    }

    checkEmployeeIndex(index) {
        if (index === this.employees.length - 1) {
            this.prevButton.disabled = false;
            this.nextButton.disabled = true;
            return "high";
        } else if (index === 0) {
            this.prevButton.disabled = true;
            this.nextButton.disabled = false;
            return "low";
        } else {
            this.prevButton.disabled = false;
            this.nextButton.disabled = false;
        }
    }
}
