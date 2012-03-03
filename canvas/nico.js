(function(){
    Nico.getObject = function() {
        return document.getElementById( 'canvas' ).getContext( '2d' );
    };

    Nico.play = function() {
        Nico.attr.Object.fillText( Nico.attr.text, Nico.attr.start.x - Nico.attr.offset ,50 );
        Nico.attr.offset += 20;
        Nico.play();
    };

    Nico.remove = function() {
        obj = Nico.attr.Object;
        obj.fillStyle = 'white';
        obj.clearRect( 0, 0, 800, 800 );
        Nico.attr.offset += 20;
        //Nico.play();
    }

    Nico.attr = {};
    Nico.attr.Object = Nico.getObject();
    Nico.attr.Object.font = '40pt Arial';
    Nico.attr.text = {};
    Nico.attr.text = 'ああああああ';
    Nico.attr.start = { x:500, y:80 };
    Nico.attr.offset = 0;

})();
