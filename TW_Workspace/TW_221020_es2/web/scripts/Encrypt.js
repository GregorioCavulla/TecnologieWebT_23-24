function encryptWord() {
	const word = document.getElementById('wordInput').value
	const xhr = new XMLHttpRequest();
	console.log(word);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			displayResults(xhr.responseText);
		}
	};
	xhr.open('GET', '../encrypt?word=' + encodeURIComponent(word));
	xhr.send();
}

function displayResults(results) {
	document.getElementById('results').innerHTML = results;
}