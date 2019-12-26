ImportJS.pack('vine.drawfunctions', function (module) {
    var point = this.import('utils.point');
    var drawfunctions = {};
    drawfunctions.curveXL = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var curveRadius = distancePerCurve / 2;
        return new point(curveRadius * Math.cos(Math.radians((sideLength / Math.notZero(counter)) * 360)) + (startingPoint.x), startingPoint.y - counter);
    };
    drawfunctions.curveXR = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var curveRadius = distancePerCurve / 2;
        return new point(startingPoint.x - curveRadius * Math.cos(Math.radians((sideLength / Math.notZero(counter)) * 360)), startingPoint.y + counter);
    };
    drawfunctions.curveYU = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var curveRadius = distancePerCurve / 2;
        return new point(startingPoint.x + (counter), Math.abs(curveRadius * Math.sin(Math.radians((sideLength / Math.notZero(counter)) * 360)) - startingPoint.y));
    };
    drawfunctions.curveYD = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var curveRadius = distancePerCurve / 2;
        return new point(startingPoint.x + (counter), Math.abs(curveRadius * Math.sin(Math.radians((sideLength / Math.notZero(counter)) * 360)) + startingPoint.y));
    };
    drawfunctions.curveYUFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(Math.notZero(counter) / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point((direction == 'CW') ? (startingPoint.x - (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)) : (startingPoint.x + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)), startingPoint.y - tick);
    };
    drawfunctions.curveYDFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(Math.notZero(counter) / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point((direction == 'CW') ? (startingPoint.x + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)) : (startingPoint.x - (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)), startingPoint.y + tick);
    };
    drawfunctions.curveYFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(Math.notZero(counter) / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point((direction == 'CW') ? (startingPoint.x + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)) : (startingPoint.x - (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)), (direction == 'CW') ? startingPoint.y + tick : startingPoint.y - tick);
    };
    drawfunctions.curveXRFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(counter / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point(startingPoint.x + tick, (direction == 'CW') ? startingPoint.y - (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth) : startingPoint.y + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth));
    };
    drawfunctions.curveXLFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(counter / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point(startingPoint.x - tick, (direction == 'CW') ? startingPoint.y + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth) : startingPoint.y - (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth));
    };
    drawfunctions.curveXFunc = function (startingPoint, counter, distancePerCurve, rotationPerCurve, curveDepth, direction, sideLength) {
        var tick = Math.floor(Math.notZero(counter) / distancePerCurve) * distancePerCurve + (counter % distancePerCurve);
        var degreesPertick = rotationPerCurve / distancePerCurve;
        return new point(startingPoint.x - tick, (startingPoint.y + (Math.sin(Math.radians(degreesPertick * tick)) * curveDepth)));
    };
    drawfunctions.curveLeft = function (t) {
        return new point(curveXL(t), yy + (yy - curveY(t)));
    };
    drawfunctions.curveRight = function (t) {
        return new point(-curveXR(t), yy + (yy - curveY(t)));
    };
    module.exports = drawfunctions;
});