function encryptWord() {
    const word = document.getElementById('wordInput').value;

    // Validazione dell'input
    if (word.length < 5 || word.length > 20) {
        console.error('La lunghezza della parola deve essere compresa tra 5 e 20 caratteri.');
        // Aggiungi un messaggio all'utente o gestisci l'errore di validazione.
        return;
    }

    fetch('../encrypt?word=' + encodeURIComponent(word))
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta. Stato: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            displayResults(data);
        })
        .catch(error => {
            console.error(error);
            // Gestione dell'errore, ad esempio, mostra un messaggio all'utente.
        });
}

function displayResults(results) {
    document.getElementById('results').innerHTML = results;
}

function checkSpecialCharacters() {
    var inputValue = document.getElementById('wordInput').value;
    var specialCharacters = /[!@#$%^&£*(),.?":{}|<>]/;
    if (specialCharacters.test(inputValue)) {
        // Evento che si vuole scatenare qua
    }
}

function checkSpecialCharacter() {
    var inputValue = document.getElementById('wordInput').value;
    console.log(inputValue);
    if (inputValue.includes("%")) {
        // Evento che si vuole scatenare qua
        encryptWord();
    }
}
