const init = async () => {
    const data = await loadEmployees();
    console.log(data);
    const gallery = new Gallery(data);
    gallery.render();
    gallery.setInteractionEmployeeCard();
};

init();
