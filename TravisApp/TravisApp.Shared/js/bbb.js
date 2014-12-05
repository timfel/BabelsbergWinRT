window.createConstraints = function(ui, workers) {
    var d = new DBPlanner();
    workers.forEach(function (ea) {
        always: {
                solver: d
            ui.model === ea.model
        }
    });

    // Below does not currently work, because the dependencies aren't
    // setup right. It should really recalc when ui.model changes, but it
    // doesn't
    //for (var i = 0; i < ui.progressbars.length; i++) {
    //    always: {
    //        solver: d
    //        ui.progressbars[i].innerText.formula([ui.model, ui.model.progress[i]], function (m, p) {
    //            ui.progressbars[i].textContent = ui.model.progress[i] + "%";
    //        });
    //    }
    //};
};
