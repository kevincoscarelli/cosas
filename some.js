var hid = $('#hidden');
var evento = document.createEvent('Event');
var alias = $('.alias');
var boton = $('#boton');
var req = new XMLHttpRequest();

evento.initEvent('eventox', true, true);

document.addEventListener('eventox', function(){
	alias.focus();
}, false)

$(document.body).scroll(function () {
	hid.css('bottom', toString(document.body.scrollTop + 200)+'px');
});

$(document.body).ready(function () {
	setTimeout(function(){hid.fadeIn(3000, function(){
		document.dispatchEvent(evento);

	});}, 500);
});

boton.click(function () {
	req.open("GET", "http://bootcamp.aws.af.cm/welcome/yourname", false);
	req.send(null);
	console.log(req.responseText);
});