function getValue(fieldName) {
	console.log("leggo value di: " + fieldName);
	return document.getElementById(fieldName).value;
}

function showAlert(message) {
	alert(message);
}

function checkSequenza(targetSeq) {
	var inputValue = getValue("...");
	if (inputValue.includes(targetSeq)) {
		showAlert("Inserita sequenza richiesta: " + targetSeq);
	}
}

function checkLunghezza(len) {
	var inputValue = getValue("...");
	if (inputValue.length > len) {
		showAlert("Raggiunta lunghezza richiesta: " + len);
	}
}

function checkAlfa() {
	var inputValue = getValue("...");
	var alphabetRegex = /^[a-zA-Z]+$/;

	if (alphabetRegex.test(inputValue)) {
		// Puoi fare qualcosa se la condizione è verificata
	} else {
		showAlert("Il testo contiene caratteri non alfabetici.");
	}
}
function checkPiena() {
let primo = [];
let secondo = [];
	let send = 0;
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 6; j++) {
			var stringId = "" + i + j;
			console.log("ho fatto i+j:" + stringId)
			var inputValue = getValue(stringId);
			console.log('valore: ' + inputValue);
			console.log("i+j =" + eval(i + j));
			if (eval(i + j) < 6) {
                primo.push(inputValue);
				//aggiungi a primo l'elemento inputValue;
				console.log("primo: " + primo);
			} else {
                secondo.push(inputValue);
				//aggiungi a secondo l'elemento inputValue;
				console.log("secondo: " + secondo);
			}
			if (inputValue == "") {
				console.log("non invio");
			} else {
				send++;
			}
		}
	}
	if (send == 36) {
		console.log("invio");
		splitSend(primo, secondo);
	}
}

function checkNumerici(element) {
	var inputValue = element.value;
	var numericRegex = /^\d+$/;

	if (numericRegex.test(inputValue)) {
		checkPiena();
	} else {
		showAlert("Il testo contiene caratteri non numerici.");
	}
}

function checkAlfaNumerici() {
	var inputValue = getValue("...");
	var numericRegex = /^\d+$/;
	var alphabetRegex = /^[a-zA-Z]+$/;

	if (numericRegex.test(inputValue) && alphabetRegex.test(inputValue)) {
		showAlert("Il testo è composto solo da caratteri alfanumerici.");
	} else {
		showAlert("Il testo contiene caratteri non alfanumerici.");
	}
}

function isValidEmail(email) {
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Esempio di utilizzo:
function checkEmail() {
	var inputValue = getValue("...");

	if (isValidEmail(inputValue)) {
		showAlert("L'indirizzo email è valido.");
	} else {
		showAlert("L'indirizzo email non è valido.");
	}
}
