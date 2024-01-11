<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Ghigo">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<title>Login</title>

<!-- Insert external js scripts -->

<!-- Insert external links -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">

<!-- Insert stylesheets -->
<link type="text/css" href="../styles/login.css" rel="stylesheet"></link>
<link type="text/css" href="../styles/default.css" rel="stylesheet"></link>
<link rel="stylesheet" href="../styles/buttons.css"></link>


</head>
<body>
	<div class="login-container">
		<h2>Login</h2>
		<form class="login-form" action="../login" method="post">
			<label for="username">Username:</label> <input type="text"
				id="username" name="username" required> <label
				for="password">Password:</label> <input type="password"
				id="password" name="password" required>
			<button type="submit" name="action" value="Accesso"
				class="button log-button">Accedi</button>
			<button type="submit" name="action" value="Registrazione"
				class="button log-button">Registrati</button>
		</form>
	</div>
	<!-- 	
	<button id="fullscreen-button">
 		<i class="fas fa-expand"></i> 
 	</button> 
 	<script> 
 		document.getElementById('fullscreen-button').addEventListener('click',function() {
					richiediModalitaSchermoIntero();
 				});
 	</script>
-->
	<%@ include file="../fragments/footer.html"%>

	<!-- Insert js scripts -->

</body>
</html>