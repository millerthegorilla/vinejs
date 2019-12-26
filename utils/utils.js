ImportJS.pack('utils.utils',function(module,exports)
{
		var utils = {};
		utils.defaultValue = function(value, fallback) 
		{
			return (typeof value != 'undefined') ? value : fallback;
		};

		utils.randomi = function(a, b) 
		{
			return Math.floor(Math.random() * (b-a+1) + a);
		};
    
		utils.isArray = function( object ) 
		{
			return Object.prototype.toString.call( object ) == '[object Array]';
		};

		utils.isNumber = function( object ) 
		{
			return typeof object == 'number';
		};
		
		utils.random = function( min, max ) 
		{
			if ( utils.isArray( min ) )
				return min[ ~~( Math.random() * min.length ) ];
			if ( !utils.isNumber( max ) )
				max = min || 1, min = 0;
			return min + Math.random() * ( max - min );
		};

		//included to remember from 
		//http://stackoverflow.com/questions/7282151/load-external-font-with-javascript-and-jquery
		utils.addHeadStyleFont = function(jqselector, fontUrl)
		{
			$(jqselector).prepend("<style type=\"text/css\">" + 
										"@font-face {\n" +
											"\tfont-family: \"myFont\";\n" + 
											"\tsrc: local('☺'), url(" + fontUrl + ") format('opentype');\n" + 
										"}\n" + 
											"\tp.myClass {\n" + 
											"\tfont-family: myFont !important;\n" + 
										"}\n" + 
									"</style>");
		};
	
	module.exports = utils;
});
