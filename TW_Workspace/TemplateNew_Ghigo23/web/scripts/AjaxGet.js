var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
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
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add("hide-me");
	}
})

//segue la logica di rendering dell'HTML utilizzando la var HTMLstring che inizia con 
// <p> aggiungendo progressivamente i campi di data che si vogliono mostrare e concludendo con </p>

/*
*	l'esempio che segue è il rendering di un oggetto "animale domestico" romato in questo modo:
*	
*	  {
*		"name": "Meowsy",
*	    "species" : "cat",
*	    "foods": {
*	      "likes": ["tuna", "catnip"],
*	      "dislikes": ["ham", "zucchini"]
*	   }
*	
	la frase mostrata nel div sulla pagina è:
	Meowsy is a cat that likes tuna and catnip but dislikes ham and zucchini
*/


function renderHTML(data) {
	var HTMLstring = "";

	console.log(data);
	for (var i = 0; i < data.length; i++) {
		HTMLstring += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";
		for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
			if (ii == 0) {
				HTMLstring += data[i].foods.likes[ii];
			} else {
				HTMLstring += " and " + data[i].foods.likes[ii];
			}
		}

		HTMLstring += " but dislikes ";

		for (var ii = 0; ii < data[i].foods.dislikes.length; ii++) {
			if (ii == 0) {
				HTMLstring += data[i].foods.dislikes[ii];
			} else {
				HTMLstring += " and " + data[i].foods.dislikes[ii];
			}
		}

		HTMLstring += ".</p>";
	}

	animalContainer.insertAdjacentHTML('beforeend', HTMLstring);
}