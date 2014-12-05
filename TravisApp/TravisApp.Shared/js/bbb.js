function createConstraints(ui, worker) {
    var d = new DBPlanner();
    always: {
        solver: d
        ui.model === worker.model
    }
};
