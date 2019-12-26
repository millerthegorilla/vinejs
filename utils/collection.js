ImportJS.pack('utils.collection', function(module)
{		
// Define the collection class.

	// I am the constructor function.
	function Collection(){

		// When creating the collection, we are going to work off
		// the core array. In order to maintain all of the native
		// array features, we need to build off a native array.
		this._collection = Object.create( Array.prototype );

		// Initialize the array. This line is more complicated than
		// it needs to be, but I'm trying to keep the approach
		// generic for learning purposes.
		this._collection = (Array.apply( this._collection, arguments ) || this._collection);

		// Add all the class methods to the collection.
		Collection.injectClassMethods( this._collection, Collection.prototype );

		// Return the new collection object.
		return( this._collection );

	}


	// ------------------------------------------------------ //
	// ------------------------------------------------------ //


	// Define the static methods.
	Collection.injectClassMethods = function( collection, objPrototype ){

		// Loop over all the prototype methods and add them
		// to the new collection.
		for (var method in objPrototype){

			// Make sure this is a local method.
			if (objPrototype.hasOwnProperty( method )){

				// Add the method to the collection.
				collection[ method ] = objPrototype[ method ];

			}

		}

		// Return the updated collection.
		return( collection );

	};


	// I create a new collection from the given array.
	Collection.fromArray = function( array ){

		// Create a new collection.
		var collection = Collection.apply( null, array );

		// Return the new collection.
		return( collection );

	};


	// I determine if the given object is an array.
	Collection.isArray = function( value ){

		// Get it's stringified version.
		var stringValue = Object.prototype.toString.call( value );

		// Check to see if the string represtnation denotes array.
		return( stringValue.toLowerCase() === "[object array]" );

	};


	// ------------------------------------------------------ //
	// ------------------------------------------------------ //


	// Define the class methods.
	Collection.prototype = {

		// I add the given item to the collection. If the given item
		// is an array, then each item within the array is added
		// individually.
		add: function( value ){

			// Check to see if the item is an array.
			if (Collection.isArray( value )){

				// Add each item in the array.
				for (var i = 0 ; i < value.length ; i++){

					// Add the sub-item using default push() method.
					Array.prototype.push.call( this, value[ i ] );

				}

			} else {

				// Use the default push() method.
				Array.prototype.push.call( this, value );

			}

			// Return this object reference for method chaining.
			return( this );

		},


		// I add all the given items to the collection.
		addAll: function(){

			// Loop over all the arguments to add them to the
			// collection individually.
			for (var i = 0 ; i < arguments.length ; i++){

				// Add the given value.
				this.add( arguments[ i ] );

			}

			// Return this object reference for method chaining.
			return( this );

		}

	};

	//stubbed out until I need it
	Collection.prototype.remove = function () {};
	Collection.prototype.removeAll = function (newArrayRef) 
	{
		for(var i = 0; i < this.length; ++i)
		{
			if(newArrayRef && Collection.isArray(newArrayRef) )
			{
				newArrayRef.push(Array.prototype.pop.call(this));
			}
			else
			{
				Array.prototype.pop.call(this);
			}
		}
	};

	Collection.prototype.clear = function () 
	{
		for(var i = 0; i < this.length; ++i)
		{
			delete this[i];
		}
		this.length = 0;
	};
	
	module.exports = Collection;
});
