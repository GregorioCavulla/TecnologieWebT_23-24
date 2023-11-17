// prova node js conta cose
const http = require('http');
const fs = require('fs');
const readline = require('readline');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  let html = '<!DOCTYPE html>'+
    '<html>'+
    ' <head>'+
    ' <meta charset="utf-8" />'+
    ' <title>Esercizio 1.5: vari conteggi </title>'+
    ' </head>'+
    ' <body>';
  html+=' </body>'+
      '</html>';

  const filename = "myFile.txt"; 

  let line_counter = 0;  
  let word_counter = 0;
  let max_count = 0;
  let longest_line = "";

  const rl = readline.createInterface({
      input: fs.createReadStream(filename),
      output: process.stdout,
      terminal: false
    });


  rl.on('line', function (line) {
      line_counter++;
      let words = line.trim().split(" ");
      word_counter += words.length;
      
      if(words.length > max_count)
      {
        max_count = words.length;
        longest_line = line;
        //console.log("max count: "+max_count+" "+longest_line);
      }

      html += '<label for="line'+line_counter+'">Numero di parole incontrate nella riga '+line_counter+' : </label>'+
		'<input type="text" id="line'+line_counter+'" value="'+words.length+'" readonly> </br>';
  })
  
  rl.on('close', function(){
	html += '<label for="lines">Numero di righe complessive incontrate nel file: </label>'+
		'<input type="text" id="lines" value="'+line_counter+'" readonly> </br>';
	html += '<label for="words">Numero di parole complessive incontrate nel file: </label>'+
		'<input type="text" id="words" value="'+word_counter+'" readonly></br>';
	html += '<label for="longest_line">Riga più lunga incontrata nel file: </label>'+
		'<input type="text" id="longest_line" value="'+longest_line+'" readonly></br>';
	html+=' </body>'+
	       '</html>';

	res.write(html);
	res.end();
  })
  


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
