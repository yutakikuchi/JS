(function(){
    Canvas.init = function(){
        addEventListener( 'mousedown', Canvas.mousedown, false);
        addEventListener( 'mousemove', Canvas.mousemove, false);
        addEventListener( 'mouseup'  , Canvas.mouseup  , false);
    };

    Canvas.getObject = function() {
        return document.getElementById( 'canvas' ).getContext( '2d' );
    }

    Canvas.getPosition = function(e) {
        return { x:e.clientX, y:e.clientY };
    };

    Canvas.mousedown = function(e) {
        Canvas.attr.drawing = true;
        Canvas.attr.lastposition = Canvas.getPosition(e);
    };

    Canvas.mouseup = function(e) {
        Canvas.attr.drawing = false;
    };

    Canvas.mousemove = function(e) {
        if( Canvas.attr.drawing === false ) {
            return false;
        }
        Canvas.attr.position = Canvas.getPosition(e);
        var can = Canvas.attr.Object;
        can.beginPath();
        can.moveTo(Canvas.attr.lastposition.x, Canvas.attr.lastposition.y);
        can.lineTo(Canvas.attr.position.x, Canvas.attr.position.y);
        can.closePath();
        can.stroke();
        Canvas.attr.lastposition = Canvas.attr.position;
    };

    Canvas.attr = {};
    Canvas.attr.drawing = false;
    Canvas.attr.lastposition = { x:0, y:0 };
    Canvas.attr.position = { x:0, y:0 };
    Canvas.attr.Object = Canvas.getObject();
    Canvas.attr.Object.strokeStyle = 'black'; 
    Canvas.attr.Object.lineWidth = 10;

})();
