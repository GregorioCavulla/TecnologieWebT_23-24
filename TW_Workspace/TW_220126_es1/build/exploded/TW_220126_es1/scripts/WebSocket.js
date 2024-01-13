const socket = new WebSocket("ws://localhost:8080/TW_Ghigo23/websocket");

socket.onopen = function(event) {
	console.log("Connessione aperta");
};

socket.onmessage = function(event) {
	const chatDiv = document.getElementById("chat");
	chatDiv.innerHTML += "<p>" + event.data + "</p>";
};

socket.onclose = function(event) {
	console.log("Connessione chiusa");
};

function sendMessage() {
	const messageInput = document.getElementById("messageInput");
	const message = messageInput.value;
	socket.send(message);
	messageInput.value = "";
}