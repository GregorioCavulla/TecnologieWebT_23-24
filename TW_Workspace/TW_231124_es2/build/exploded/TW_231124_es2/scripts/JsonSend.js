function submitData() {
	// Dati da inviare

	var inputValue = document.getElementById("textInput").value;

	var dataToSend = {
		stringaNumeri: inputValue,
		numeri: null
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
function splitSend(splitIndex) {
	var inputValue = document.getElementById("textInput").value;

	if (inputValue.length > splitIndex) {
		//maggiore di splitIndex due send diverse
		console.log("piu di 500")
		ajaxSend(inputValue.slice(0, splitIndex));
		ajaxSend(inputValue.slice(splitIndex));
		flagSplit = 1;
	} else {
		console.log("meno di 500")
		//minore di splitIndex una send
		ajaxSend(inputValue);
	}
}


var flag = 0;

function ajaxSend(string) {

	var accumulatedResponse;
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '../ajaxPost', true);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(string);
	var inizio = cronometro();
	xhr.onload = function() {//callback
		if (xhr.status === 200) {
			if (flagSplit === 1) {
				if (flag === 0) {
					var response = xhr.responseTex;
					console.log(response);
					accumulatedResponse = accumulatedResponse + '' + response + '';
					console.log("acc: " + accumulatedResponse);
					flag += 1;
				} else {
					var fine = cronometro();
					var response = xhr.responseTex;
					console.log(response);
					accumulatedResponse = accumulatedResponse + '' + response + '';
					console.log("acc: " + accumulatedResponse);
					var time = fine - inizio;
					console.log("invio render: " + accumulatedResponse + time);
					render(accumulatedResponse, time);
				}
			} else {
				var fine = cronometro();
				var response = xhr.responseTex;
				console.log(response);
				accumulatedResponse = accumulatedResponse + '' + response + '';
				var time = fine - inizio;
				console.log("invio render: " + response + time);
				render(accumulatedResponse, time);
			}
		} else {
			document.getElementById('result').innerHTML = "Errore nell'invio dei dati.";
		}
	};
}
var container = document.getElementById('result');

function render(response, time) {
	console.log("Renderizzando: " + response + time);
	HTMLstring = "<p>";
	HTMLstring += response + " " + time;
	HTMLstring += "</p>";
	container.insertAdjacentHTML('beforeend', HTMLstring);
}




