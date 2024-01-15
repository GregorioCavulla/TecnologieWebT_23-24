function getValue(fieldName) {
	return fieldName.value;
}

function showAlert(message) {
	alert(message);
}

function checkSequenza(targetSeq, element) {
	var inputValue = element.value;
	if (inputValue.includes(targetSeq)) {
		console.log("faccio il submit")
		submit();
	}else{
		console.log("sono gay");
	}
	
}

function checkLunghezza(len) {
	var inputValue = getValue("...");
	if (inputValue.length > len) {
		showAlert("Raggiunta lunghezza richiesta: " + len);
	}
}

function checkAlfa(element) {
	console.log(element);
	var inputValue = getValue(element);
	var alphabetRegex = /^[a-zA-Z]+$/;
	console.log("e.id: "+element.id)
	if (element.id == "nomeFile") {
		console.log("oh, è nome file: "+inputValue);
		checkSequenza(" ", element);
		inputValue = inputValue.slice(0, -1);
		console.log(inputValue);
	}

	if (alphabetRegex.test(inputValue)) {
		console.log("inserito: "+inputValue);
	} else {
		console.log("Il testo contiene caratteri non alfabetici.");
	}
}

function checkNumerici() {
	var inputValue = getValue("...");
	var numericRegex = /^\d+$/;

	if (numericRegex.test(inputValue)) {
		showAlert("Il testo è composto solo da caratteri numerici.");
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

function submit() {
	document.getElementById("myForm").submit();
}
