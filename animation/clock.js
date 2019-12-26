ImportJS.pack('animation.clock', function (module) {
    function clock() {
        this.startTime = Date.now();
        this.ms = this.startTime;
        this.last = this.startTime;
        this.time = 0;
        this.dt = 0;
        this.delta = 0;
        this.fps = 0.0;
        this.frameCount = 0;
        this.frameCounter = true;
        var timeToUpdate = 0;
        var framesToUpdate = 0;
        this.tick = function () {
            if (this.frameCounter) this.frameCount++;
            this.ms = Date.now();
            this.dt = this.ms - this.last;
            this.last = this.ms;
            this.delta = 0.001 * this.dt;
            this.time += this.delta;
            if (this.frameCounter) {
                timeToUpdate += this.dt;
                framesToUpdate++;
                if (timeToUpdate > 1000) {
                    this.fps = Math.round((framesToUpdate * 1000) / timeToUpdate);
                    framesToUpdate = 0;
                    timeToUpdate = 0;
                }
            }
        }
    }
    module.exports = clock;
});