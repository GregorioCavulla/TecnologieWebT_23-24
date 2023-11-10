
function poll() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				var message = xhr.responseText;
				displayMessage(message);
				poll(); // Make the next request
			} else {
				console.error("Error during long polling request");
				setTimeout(poll, 1000); // Retry after 1 second on error
			}
		}
	};
	xhr.open("GET", "../longPolling", true);
	xhr.send();
}

function sendMessage() {
	var messageInput = document.getElementById("message-input");
	var message = messageInput.value.trim();

	if (message !== "") {
		// You can send the message to the server here (not implemented in this example)
		// For simplicity, let's assume the server echoes the message back to all clients
		displayMessage("You: " + message);
		messageInput.value = "";
	}
}

function displayMessage(message) {
	var chatContainer = document.getElementById("chat-container");
	chatContainer.innerHTML += "<p>" + message + "</p>";
	chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}

// Start the long polling process
poll();




