ImportJS.pack('animation.animation', function (module) {
    var clock = this.import('animation.clock');
    var frameCount = 0;
    var fps, fpsInterval, startTime, now, then, elapsed;

    function animation() {
        this._stop = false;
        Object.defineProperty(this, "stop", {
            get: function () {
                return this._stop;
            },
            set: function (val) {
                this._stop = val;
            }
        });
    };
    Object.defineProperty(animation.prototype, "clock", {
        get: function () {
            return this._clock;
        }
    });
    animation.prototype.start = function (fps) {
        this._clock = new clock();
        fpsInterval = 1000 / fps;
        then = window.performance.now();
        startTime = then;
        console.log(startTime);
        this.animate();
    }
    animation.prototype.animate = function (newtime) {
        this._clock.tick();
        if (this._stop) {
            return;
        }
        this.update();
        requestAnimationFrame(this.animate.bind(this));
        now = newtime;
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            this.draw();
        }
    };
    animation.prototype.update_funcs = [];
    animation.prototype.draw_funcs = [];
    animation.prototype.draws = function (scope, func) {
        this.draw_funcs.push([scope, func]);
    };
    animation.prototype.updates = function (scope, func) {
        this.update_funcs.push([scope, func]);
    };
    animation.prototype.update = function () {
        for (var i = 0; i < this.update_funcs.length; i++) {
            this.update_funcs[i][1].call(this.update_funcs[i][0]);
        }
    };
    animation.prototype.draw = function () {
        for (var i = 0; i < this.draw_funcs.length; i++) {
            this.draw_funcs[i][1].call(this.draw_funcs[i][0]);
        }
    };
    animation.prototype.remove = function (caller) {
        var flat = [].concat.apply([], this.update_funcs);
        var col = flat.indexOf(caller) / 2;
        this.update_funcs.splice(col, 1);
        flat = [].concat.apply([], this.draw_funcs);
        col = flat.indexOf(caller) / 2;
        this.draw_funcs.splice(col, 1);
        if (this.draw_funcs.length <= 0) {
            this._stop = true;
        }
    };
    module.exports = animation;
});