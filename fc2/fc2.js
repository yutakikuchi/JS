javascript:(function (){
if (/video\.fc2\.com/.test(location.href) == false) {
 return;
}
var win = window.open();
if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
 win.document.open();
 win.document.close();
}
win.document.title = document.title;
var d = win.document.createElement('div');
d.setAttribute('id', 'fc2');
d.setAttribute('class', 'player');
win.document.body.appendChild(d);
var s = win.document.createElement('script');
s.setAttribute('src', 'http://static.fc2.com/video/js/outerplayer.min.js');
s.setAttribute('url', location.href);
s.setAttribute('w', '700');
s.setAttribute('h', '400');
s.setAttribute('charset', 'UTF-8');
win.document.getElementById('fc2').appendChild(s);
})();
