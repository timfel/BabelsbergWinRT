function ProgressThing(name) {
    this.name = name;
    this.progress = [];
}

function UI(models, workers) {
    this.progressbars = [];
    this.buttons = [];
    window.addEventListener('load', function () {
        var btnDiv = document.getElementById("btnDiv"),
            pDiv = document.getElementById("pDiv");

        models.forEach(function (model) {
            var btn = document.createElement("button");
            btn.textContent = model.name;
            btn.onclick = function () {
                this.model = model;
            }.bind(this);
            btnDiv.appendChild(btn);
            this.buttons.push(btn);
        }.bind(this));

        workers.forEach(function (worker) {
            var progress = document.createElement("p");
            progress.textContent = "0%";
            pDiv.appendChild(progress);
            this.progressbars.push(progress);
        }.bind(this));
    }.bind(this));
    this.model = models[0];
    setInterval(this.update.bind(this), 500);
}

UI.prototype.update = function () {
    // TODO: should be in constraints
    if (!this.model) return;
    for (var i = 0; i < this.model.progress.length; i++) {
        this.progressbars[i].textContent = Math.round(this.model.progress[i]) + "%";
    };
    this.buttons.forEach(function (btn) {
        if (btn.textContent === this.model.name) {
            btn.style.backgroundColor = "#ccc";
        } else {
            btn.style.backgroundColor = "";
        }
    }.bind(this));
}

function Worker(models, idx) {
    this.models = models;
    this.model = models[0];
    this.idx = idx;
    setInterval(this.update.bind(this), 1000);
}

Worker.prototype.update = function () {
    this.model.progress[this.idx] = Math.min(
        (this.model.progress[this.idx] || 0) + Math.random() * (Math.random() * 10),
        100
    );
    if (this.model.progress[this.idx] === 100) {
        var prev = this.model;
        this.model = this.models[(this.models.indexOf(this.model) + 1) % this.models.length];
        prev.progress[this.idx] = 0;
    }
}
