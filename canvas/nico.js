(function(){
    Nico.init = function() {
        if( Nico.attr.timer ) {
            clearInterval( Nico.attr.timer );
        }
        Nico.attr.timer = setInterval( 'Nico.play()', 25 );
    };

    Nico.getObject = function() {
        return document.getElementById( 'canvas' ).getContext( '2d' );
    };

    Nico.play = function() {
        Nico.remove();
        for( var i=0; i<=Nico.attr.text.length-1; i++ ) {
            var data = Nico.attr.text[i];
            Nico.attr.Object.fillStyle = 'black';
            Nico.attr.Object.fillText( data.node, data.start.x - data.offset , data.start.y );
            Nico.attr.text[i].offset += 7;
        }
    };

    Nico.remove = function() {
        Nico.attr.Object.fillStyle = 'white';
        Nico.attr.Object.clearRect( 0, 0, 800, 800 );
    };

    Nico.attr = {};
    Nico.attr.Object = Nico.getObject();
    Nico.attr.Object.font = '40pt Arial';
    Nico.attr.text = Array();
    for( var i = 0; i<=10; i++ ) {
        Nico.attr.text[i] = {};
        var prefix = '';
        for( var j = 0; j<=i; j++ ) {
            prefix += '    ';
        }
        Nico.attr.text[i].node = prefix + "(´；ω；`)";
        Nico.attr.text[i].start = { x:800, y:80*i };
        Nico.attr.text[i].offset = 0;
    }
})();
