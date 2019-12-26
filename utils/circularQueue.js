ImportJS.pack('utils.circularQueue', function (module) {
    var collection = this.import('utils.collection');

    function circularQueue() {
        collection.call(this);
        collection.injectClassMethods(this._collection, circularQueue.prototype);
        Object.defineProperty(this._collection, "index", {
            get: function () {
                return this._index;
            },
            set: function (val) {
                this._index = val;
            }
        });
        Object.defineProperty(this._collection, "reverse", {
            get: function () {
                return this._reverse;
            },
            set: function (val) {
                this._reverse = val;
            }
        });
        Object.defineProperty(this._collection, "current", {
            get: function () {
                return this[this._index];
            }
        });
        Object.defineProperty(this._collection, "nextIndex", {
            get: function () {
                return this._reverse ? ((this._index - 1 < 0) ? this.length - 1 : this._index - 1) : (this._index + 1 == this.length) ? 0 : this._index + 1;
            }
        });
        return (this._collection);
    };
    circularQueue.prototype = Object.create(collection.prototype);
    circularQueue.constructor = circularQueue;
    circularQueue.prototype._index = 0;
    circularQueue.prototype._reverse = false;
    circularQueue.prototype.next = function () {
        this._index = this.nextIndex;
        return this[this._index];
    }
    circularQueue.prototype.backwards = function () {
        this._reverse = true;
        return this._reverse;
    }
    circularQueue.prototype.forwards = function () {
        this._reverse = false;
        return this._reverse;
    }
    circularQueue.prototype.push = function (val) {
        this._index++;
        Array.prototype.push.call(this, val);
    };
    module.exports = circularQueue;
});