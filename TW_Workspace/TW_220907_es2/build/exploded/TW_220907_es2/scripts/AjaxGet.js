var container = document.getElementById("data-info");
var btn = document.getElementById("btn");
var arrayTennisti =[];
var countIndex = 0;
var reqData;

btn.addEventListener("click", function() {
	//cerca il cognome
	var cognome = document.getElementById("1").value;
	let notFound = false;
	console.log(cognome);
	if (notFound || !arrayTennisti || arrayTennisti.length === 0) {
		arrayTennisti = [];
		ajaxGet(cognome);
		console.log(arrayTennisti);
	} else {
		for (let i = 0; i < arrayTennisti.length; i++) {
			if (arrayTennisti[i].cognome === cognome) {
				console.log("trovato: " + arrayTennisti[i]);
				renderHTML(arrayTennisti[i])
				break;
			} else {
				notFound = true;
			}
		}

	}
})

function ajaxGet(cognome) {
	console.log("get:"+cognome);
	var request = new XMLHttpRequest();

	//		if (countIndex !== 0) {
	//			renderHTML(reqData);
	//		} else {
	//request alla servlet impostata con la GET
	request.open('GET', '../ajaxGet');
	console.log(request.status);
	request.onload = function() {//callback
		if (request.status === 200) {
			console.log(request.responseText);
			arrayTennisti = JSON.parse(request.responseText);
			//					renderHTML(reqData);
			console.log(arrayTennisti);
		} else {
			//gestione errore
			alert("errore nella GET");
		}
	}
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	console.log(cognome);
	request.send(cognome);
	//		} //else
}

//segue la logica di rendering dell'HTML utilizzando la var HTMLstring che inizia con 
// <p> per un paragrafo o <ul> nel caso di una lista aggiungendo progressivamente i campi di data che si vogliono mostrare e concludendo con </p>



function renderHTML(data) {

	var HTMLstring = "<ul>";

	HTMLstring += "<li>cognome: " + data.cognome
		+ "rankingATP" + data.rankingATP
		+ "titoli vinti" + data.titoliVinti
		+ "partiteVinte" + data.partiteVinte
		+ "partitePerse" + data.partitePerse
		+ "id" + data.id
		+ "</li>";

	HTMLstring += "</ul>";
	container.insertAdjacentHTML('beforeend', HTMLstring);
}
