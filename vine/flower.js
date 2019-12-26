ImportJS.pack('vine.flower', function (module, exports) {
    var utils = this.import('utils.utils');
    var garden = this.import('vine.garden');

    function flower(x, y, garden) {
        this._garden = garden;
        this._vertices = null;
        this._x = x;
        this._y = y;
        this._flower = generateFlower();
        var TWO_PI = 2 * Math.PI;
        this._iterations = 0;
        this._maxiterations = 50;
        this.types = {
            "wave-green": function (that) {
                this._garden.context.fillStyle = that.colorPrimary;
                var radius = Math.abs(that.x_0);
                this._garden.context.beginPath();
                var angleStep = TWO_PI / 150;
                this._garden.context.moveTo(radius * Math.cos(0.0), radius * Math.sin(0.0));
                for (var angle = 0.0; angle < TWO_PI; angle += angleStep) {
                    var rad = radius +
                        that.params[0] * Math.sin(angle * that.params[1]);
                    this._garden.context.lineTo(rad * Math.cos(angle), rad * Math.sin(angle));
                };
                this._garden.context.lineTo(radius * Math.cos(0.0), radius * Math.sin(0.0));
                this._garden.context.fill();
            },
            "wave-red": function (that) {
                this._garden.context.fillStyle = that.colorSecondary;
                var radius = Math.abs(that.x_0);
                this._garden.context.beginPath();
                var angleStep = TWO_PI / 140;
                this._garden.context.moveTo(radius * Math.cos(0.0), radius * Math.sin(0.0));
                for (var angle = 0.0; angle < TWO_PI; angle += angleStep) {
                    var rad = radius +
                        that.params[0] * Math.sin(angle * that.params[1]);
                    this._garden.context.lineTo(rad * Math.cos(angle), rad * Math.sin(angle));
                };
                this._garden.context.lineTo(radius * Math.cos(0.0), radius * Math.sin(0.0));
                this._garden.context.fill();
            }
        };

        function generateFlower() {
            var flower = [];
            var previousRadius = 0.0;
            while (previousRadius <= 1.0) {
                previousRadius += utils.random(0.1, 0.2);
                if (previousRadius > 1.0) break;
                var colorPrimary = 'rgb(' +
                    utils.randomi(120, 208) + ',' +
                    utils.randomi(36, 74) + ',' +
                    utils.randomi(40, 88) + ')';
                var colorSecondary = 'rgb(' +
                    utils.randomi(41, 120) + ',' +
                    utils.randomi(105, 180) + ',' +
                    utils.randomi(41, 120) + ')';
                var params = [utils.random(.7, 1.05), utils.randomi(4, 12), utils.random(8, 8), utils.random(0.5, 2)];
                var iter = 0;
                flower.unshift({
                    radius: previousRadius,
                    colorPrimary: colorPrimary,
                    colorSecondary: colorSecondary,
                    type: utils.random(['wave-red', 'wave-green']),
                    params: params,
                    x_0: utils.random(0.5, 0.2),
                    x_1: 0.2,
                    iter: iter
                });
            }
            return flower;
        }
        this._garden.animation.updates(this, this.update);
        this._garden.animation.draws(this, this.draw);
    }
    flower.prototype.draw = function () {
        this._garden.context.save();
        this._garden.context.translate(this._x, this._y);
        this._garden.context.scale(5, 7);
        for (var j = 0; j < this._flower.length; ++j) {
            this.types[this._flower[j].type].bind(this)(this._flower[j]);
        }
        this._garden.context.restore();
    };
    flower.prototype.update = function () {
        if (this._iterations >= this._maxiterations) {
            this._garden.animation.remove(this);
        } else {
            this._iterations++;
        }
        if (this._iterations % 5 == 0) {
            for (var j = 0; j < this._flower.length; ++j) {
                var dt = 0.05;
                var _l = this._flower[j];
                var _v = (_l.x_0 - _l.x_1) / dt;
                var _f = 0.8;
                var r = Math.abs(_l.x_0);
                if (r !== 0) {
                    _f += _l.params[2] * (_l.radius - r) * _l.x_0 / (r) + _l.params[3] * (-_v);
                }
                var x = 2 * _l.x_0 - _l.x_1 + _f * dt * dt;
                _l.x_1 = _l.x_0;
                _l.x_0 = x;
            }
        }
    };
    module.exports = flower;
});