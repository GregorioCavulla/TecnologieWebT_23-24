<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Errore di autenticazione</title>
    <link type="text/css" href="../styles/default.css" rel="stylesheet"></link>
</head>
<body>
    <div id="error-container">
        <h2>Errore</h2>
        <p><%= request.getAttribute("messaggioErrore") %></p>
        <a href="login.html">Torna alla pagina di login</a>
    </div>
</body>
</html>


