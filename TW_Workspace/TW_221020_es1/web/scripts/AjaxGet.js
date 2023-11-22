var container = document.getElementById("data-info");
var numeroTavolo = document.getElementById("num-tavolo").innerText;
var reqData;

function getDrinks() {

	var request = new XMLHttpRequest();

	//request alla servlet impostata con la GET
	console.log("Numero del tavolo: " + numeroTavolo);
	request.open('GET', '../ajaxGet?tavolo=' + numeroTavolo);
	console.log(request.status);
	request.onload = function() {
		if (request.status === 200) {
			reqData = JSON.parse(request.responseText);
			renderHTML(reqData);
			console.log(reqData);
		} else {
			//gestione errore
			alert("errore nella GET");
		}
	}
	request.send();
}

//segue la logica di rendering dell'HTML utilizzando la var HTMLstring che inizia con 
// <p> per un paragrafo o <ul> nel caso di una lista aggiungendo progressivamente i campi di data che si vogliono mostrare e concludendo con </p>

var HTMLstring = "";
function renderHTML(data) {
	for (var i = 0; i <= data.length; i++) {
		if (data[i].stato) {
			HTMLstring = "<p>Drink ordinati: </p>";
			HTMLstring = "<ul>";
			HTMLstring += "<li>" + data[i].name + ", " + data[i].cost + ": consegnato </li>";
			HTMLstring += "</ul>";
		} else {
			HTMLstring = "<p>Drink ordinati: </p>";
			HTMLstring = "<ul>";
			HTMLstring += "<li>" + data[i].name + ", " + data[i].cost + ": ordinato </li>";
			HTMLstring += "</ul>";
		}
		container.insertAdjacentHTML('beforeend', HTMLstring);
	}
}

var contoContainer = document.getElementById("conto-info");
var btn = document.getElementById("btn");
var requestData;

btn.addEventListener("click", function() {

	var request = new XMLHttpRequest();

	request.open('GET', '../ajaxGetConto?tavolo=' + numeroTavolo);
	console.log(request.status);
	request.onload = function() {
		if (request.status === 200) {
			reqData = JSON.parse(request.responseText);
			renderHTML1(reqData);
			console.log(reqData);
		} else {
			//gestione errore
			alert("errore nella GET");
		}
	}
	request.send();
});

var HTMLstring1 = ""

function renderHTML1(data) {

	HTMLstring1 = "<p>";
	HTMLstring1 += "conto totale del tavolo: " + data.costoTavolo + " euro";
	HTMLstring1 += "</p>";
	container.insertAdjacentHTML('beforeend', HTMLstring1);

}