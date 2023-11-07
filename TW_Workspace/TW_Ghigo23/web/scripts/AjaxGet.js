var container = document.getElementById("data-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

	var request = new XMLHttpRequest();
	//request alla servlet impostata con la GET
	request.open('GET', '../AjaxGet');

	request.onload = function() {
		if (request.status === 200) {
			var reqData = JSON.parse(request.responseText);
			renderHTML(reqData);
			console.log("richiesta inviata")
		} else {
			//gestione errore
			alert("errore nella GET");
		}
	}
	request.send();
})

//segue la logica di rendering dell'HTML utilizzando la var HTMLstring che inizia con 
// <p> per un paragrafo o <ul> nel caso di una lista aggiungendo progressivamente i campi di data che si vogliono mostrare e concludendo con </p>


function renderHTML(data) {
	var HTMLstring = "<ul>";

	for (var i = 0; i < data.length; i++) {
		HTMLstring += "<li>Username: " + data[i].username + ", Password: " + data[i].password + "</li>";
	}

	HTMLstring += "</ul>";

	container.insertAdjacentHTML('beforeend', HTMLstring);
}