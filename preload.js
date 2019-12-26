//https://www.gregmcleod.com/import-js-3-0-overview/
ImportJS.preload({
    baseUrl: "",
    packages: ['vine/garden.js'],
    strict: true,
    libs: ['libs/jquery/jquery-1.9.0.min.js'],
    autoCompile: true,
    ready: function (e) {
        ImportJS.compile();
        var garden = ImportJS.unpack("vine.garden");
        var _garden = new garden({
                numOfSeeds: 2,
                vineflex: .1, //.9
                branchflex: .1,
                branchChance: 1,
                branchLength: 50,
                branchTimeMax: 1200,
                branchTimeMin: 500,
                stemLength: 200,
                top: 100,
                left: 10,
                height: window.innerHeight -100,
                width: window.innerWidth - 100,
                time: 100,
                startCorner: "BR",
                direction: "CCW",
                girth: 8,
                numOfSides: 2,
                numCurvesPerSide: 3,
                curveDepth: 40,
                bark: 1,
                barkColor: "#000000",
                color: "#655412",
                autoStart: true,
                when: 0,
                autoPause: false,
                container: null,
                zindex: null,
                position: "fixed"
        });
    },
    error: function (e) {
        console.log("error on files: ", e)
    }
});