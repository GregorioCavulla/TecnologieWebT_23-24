<html>
	
	<head>
		<title>QuadratoMagico</title>
		<script type = "text/javascript" src ="scripts/utils.js"></script>
		<script type = "text/javascript" src ="scripts/calc.js"></script>
	</head>
	
	<body >
		
		<div id="ingresso">
			Matrice: <br>
			
			<form>
				<input type="text" id="0" onchange='gestore(this)'/>
				<input type="text" id="1" onchange='gestore(this)'/>
				<input type="text" id="2" onchange='gestore(this)'/> <br>
				<input type="text" id="3" onchange='gestore(this)'/>
				<input type="text" id="4" onchange='gestore(this)'/>
				<input type="text" id="5" onchange='gestore(this)'/> <br>
				<input type="text" id="6" onchange='gestore(this)'/>
				<input type="text" id="7" onchange='gestore(this)'/>
				<input type="text" id="8" onchange='gestore(this)'/>
			</form>
			
			</div>
		
		<div id="uscita">
			Risultato:
			<p id="risultato"></p>
		</div>
		
	</body>
	
</html>