const socket = new WebSocket("ws://localhost:8080/TW_220126_es2/websocket");

socket.onopen = function(event) {
	console.log("Connessione aperta giusta");
};

socket.onmessage = function(event) {
	console.log(event.data);
	console.log("eventdata: "+event.data);
	var message = JSON.parse(event.data);
	console.log("id: "+message.id+" val: "+message.valore);
	const chatDiv = document.getElementById(message.id);
	console.log(chatDiv);
	chatDiv.value = message.valore;
};

socket.onclose = function(event) {
	console.log("Connessione chiusa");
};

function sendMessage(messageInput) {
	console.log("invio messaggio: "+messageInput);
	socket.send(JSON.stringify(messageInput));
}