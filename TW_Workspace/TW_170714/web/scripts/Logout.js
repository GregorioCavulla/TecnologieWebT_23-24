function logout() {
	$.ajax({
		type: "POST",
		url: "../logout",
		success: function(response) {
			console.log("Logout successful");
			window.location.href = "../pages/start.html";
		},
		error: function(error) {
			console.error("Logout error", error);
		}
	});
}