// prova node js conta cose da file su url
const http = require('http');
const url = require('url');
const fs = require('fs');
const readline = require('readline');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {


  if (url.parse(req.url).pathname === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
    return;
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const whichPage = url.parse(req.url).pathname;
  console.log("whichPage", whichPage);
  const filename = whichPage.substr(1, whichPage.length);

  if (!filename){
    res.end("please provide file by url");
    return;
  }
  
    
  let html = '<!DOCTYPE html>'+
    '<html>'+
    ' <head>'+
    ' <meta charset="utf-8" />'+
    ' <title>Esercizio 1.5: vari conteggi </title>'+
    ' </head>'+
    ' <body>';
  html+=' </body>'+
      '</html>';


  let line_counter = 0;  
  let word_counter = 0;
  let max_count = 0;
  let longest_line = "";

  const rl = readline.createInterface({
      input: fs.createReadStream(filename),
      output: process.stdout,
      terminal: false
    });

/*
   const fs = file_stream.createReadStream(file_name)
   fs.on('error', function (err) {
               alert("File inesistente o errore nell\'apertura del file";
               html+=' </body>'+
	           '</html>';
	       res.write(html);
	       res.end();
   });
   const rl = read_line.createInterface({
    input: fs
   });
*/

  rl.on('line', function (line) {
      line_counter++;
      let words = line.trim().split(" ");
      word_counter += words.length;
      console.log("line: "+line_counter+"; words: "+words.length);      

      if(words.length > max_count)
      {
        max_count = words.length;
        longest_line = line;
        console.log("max count: "+max_count+" "+longest_line);
      }

      html += '<label for="line'+line_counter+'">Numero di parole incontrate nella riga '+line_counter+' : </label>'+
		'<input type="text" id="line'+line_counter+'" value="'+words.length+'" readonly> </br>';
  })

  
  rl.on('close', function(){
	html += '<label for="lines">Numero di righe complessive incontrate nel file: </label>'+
		'<input type="text" id="lines" value="'+line_counter+'" readonly> </br>';
	html += '<label for="words">Numero di parole complessive incontrate nel file: </label>'+
		'<input type="text" id="htmls" value="'+word_counter+'" readonly></br>';
	html += '<label for="longest_line">Riga più lunga incontrata nel file: </label>'+
		'<input type="text" id="longest_line" value="'+longest_line+'" size=50 readonly></br>';
	html+=' </body>'+
	       '</html>';

	res.write(html);
	res.end();
  })
  


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
