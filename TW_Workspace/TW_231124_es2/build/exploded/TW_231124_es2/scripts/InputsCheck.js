function checkSequenza(targetSeq) {
	// Ottieni il valore dall'input
	var inputValue = document.getElementById("textInput").value;
	
	// Controlla se la sequenza è presente nell'input
	if (inputValue.includes(targetSeq)) {
		// Chiamata a un'altra funzione se la sequenza è trovata
		alert("inserito sequenza richiesta: "+targetSeq);
	}
}

function checkLunghezza(len){
	// Ottieni il valore dall'input
	var inputValue = document.getElementById("textInput").value;
	
	//controlla lunghezza input
	if (inputValue.length > len) {
		alert("raggiunta lunghezza richiesta: "+len);
	}
}

function checkAlfa(){
    // Ottieni il valore del campo di input
    var inputValue = document.getElementById("textInput").value;

    // Espressione regolare per verificare se ci sono solo caratteri alfabetici
    var alphabetRegex = /^[a-zA-Z]+$/;

    // Controlla se il valore è composto solo da caratteri alfabetici
    if (alphabetRegex.test(inputValue)) {
    } else {
      alert("Il testo contiene caratteri non alfabetici.");
    }
}

function checkNumerici(){
	var inputValue = document.getElementById("textInput").value;

    // Espressione regolare per verificare se ci sono solo caratteri alfabetici
    var numericRegex = /^\d+$/;

    // Controlla se il valore è composto solo da caratteri alfabetici
    if (numericRegex.test(inputValue)) {
      alert("Il testo è composto solo da caratteri numerici.");
    } else {
      alert("Il testo contiene caratteri non numerici.");
    }
}

function checkAlfaNumerici(){
	var inputValue = document.getElementById("textInput").value;

    // Espressione regolare per verificare se ci sono solo caratteri alfabetici
    var numericRegex = /^\d+$/;
	var alphabetRegex = /^[a-zA-Z]+$/;
	
    // Controlla se il valore è composto solo da caratteri alfabetici
    if (numericRegex.test(inputValue)&&alphabetRegex.test(inputValue)) {
      alert("Il testo è composto solo da caratteri alfanumerici.");
    } else {
      alert("Il testo contiene caratteri non alfanumerici.");
    }
}

