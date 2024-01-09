var container = document.getElementById("data-info");
var btn = document.getElementById("btn-recive");
var countIndex = 0;
var reqData;
btn.addEventListener("click", function() {

	var request = new XMLHttpRequest();


	if (countIndex !== 0) {
		renderHTML(reqData);
	} else {
		//request alla servlet impostata con la GET
		request.open('GET', '../ajaxGet');
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
})

//segue la logica di rendering dell'HTML utilizzando la var HTMLstring che inizia con 
// <p> per un paragrafo o <ul> nel caso di una lista aggiungendo progressivamente i campi di data che si vogliono mostrare e concludendo con </p>


function renderHTML(data) {
	if (countIndex < data.length) {
		var HTMLstring = "<ul>";
		HTMLstring += "<li>Username: " + data[countIndex].username + ", Password: " + data[countIndex].password + "</li>";
		HTMLstring += "</ul>";
		container.insertAdjacentHTML('beforeend', HTMLstring);
		countIndex++;
	} else {
		container.insertAdjacentHTML('beforeend', "Utenti terminati");
		btn.style.display = "none";
	}

}