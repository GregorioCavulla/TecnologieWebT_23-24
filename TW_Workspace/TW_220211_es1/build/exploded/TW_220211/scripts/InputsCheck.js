function getValue(fieldName) {
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
        console.log("Il testo è composto solo da caratteri alfanumerici.");
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
