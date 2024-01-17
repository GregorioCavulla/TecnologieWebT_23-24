function getValue(fieldName) {
	return document.getElementById(fieldName).value;
}


function checkSequenza(targetSeq) {
	var inputValue = getValue("numbers");

	if (inputValue.includes(targetSeq)) {
		console.log("trovata: " + targetSeq);
		checkNumerici(inputValue.slice(0, -1));
	}


}

function checkNumerici(e) {
	var inputValue = e;
	console.log(inputValue);
	var numericRegex = /^\d+$/;

	if (numericRegex.test(inputValue)) {
		submitData();
	} else {
		alert("Il testo contiene caratteri non numerici.");
	}
}

function checkLunghezza(len) {
	var inputValue = getValue("...");
	if (inputValue.length > len) {
		showAlert("Raggiunta lunghezza richiesta: " + len);
	}
}
