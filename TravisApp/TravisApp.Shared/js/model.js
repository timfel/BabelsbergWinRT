function ProgressThing() {
    this.progress1 = 0;
    this.progress2 = 0;
}

function UI(model1, model2) {
    window.addEventListener('load', function () {
        this.button1 = document.getElementById("button1");
        this.button2 = document.getElementById("button2");
        this.progress1 = document.getElementById("progress1");
        this.progress2 = document.getElementById("progress2");

        this.button1.onclick = function () {
            this.model = model1
        }.bind(this);
        this.button2.onclick = function () {
            this.model = model2
        }.bind(this);
    }.bind(this));
    this.model = model1;
    setInterval(this.update.bind(this), 500);
}

UI.prototype.update = function () {
    // TODO: should be a constraint
    if (!this.model) return;
    this.progress1.textContent = Math.round(this.model.progress1) + "";
    this.progress2.textContent = Math.round(this.model.progress2) + "";
}

function Worker(models) {
    this.models = models;
    this.model = models[0];
    setInterval(this.update.bind(this), 1000);
}

Worker.prototype.update = function () {
    this.model.progress1 += Math.min(this.model.progress2 + Math.random(), 100);
    this.model.progress2 = Math.min(this.model.progress2 + Math.random(), 100);
    if (this.model.progress1 === 100 && this.model.progress2 === 100) {
        var prev = this.model;
        this.model = this.models[(this.models.indexOf(this.model) + 1) % this.models.length];
        prev.progress1 = 0;
        prev.progress2 = 0;
    }
}
