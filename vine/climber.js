ImportJS.pack('vine.climber', function (module) {
    var climberbase = this.import('vine.climberbase');
    var flower = this.import('vine.flower');
    var garden = this.import('vine.garden');
    var point = this.import('utils.point');
    var utils = this.import('utils.utils');
    var circularQueue = this.import('utils.circularQueue');
    var drawfunctions = this.import('vine.drawfunctions');
    climber.prototype = Object.create(climberbase.prototype);
    climber.prototype.constructor = climber;

    function climber(params) {
        climberbase.call(this, params);
        this._branchTimeMax = params.branchTimeMax;
        this._branchTimeMin = params.branchTimeMin;
        this._stem = true;
        this._startCorner = params.startCorner;
        this._numOfSides = params.numOfSides;
        this._bark = params.bark;
        this._left = params.left;
        this._top = params.top;
        this._height = params.height;
        this._width = params.width;
        this._corner = {
            'TL': 0,
            'TR': 1,
            'BR': 2,
            'BL': 3
        };
        this._currentSide = 0;
        this._corners = new circularQueue();
        this._corners.push(new point(this._left, this._top));
        this._corners.push(new point(this._left + this._width, this._top));
        this._corners.push(new point(this._left + this._width, this._top + this._height));
        this._corners.push(new point(this._left, this._top + this._height));
        this._corners.index = this._corner[this._startCorner];
        this._corners.reverse = (this._direction === 'CW') ? false : true;
        this._currentPoint = this._corners[this._corners.index].clone();
        this._startingPoint = this._currentPoint.clone();
        this._toPoint = this._currentPoint.clone();
        this._timePerSide = Math.floor(this._time / this._numOfSides);
        this._sideLength = this._corners[this._corners.nextIndex].distanceFrom(this._corners[this._corners.index]);
        this._distancePerCurve = (this._sideLength / params.numCurvesPerSide);
        this._flex = params.vineflex;
        if (this._direction === 'CW') {
            this._corners[0].func = drawfunctions.curveXRFunc;
            this._corners[1].func = drawfunctions.curveYDFunc;
            this._corners[2].func = drawfunctions.curveXLFunc;
            this._corners[3].func = drawfunctions.curveYUFunc;
        } else {
            this._corners[0].func = drawfunctions.curveYDFunc;
            this._corners[3].func = drawfunctions.curveXRFunc;
            this._corners[2].func = drawfunctions.curveYUFunc;
            this._corners[1].func = drawfunctions.curveXLFunc;
        }
        this._drawFunction = this._corners.current.func;
    }
    climber.prototype._finish = function () {
        if (this._currentSide >= this._numOfSides - 1) {
            this._drawFunction = null;
            delete this._drawFunction;
            this._garden.animation.remove(this);
        } else {
            this._currentSide += 1;
            this._currentPoint = this._corners.next().clone();
            this._startingPoint = this._currentPoint.clone();
            this._drawFunction = this._corners.current.func;
            this._sideLength = this._corners[this._corners.nextIndex].distanceFrom(this._corners[this._corners.index]);
            this._distancePerCurve = (this._sideLength / this._numCurvesPerSide);
            this._counter = 0;
        }
        this._seed.growFlower({
            x: this._currentPoint.x,
            y: this._currentPoint.y
        });
    };
    climber.prototype._grow = function () {
        if (!this._stem || this._counter > this._stemLength) {
            this._stem = false;
            if (this._branchChance && utils.randomi(0, 100) < this._branchChance) {
                this._seed.growBranch({
                    currentPoint: this._currentPoint,
                    girth: this._girth,
                    branchLength: this._branchLength,
                    seed: this._seed,
                    garden: this._garden,
                    branchTimeMax: this._branchTimeMax,
                    branchTimeMin: this._branchTimeMin,
                    color: this._color,
                    barkColor: this._barkColor
                });
            }
        }
        climberbase.prototype._grow.call(this);
    }
    module.exports = climber;
});
