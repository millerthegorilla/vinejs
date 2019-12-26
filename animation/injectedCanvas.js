ImportJS.pack('animation.injectedCanvas', function (module) {
    function injectedCanvas(container) {
        var _container = $('<div id="vineContainer"></div>');
        if (container != null) {
            _container = container;
        } else {
            $('body').append(_container);
        }
        var canvasel = $('<canvas id="vineCanvas"></canvas>');
        _container.append(canvasel);
        var canvas = canvasel[0];
        var context = canvas.getContext("2d");
        canvasel.css({
            "height": "100%",
            "width": "100%",
            "top": "0",
            "left": "0",
            "z-index": "2",
            "position": "fixed",
            "pointer-events": "none"
        });
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        return context;
    }
    module.exports = injectedCanvas;
});