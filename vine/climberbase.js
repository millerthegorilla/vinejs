ImportJS.pack('vine.climberbase', function (module) {
    var point = this.import('utils.point');
    var utils = this.import('utils.utils');
    var circularQueue = this.import('utils.circularQueue');
    var garden = this.import('vine.garden');
    var flower = this.import('vine.flower');

    function climberbase(params) {
        this._direction = params.direction;
        this._baseTwig = params.baseTwig;
        this._time = params.time;
        this._branchChance = params.branchChance;
        this._branchLength = params.branchLength;
        this._flower = params.flower;
        this._girth = params.girth;
        this._seed = params.seed;
        this._barkColor = params.barkColor;
        this._color = params.color;
        this._drawFunction = null;
        this._sideLength = null;
        this._stemLength = params.stemLength;
        this._timePerSide = 5000;
        this._startTime = null;
        this._counter = 0;
        this._numCurvesPerSide = params.numCurvesPerSide;
        this._curveDepth = params.curveDepth;
        this._toPoint = new point(0, 0);
        this._garden = params.garden;
        this._value = 0;
        this._verticesL = [];
        this._verticesR = [];
        this._rotationPerCurve = 180;
        this._distancePerCurve = null;
        this._startingPoint = null;
        Math.degrees = function (rad) {
            return rad * (180 / Math.PI);
        };
        Math.radians = function (deg) {
            return deg * (Math.PI / 180);
        };
        Math.notZero = function (val) {
            return (val == 0) ? 0.000001 : val;
        }
        this._garden._animation.updates(this, this._grow);
        this._garden._animation.draws(this, this._draw);
    };
    climberbase.prototype._grow = function () {
        var run = true;
        this._counter += Math.ceil(this._garden.animation.clock.delta * this._sideLength / this._timePerSide);
        if (this._counter >= this._sideLength) {
            this._finish();
        } else {
            this._toPoint = this._drawFunction(this._startingPoint, this._counter, this._distancePerCurve, this._rotationPerCurve, this._curveDepth, this._direction, this._sideLength);
        }
    };
    climberbase.prototype._draw = function () {
        this._garden.context.save();
        this._garden.context.beginPath();
        this._garden.context.lineWidth = this._girth + this._bark;
        this._garden.context.strokeStyle = this._barkColor;
        this._garden.context.moveTo(this._currentPoint.x, this._currentPoint.y);
        this._garden.context.lineTo(this._toPoint.x, this._toPoint.y);
        this._garden.context.stroke();
        this._garden.context.beginPath();
        this._garden.context.strokeStyle = this._color;
        this._garden.context.lineWidth = this._girth;
        this._garden.context.moveTo(this._currentPoint.x, this._currentPoint.y);
        this._garden.context.lineTo(this._toPoint.x, this._toPoint.y);
        this._garden.context.stroke();
        this._garden.context.restore();
        this._currentPoint = this._toPoint.clone();
    };
    climberbase.prototype._finish = function () {}
    module.exports = climberbase;
});