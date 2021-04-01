/**
 * Run rendering functions after DOM has loaded
 */
window.addEventListener("DOMContentLoaded", () => {
    const employees = new Employees();
    employees.loadEmployees();
});
