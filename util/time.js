var ts = "2011-10-15 00:47:59"; 
print( Date.parse( ts.replace( /-/g, '/') ) / 1000 );

//print( parseInt( new Date() /1000 ) );
var d = new Date();
var year  = d.getFullYear();
var month = d.getMonth() + 1;
var day   = d.getDate();
var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
print( year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec );

var ts = 1318518000;
var d = new Date( ts * 1000 );
print( d.toString() );
print( d.toLocaleString() );
print( d.toVarDate() );

var year  = d.getFullYear();
var month = d.getMonth() + 1;
var day   = d.getDate();
var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();
print( year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec );
