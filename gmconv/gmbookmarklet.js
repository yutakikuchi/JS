if( !GM ) var GM = {};
if( !IE ) var IE = ( /*@cc_on!@*/0 ) ? true : false;
if( !JS ) var JS = {};
(function(){
    JS.util = {};
    JS.util.getTagName = function( tag ) {
        return document.getElementsByTagName( tag );
    }
    JS.util.$ = function( id ) {
        return document.getElementById( id );
    }
    JS.util.createElem = function( elem ) {
        return document.createElement( elem );
    }
})();

var meta = JS.util.getTagName( 'meta' );
var charset = 'utf-8';
var content,chars,reg;
for(var i=0; i<meta.length; i++ ){
    chars = meta[i].getAttribute( 'charset' );
    if( chars !== null ) {
        charset = chars;
        break;
    }
    content = meta[i].getAttribute( 'content' );
    if( content !== null ) {
        reg = /charset=(.*?)$/gi;
        content.match( reg );
        if( RegExp.$1 != '' && RegExp.$1 != null ) {
            charset =  RegExp.$1;
            break;
        }
    }
}
if( charset='t' ) charset = 'utf-8';
var script = JS.util.createElem( 'script' );
//script.setAttribute( 'src', 'gmconv_' + charset.toLowerCase() + '.js' );
script.setAttribute( 'src', 'http://mobiles-proxy.appspot.com/statics/js/v1/gmconv_' + charset.toLowerCase() + '.js' );
script.setAttribute( 'charset', charset );
script.setAttribute( 'id', 'gmconv' );
document.body.appendChild( script );
