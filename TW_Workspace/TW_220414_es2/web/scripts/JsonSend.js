function submitData() {
	// Dati da inviare

	var testoFile = document.getElementById("testo").value;
	var conteggio = document.getElementById("conteggio").value;

	var dataToSend = {
		testo: testoFile,
		numero: conteggio
		// Aggiungi altri campi secondo le tue esigenze
	};

	// Serializza l'oggetto JSON in una stringa
	var jsonDataString = JSON.stringify(dataToSend);

	// Imposta il valore del campo nascosto nel form
	document.getElementById("jsonData").value = jsonDataString;

	// Invia il form
	document.getElementById("myForm").submit();
}

function submit() {
	document.getElementById("myForm").submit();
}

var flagSplit = 0;

function splitSend(primo, secondo) {
	ajaxSend(primo);
	ajaxSend(secondo);
	flagSplit = 1;
}


var flag = 0;

function ajaxSend(string) {

	if (flagSplit === 1) {
		//split send
		var xhr1 = new XMLHttpRequest();
		var xhr2 = new XMLHttpRequest();
		xhr1.open('POST', '../ajaxPost', true);
		xhr2.open('POST', '../ajaxPost', true);
		xhr1.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr1.send(JSON.stringify(string));
		xhr2.send(JSON.stringify(string));
		xhr1.onload = function() {
			if (xhr1.status === 200) {
				var response1 = xhr1.responseText;
				console.log(response1);
			}
		}
		xhr2.onload = function() {
			if (xhr1.status === 200) {
				var response2 = xhr1.responseText;
				console.log(response2);
			}
		}
	} else {
		var xhr1 = new XMLHttpRequest();
		xhr1.open('POST', '../ajaxPost', true);
		xhr1.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr1.send(string);
		xhr1.onload = function() {
			if (xhr1.status === 200) {
				var response1 = xhr1.responseText;
				console.log(response1);
			}
		}

	}
}

var container = document.getElementById('result');

function render(response, time) {
	console.log("Renderizzando: " + response + time);
	HTMLstring = "<p>";
	HTMLstring += response + " " + time;
	HTMLstring += "</p>";
	container.insertAdjacentHTML('beforeend', HTMLstring);
}




