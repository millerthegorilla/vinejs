ImportJS.pack('vine.garden', function (module) {
    var seed;
    this.inject(function () {
        seed = this.import('vine.seed');
    });
    var animation = this.import('animation.animation');
    var injectedCanvas = this.import('animation.injectedCanvas')
    var seeds = [];

    function garden(params) {
        this._animation = new animation();
        this._context = new injectedCanvas(params.container, params.position);
        this._numOfSeeds = params.numOfSeeds;
        this._params = params;
        window.addEventListener("resize", function () {
            $('#vineContainer').width(window.innerWidth);
            $('#vineContainer').height(window.innerHeight);
        });
        if (params.autoStart) {
            this.germinate((params.when) ? params.when : 0);
        }
        this._animation.start(15);
    }
    Object.defineProperty(garden.prototype, "context", {
        get: function () {
            return this._context;
        }
    });
    Object.defineProperty(garden.prototype, "animation", {
        get: function () {
            return this._animation;
        }
    });
    garden.prototype.germinate = function (when) {
        if (typeof (when) == 'number' && when > 0) {
            setTimeout(this._germinate.bind(this), when);
        } else if (when === 0) {
            this._germinate();
        } else {
            var e = new Error("parameter must be of type number");
            e.message = e.message + "at line " + e.lineNumber;
            console.log(e.message);
            throw e;
        }
    };
    garden.prototype._germinate = function () {
        if (this._numOfSeeds != 'undefined') {
            this._params.garden = this;
            for (var i = 0; i < this._numOfSeeds; i++) {
                seeds.push(new seed(this._params));
            }
        }
    };
    module.exports = garden;
});