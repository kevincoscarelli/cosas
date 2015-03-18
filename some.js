
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//MÓDULO MANEJANDO TODO LO RELATIVO A #BOTON

var relBoton = (function () {
	var boton = $('#boton');
	var req = new XMLHttpRequest();

	var priv_eval = function (elemento) {
		var obj = JSON.parse(req.responseText);
		var nod = document.createElement('P');
		for (p in obj) {
			nod.innerHTML = obj[p];
		}
		var pattern = /yourname/;
		nod.innerHTML = nod.innerHTML.replace(pattern, relHidAlias.alia.val());
		nod.innerHTML += "<br>" + "Now, go fuck yourself!";
		nod.style.display = "none";
		nod.style.top = nod.style.top + 325+ "px";
		nod.style['font-size'] = 36 + 'px';
		nod.className = "biggie";
		console.log(nod.innerHTML);
		document.body.appendChild(nod, elemento);

		return nod;
	}
	
	return {
		click: function (elemento, adress) {
				boton.click(function () {
				req.open("GET", adress, false);
				req.send(null);
				console.log(req.responseText);
				var caru = $(priv_eval(elemento));

				setTimeout(function () {
					caru.fadeIn(3000);
				}, 500);
			})
		}
	}
})();



//MÓDULO MANEJANDO TODO LO RELATIVO A #HIDDEN,
//.ALIAS Y .BIGGIE, DONDE hid Y big CORRESPONDEN
//AL <P> QUE HACE FADEIN Y alias AL <INPUT>.

var relHidAlias = (function () {
	var big = $('.biggie');
	var hid = $('#hidden');
	var evento = document.createEvent('Event');
	var alias = $('.alias');

	evento.initEvent('eventox', true, true);

	document.addEventListener('eventox', function(){
		alias.focus();
	}, false);

	return {
		fadeNfocus: $(document.body).ready(function () {
			setTimeout(function(){hid.fadeIn(3000, function(){
				document.dispatchEvent(evento);
			});}, 500);
		}),

		hidden: hid,

		alia: alias
	}
})();

relHidAlias.fadeNfocus;
relBoton.click(relHidAlias.hidden, "http://bootcamp.aws.af.cm/welcome/yourname");