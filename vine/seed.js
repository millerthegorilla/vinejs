ImportJS.pack('vine.seed', function (module) {
    var climberbase = this.import('vine.climberbase');
    var climber = this.import('vine.climber');
    var branch = this.import('vine.branch');
    var garden = this.import('vine.garden');
	var flower = this.import('vine.flower');

    var seed = function (params) {
        this._branches = [];
		this._flowers = [];
		this._garden = params.garden;
        params.seed = this;
		this._vine = new climber(params);
        delete params;
    };
    seed.prototype.growBranch = function (params) {
        params.seed = this;
        this._branches.push(new branch(params));
    };
    seed.prototype.growFlower = function (params) {
        this._flowers.push(new flower(params.x, params.y, this._garden));
    };
    module.exports = seed;
});