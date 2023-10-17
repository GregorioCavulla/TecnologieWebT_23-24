<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="author" content="Ghigo">
		<title>Errore</title>
		<link rel="stylesheet" href="styles/default.css"></link>
		<link rel="stylesheet" href="styles/header.css"></link>
		
<!-- Insert next updated stylesheets -->		
		<link rel="stylesheet" href="styles/buttons.css"></link>
		
	</head>
	<body>
		<div id="error-container">
			<h2>Errore</h2>
			<p><%= session.getAttribute("error") %></p>
    		<a href="./pages/login.html" class="button log-button">Torna alla pagina di login</a>
    	</div>
	</body>
</html>