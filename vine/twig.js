/*ImportJS.pack('vine.twig', function(module) 
{
	var point = this.import('utils.point');
	var utils = this.import('utils.utils');
*/
	var twig = OOPS.extend({    
		/*_tid:0,
		_xx:0,
		_yy:0,
		_w:0,
		_d:0,
		_finX:0,
		_finY:0,
		_numOfRots:0,
		_t:0,
		_tMax:0,
		_currentPoint:null,
		_curveRadiusX:0,
		_curveRadiusY:0,
		_func:null,
		_doneFunc:null,
		_hasBranches:false,
		_tInc:0,
		_outline:0,
		_branchChance:0,
		_branchDepth:0,
		MAXBRANCHDEPTH:0,
		_ctx:null,*/
		_constructor_: function() 
		{
			console.log("twig constructor");
			//(context == (null||undefined)) ? console.log("Error, context must be defined at param of climberbase") : this._ctx = context;
		},
		/*_rotX: function(t) 
		{
			return t * (this._finX / this._tMax) + Math.sin(t * (this._numOfRots / this._tMax) * Math.PI) * this._d + this._xx;
		},
		_rotY: function(t) 
		{
			return t * (this._finY / this._tMax) + Math.sin(t * (this._numOfRots / this._tMax) * Math.PI) * this._d + this._yy;
		},
		_normX: function(t) 
		{
			return (t * (this._finX / this._tMax) + this._xx);
		},
		_normY: function(t) 
		{
			return (t * (this._finY / this._tMax) + this._yy);
		},
		_curveXL: function(t) 
		{
			return (this._curveRadiusX * Math.cos(t) + (this._xx - this._curveRadiusX));
		},
		_curveXR: function(t) 
		{
			return (this._curveRadiusX * Math.cos(t) - (this._xx + this._curveRadiusX));
		},
		_curveY: function(t) 
		{
			return (this._curveRadiusY * Math.sin(t) + this._yy);
		},
		_rotXFunc: function(t) 
		{
			return new point(this._rotX(t), this._yy + (this._yy - this._normY(t)));
		},
		_rotYFunc: function(t) 
		{
			return new point(this._normX(t), this._yy + (this._yy - this._rotY(t)));
		},
		_curveLeft: function(t) 
		{
			return new point(this._curveXL(t), this._yy + (this._yy - this._curveY(t)));
		},
		_curveRight: function(t) 
		{
			return new point(-this._curveXR(t), this._yy + (this._yy - this._curveY(t)));
		},
		
		_draw: function(toPoint) 
		{
			this._ctx.beginPath();
			this._ctx.lineWidth = this._w + this._outline;
			this._ctx.strokeStyle = '#000000';
			this._ctx.moveTo(this._currentPoint.x, this._currentPoint.y);
			this._ctx.lineTo(toPoint.x, toPoint.y);
			this._ctx.stroke();
			this._ctx.beginPath();
			//this._ctx.endPath();
			this._ctx.strokeStyle = '#655412';
			this._ctx.lineWidth = this._w;
			this._ctx.moveTo(this._currentPoint.x, this._currentPoint.y);
			this._ctx.lineTo(toPoint.x, toPoint.y);
			this._ctx.stroke();
			//this._ctx.endPath();
		}*/
	});
	/*module.exports = twig;
});*/

