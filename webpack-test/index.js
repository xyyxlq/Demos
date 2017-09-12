require('./app.js')
require('style-loader!css-loader!./style.css')

var a = 1

var b = function(){
	alert(a);
}

b();