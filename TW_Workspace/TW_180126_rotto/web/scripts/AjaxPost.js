document.getElementById('btn-url').addEventListener("click", function() {
    var urlLink = document.getElementById('url').value;
    var totale = document.getElementById('number').value;

    // Effettua l'escape della stringa URL
    var encodedUrl = encodeURIComponent(urlLink);

    var jsonData = {
        url: encodedUrl,
        totale: totale,
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
