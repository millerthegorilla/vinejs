ImportJS.pack('utils.point',function(module,exports) 
{
	var utils = this.import('utils.utils');
	
	function point(x, y)
	{
		this.index = 0;    
		this.x = utils.defaultValue(x, 0);
		this.y = utils.defaultValue(y, 0);
	}
    
    point.prototype.distanceFrom = function(p2) 
	{
		return Math.sqrt(Math.pow(p2.y - this.y, 2) + Math.pow(p2.x - this.x, 2));
	};

	point.prototype.clone = function() 
	{
		return new point(this.x, this.y);
	};	
		
	point.prototype.equals = function(point) 
	{
		return (point.x == this.x && point.y == this.y);
	};
	
	point.prototype.val = function(index)
	{
		if(index > 1) throw ("Error : index must be between 0 and 1 in point.val");
		return index === 0 ? this.x : this.y;
	};
 
	module.exports = point;
});
