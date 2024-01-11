// Funzione per aggiornare l'orologio
var timeString;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Aggiorna l'orologio ogni secondo
setInterval(updateClock, 1000);

// Imposta l'orologio iniziale
updateClock();

function getTime() {
    // Se un cronometro è già in esecuzione, fermalo e restituisci il valore
   return new Date();
}