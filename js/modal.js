/**
 * Modal class handle all with modal
 */
class Modal {
    /**
     * Initialize Modal with info of clicked employee and add close interaction and pagination
     *
     * @param {string} uuid of first employee to show in modal
     * @param {Employee[]} employees all employees to paginate between
     */
    constructor(uuid, employees) {
        this.body = document.querySelector("body");
        this.employees = employees;
        this.employee = null;

        this.modalContainer = this.modalContainerRenderer();
        this.body.appendChild(this.modalContainer);
        this.modalContainer.addEventListener("click", (event) =>
            this.handleInteractionModalClose(event.target)
        );
        this.pagination.addEventListener("click", (event) =>
            this.handlePagination(event.target)
        );

        this.setEmployeeInfo(uuid);
        const index = this.employees.findIndex(
            (employee) => employee === this.employee
        );
        this._enableDisablePagination(index);
    }

    /**
     * Render ModalContainer
     *
     * @returns HTMLElement
     */
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

    /**
     * Add the information of the user to the modalContainer
     *
     * @param {string} uuid of employee to display information of
     */
    setEmployeeInfo(uuid) {
        this.modal.appendChild(this._getInfoContainer(uuid));
    }

    /**
     * Handle the close interaction of the modal
     *
     * @param {HTMLElement} target the clicked element
     */
    handleInteractionModalClose(target) {
        if (
            target.className === "modal-container" ||
            target.className === "modal-close-btn" ||
            target.className === "modal-close-x"
        ) {
            this.modalContainer.remove();
        }
    }

    /**
     * Handle the click of pagination buttons, next and previous, abort if it is the first or last employee in the list
     *
     * @param {HTMLElement} element The clicked element
     * @returns
     */
    handlePagination(element) {
        const index = this.employees.findIndex(
            (employee) => employee === this.employee
        );

        if (element.id === "modal-prev") {
            if (this._checkEmployeeIndex(index) === "low") return;
            this._removeEmployeeInfo();
            this.setEmployeeInfo(this.employees[index - 1].login.uuid);
            this._enableDisablePagination(index - 1);
        } else if (element.id === "modal-next") {
            if (this._checkEmployeeIndex(index) === "high") return;
            this._removeEmployeeInfo();

            this.setEmployeeInfo(this.employees[index + 1].login.uuid);
            this._enableDisablePagination(index + 1);
        }
    }

    /**
     * Get the information container of the selected employee
     *
     * @param {string} uuid of the employee
     * @returns HTMLElement
     */
    _getInfoContainer(uuid) {
        this.employee = this.employees.find(
            (employee) => employee.login.uuid === uuid
        );
        return this.employee.modalInfoContainer();
    }

    /**
     * Remove the employee information the prepare for the next employee
     */
    _removeEmployeeInfo() {
        this.modal.lastElementChild.remove();
    }

    /**
     * Check if the index is first or last in the list
     *
     * @param {number} index of the employee to check
     * @returns string hight, low or undefined
     */
    _checkEmployeeIndex(index) {
        if (index === this.employees.length - 1) {
            return "high";
        }
        if (index === 0) {
            return "low";
        }
        return undefined;
    }

    /**
     * Enable or disable the pagination buttons if there is more employees to paginate
     *
     * @param {number} index of the employee
     */
    _enableDisablePagination(index) {
        this.prevButton.disabled = false;
        this.nextButton.disabled = false;

        if (index === this.employees.length - 1) {
            this.nextButton.disabled = true;
        }
        if (index === 0) {
            this.prevButton.disabled = true;
        }
    }
}
