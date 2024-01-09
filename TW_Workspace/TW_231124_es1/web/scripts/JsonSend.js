function submitData() {
	// Dati da inviare
	
	var inputValue = document.getElementById("textInput").value.slice(0, -2);
	
	var dataToSend = {
		stringaNumeri: inputValue,
		numeri : null
		// Aggiungi altri campi secondo le tue esigenze
	};

	// Serializza l'oggetto JSON in una stringa
	var jsonDataString = JSON.stringify(dataToSend);

	// Imposta il valore del campo nascosto nel form
	document.getElementById("jsonData").value = jsonDataString;

	// Invia il form
	document.getElementById("myForm").submit();
}

function submit(){
	document.getElementById("myForm").submit();
}