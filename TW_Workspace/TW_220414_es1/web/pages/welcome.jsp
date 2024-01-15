<%@page import="beans.*"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>
<%@ page import="utils.*"%>
<%@ page import="com.google.gson.Gson"%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<meta name="author" content="Ghigo">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<title>Welcome Page</title>

<!-- Insert external js scripts -->
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>

<!-- custom stylesheet -->
<link type="text/css" href="../styles/default.css" rel="stylesheet"></link>

<%
HttpSession s = request.getSession();
// Recupera i dati inviati dal modulo HTML
String json = (String) s.getAttribute("jsonString");
String testo = "";
int conteggio = 0;
System.out.println("dalla welcome:" + json);
if (json != null) {
	Gson gson = new Gson();

	JsonData jd = gson.fromJson(json, JsonData.class);
	conteggio = jd.getConteggio();
	testo = jd.getTesto();
}
%>

</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<form class="login-form" action="../s1" method="post" id="myForm">
			<label for="parola">Target:</label> <input type="text"
				oninput="checkAlfa(this)" id="parola" name="parola"></input> <label for="nomeFile">NomeFile:</label>
			<input type="text" oninput="checkAlfa(this)" id="nomeFile" name="nomeFile"></input>
		</form>
	</div>
	<div>
		<label for="conteggio">Conteggio:</label> <input type="text" id="conteggio" value="<%=conteggio%>"/>
		<label for="testo">Testo:</label> <input type="text" id="testo" value="<%=testo%>"/>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
</body>
</html>