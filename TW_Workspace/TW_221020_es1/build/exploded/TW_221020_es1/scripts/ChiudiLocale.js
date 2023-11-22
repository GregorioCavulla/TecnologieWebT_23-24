function chiudiLocale() {
	$.ajax({
		type: "POST",
		url: "../chiusura",
		success: function(response) {
			console.log("Logout successful");
		},
		error: function(error) {
			console.error("Logout error", error);
		}
	});
}