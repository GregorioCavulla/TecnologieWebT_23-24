function checkSequenza(targetSeq) {
	// Ottieni il valore dall'input
	var inputValue = document.getElementById("textInput").value;

	if (inputValue.length > 100) {
		submitData(); // Esce dalla funzione se la lunghezza è superiore a 100
	}

	// Controlla se la sequenza è presente nell'input
	if (inputValue.includes(targetSeq)) {
		// Chiamata a un'altra funzione se la sequenza è trovata
		submitData();
	}
}