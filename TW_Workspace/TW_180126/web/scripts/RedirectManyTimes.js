var btn = document.getElementById("submit-button");
btn.addEventListener("click", async function() {
	// Ottieni il valore dell'input
	var numeroDiDownloads = document.getElementById("numeroDiDownloads").value;
	console.log(numeroDiDownloads);

	// Apri nuove finestre in base al numero inserito
	for (let i = 0; i < numeroDiDownloads; i++) {
		console.log("finestra: "+i+numeroDiDownloads);
		var nuovaFinestra = window.open('../pages/download.html');
		await new Promise(resolve => setTimeout(resolve, 500));
	}
});