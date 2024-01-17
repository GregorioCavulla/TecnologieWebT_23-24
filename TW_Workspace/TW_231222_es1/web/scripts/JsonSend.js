function submitData() {
	// Dati da inviare
	var numeri = document.getElementById("numbers").value;
	var dataToSend = {
		numeri: numeri,
	};

	// Serializza l'oggetto JSON in una stringa
	var jsonDataString = JSON.stringify(dataToSend);

	// Imposta il valore del campo nascosto nel form
	document.getElementById("jsonData").value = jsonDataString;

	// Invia il form
	document.getElementById("myForm").submit();
}