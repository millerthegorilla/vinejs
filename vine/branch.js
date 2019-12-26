ImportJS.pack('vine.branch', function (module) {
    var climberbase = this.import('vine.climberbase');
    var point = this.import('utils.point');
    var utils = this.import('utils.utils');
    var drawfunctions = this.import('vine.drawfunctions');
    branch.prototype = Object.create(climberbase.prototype);
    branch.prototype.constructor = branch;

    function branch(params, seed) {
        climberbase.call(this, params);
        this._bark = 0;
        this._seed = params.seed;
        this._numCurvesPerSide = utils.randomi(1, 3);
        this._curveDepth = utils.randomi(params.branchLength * 0.1, params.branchLength * 0.4);
        this._garden = params.garden;
        this._startingPoint = params.currentPoint.clone();
        this._currentPoint = params.currentPoint.clone();
        this._toPoint = params.currentPoint.clone();
        this._girth = utils.randomi(1, params.girth - 1);
        this._funcs = [drawfunctions.curveXRFunc, drawfunctions.curveXLFunc, drawfunctions.curveYUFunc, drawfunctions.curveYDFunc, drawfunctions.curveXFunc, drawfunctions.curveYFunc, drawfunctions.curveYD];
        this._drawFunction = this._funcs[utils.randomi(0, this._funcs.length - 1)];
        this._curveRadiusX = utils.randomi(10, 20);
        this._curveRadiusY = utils.randomi(10, 20);
        this._timePerSide = utils.randomi(params.branchTimeMin, params.branchTimeMax);
        this._sideLength = utils.randomi(params.branchLength * 0.4, params.branchLength);
        this._distancePerCurve = this._sideLength / this._numCurvesPerSide;
        this._flex = params.branchflex;
    }
    branch.prototype._finish = function () {
        this._seed.growFlower({
            x: this._currentPoint.x,
            y: this._currentPoint.y
        });
        this._garden.animation.remove(this);
        delete this._drawFunction;
        this._drawFunction = null;
    };
    branch.prototype._grow = function () {
        climberbase.prototype._grow.call(this);
    }
    module.exports = branch;
});