
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

<%
	HttpSession s = request.getSession();	
	String numeriString = (String) s.getAttribute("numeriString");
%>


</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<input type="text" id="numbers" name="numbers" maxlength="50"
			oninput='checkSequenza("&")' />
		<form id="myForm" action="../s1" method="post">
			<input type="hidden" id="jsonData" name="jsonData" />
		</form>
	</div>
	<div>
		<p><%=numeriString %>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/JsonSend.js"></script>

</body>
</html>