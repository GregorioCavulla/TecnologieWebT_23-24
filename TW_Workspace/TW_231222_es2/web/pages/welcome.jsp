 
<%@page import="beans.Utente"%>
<%@page import="java.net.*"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.regex.*"%>
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



</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<form id="myForm" action="./welcome.jsp" method="post">
			<input type="number" id="number" name="number" oninput="submit(myForm)" />
		</form>
		<%
		String string = request.getParameter("number");
		if(string!=null){
		int numero = Integer.parseInt(string);
		%>
		
			<input type="hidden" id="numberVero" name="number" value="<%=numero %>" />
		<%
		

		for (int i = 0; i < numero; i++) {
		%>
		<form id="matrixForm<%=i %>" action="../s1" method="post">
			<input type="hidden" name="matrix" value="<%=i%>" />
			
			<input type="number" name="00" />
			<input type="number" name="01" />
			<input type="number" name="02" /> 
			<br />
			<input type="number" name="10" />
			<input type="number" name="11" />
			<input type="number" name="12" />
			<br />
			<input type="number" name="20" />
			<input type="number" name="21" />
			<input type="number" name="22" />
		</form>
		<%
		}
		}
		%>
		<button onclick='submit("matrixForm")'>QUI</button>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/JsonSend.js"></script>
</body>
</html>