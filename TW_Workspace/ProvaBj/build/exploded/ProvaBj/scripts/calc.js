var matrice = ["","","","","","","","",""];
var socket=new WebSocket("ws://localhost:8080/ProvaBj/calc");

var controllo1 = false;
var controllo2 = false;

function callback(xhr, n){
	
	if ( xhr.readyState === 4 ) {
			
	if ( xhr.status === 200 ) {
		
		if(n ==1){
			
			var res = JSON.parse(xhr.responseText);
			
			controllo1 = res["risultato"];
			
		}else{
			
			var res = JSON.parse(xhr.responseText);
			
			controllo2 = res["risultato"];
			
			if(controllo1 == true && controllo2==true){
				document.getElementById("risultato").innerText = "Quadrato magico!";
			}else{
				document.getElementById("risultato").innerText = "Quadrato non magico!";
			}
			
		}
		
		
	}
		else alert("Impossibile effettuare l'operazione richiesta.");  	
			
	}
}

function gestoreXHR(){
	
	xhr1 = myGetXmlHttpRequest();
	xhr2 = myGetXmlHttpRequest();
	
	if(xhr1){
		
		selezionati = 0;
					
		xhr1.onreadystatechange = function() { callback(xhr1, 1); };		
		xhr2.onreadystatechange = function() { callback(xhr2, 2); };
					
		try {
					
			xhr1.open("get", "S1?mat="+ matrice, true);
			xhr2.open("get", "S2?mat="+ matrice, true);
					
			}catch(e) {
				alert(e);
			}	
				
			xhr1.setRequestHeader("connection", "close");
			xhr2.setRequestHeader("connection", "close");
				
			xhr1.send(null);
			xhr2.send(null);
					
					
				} else{
					alert("Impossibile eseguire l'operazione in questo browser");
				}

	
}


function gestore(element){
	
	var id = element.id;
	var value = element.value;
	
	if(isNaN(value)){
		alert("Valore inserito non numero");
		element.value= "";
		return;
	}
	
	for(var i=0; i<9; i++){
		if(value === matrice[i]){
			alert("Valore inserito gia presente");
			element.value= "";
			return;
		}
	}
	
	
	if(id == 0) matrice[0] = value;
	if(id == 1) matrice[1] = value;
	if(id == 2) matrice[2] = value;
	if(id == 3) matrice[3] = value;
	if(id == 4) matrice[4] = value;
	if(id == 5) matrice[5] = value;
	if(id == 6) matrice[6] = value;
	if(id == 7) matrice[7] = value;
	if(id == 8) matrice[8] = value;
	
	var messaggio = "" +matrice[0] + " "+ matrice[1] + " "+ matrice[2] + " "+ matrice[3] + " "+ matrice[4] + " "+ matrice[5] + " "+ matrice[6] + " "+ matrice[7] + " "+ matrice[8];
	
	socket.send(messaggio);
	
	var prova = 1;
	
	for(var i=0; i<9; i++){
		if("" === matrice[i]){
			prova =0;
			break;
		}
	}
	
	if(prova == 1) gestoreXHR();
}


socket.onmessage =  function (event){
	
	 	var message = event.data;
	 	console.log (message);
	 
	 	matrice = message.split(" ");
	 	
	 	document.getElementById("0").value = matrice[0];
	 	document.getElementById("1").value = matrice[1];
	 	document.getElementById("2").value = matrice[2];
	 	document.getElementById("3").value = matrice[3];
	 	document.getElementById("4").value = matrice[4];
	 	document.getElementById("5").value = matrice[5];
	 	document.getElementById("6").value = matrice[6];
	 	document.getElementById("7").value = matrice[7];
	 	document.getElementById("8").value = matrice[8];

}



