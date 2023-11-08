document.getElementById('jsonForm').addEventListener('submit', function(e) {
	e.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var jsonData = {
		username: username,
		password: password
	};

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '../ajaxPost', true);
	xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.send(JSON.stringify(jsonData));

	xhr.onload = function() {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
        	document.getElementById('result').innerHTML = response.message;
		} else {
		    document.getElementById('result').innerHTML = "Errore nell'invio dei dati.";
    	}
	};
});