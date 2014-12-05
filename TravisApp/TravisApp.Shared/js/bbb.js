window.createConstraints = function(ui, workers) {
    var d = new DBPlanner();
    workers.forEach(function (ea) {
        always: {
                solver: d
            ui.model === ea.model
        }
    });
};
