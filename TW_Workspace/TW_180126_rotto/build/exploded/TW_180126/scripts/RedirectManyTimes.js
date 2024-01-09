var btn = document.getElementById("btn-send");
var redirectDest = "../pages/download.html";

btn.addEventListener("click", function() {

	var count = document.getElementById("number").value;
	console.log(count);
	window.postMessage(count, "*");

	if (count > 0) {
		for (var i = 0; i < count; i++) {
			console.log("redirec" + i + ", message:" + count);
			setTimeout(function() {
                window.open(redirectDest);
            }, i * 1000);
		}
	} else {
		alert("Inserisci un numero valido");
	}
})