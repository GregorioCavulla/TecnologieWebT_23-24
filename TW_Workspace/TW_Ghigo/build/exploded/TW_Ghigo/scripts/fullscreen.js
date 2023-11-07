let flag = 1

function richiediModalitaSchermoIntero() {
	const element = document.documentElement; // Otteniamo l'elemento HTML
	
	if(flag){
	// Quando attivi la modalità schermo intero
	localStorage.setItem('fullscreen', 'true');
	flag=0;
	}else{
	// Quando disattivi la modalità schermo intero
	localStorage.setItem('fullscreen', 'false');
	flag=1;
	}
	
	if (element.requestFullscreen) {
		element.requestFullscreen(); // Metodo standard
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen(); // Per Firefox
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen(); // Per Chrome, Safari e Opera
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen(); // Per Internet Explorer
	}
}

// Per controllare lo stato al caricamento di una nuova pagina
const isFullscreen = localStorage.getItem('fullscreen') === 'true';

if (isFullscreen) {
  richiediModalitaSchermoIntero();
}