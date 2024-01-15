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
<link type="text/css" href="../styles/buttons.css" rel="stylesheet"></link>



</head>
<body>
	<div id="header" style="height: 75px; background-color: #444;">
		<%@ include file="../fragments/header.jsp"%>
	</div>
	<!-- put here your application html -->
	<div id="content">
		<div id="chat"></div>
		<table id="tabella">
			<tr id="riga0">
				<td id="dato0">
					<input type='number' id="0" oninput="checkNumerici('0')">
				</td>
				<td id="dato1">
					<input type='number' id="1" oninput="checkNumerici('1')">
				</td>
				<td id="dato2">
					<input type='number' id="2" oninput="checkNumerici('2')">
				</td>
			</tr>
			<tr id="riga1">
				<td id="dato3">
					<input type='number' id="3" oninput="checkNumerici('3')">
				</td>
				<td id="dato4">
					<input type='number' id="4" oninput="checkNumerici('4')">
				</td>
				<td id="dato5">
					<input type='number' id="5" oninput="checkNumerici('5')">
				</td>
			</tr>
			<tr id="riga2">
				<td id="dato6">
					<input type='number' id="6" oninput="checkNumerici('6')">
				</td>
				<td id="dato7">
					<input type='number' id="7" oninput="checkNumerici('7')">
				</td>
				<td id="dato8">
					<input type='number' id="8" oninput="checkNumerici('8')">
				</td>
			</tr>
		</table>
	</div>

	<div id="footer">
		<%@ include file="../fragments/footer.html"%>
	</div>
	<!-- Insert js scripts -->
	<script src="../scripts/InputsCheck.js"></script>
	<script src="../scripts/WebSocket.js"></script>

</body>
</html>