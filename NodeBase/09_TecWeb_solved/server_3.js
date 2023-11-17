// prova node js
const http = require('http');
const url = require("url");
const fs = require('fs');
const readline = require('readline');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const whichPage = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);

  const parola = params['parola'];

  console.log("params", params);
  console.log("parola", parola);
  console.log("whichPage", whichPage);

  const fileName = whichPage.substr(1, whichPage.length);
  console.log("fileName", fileName);

  let sentence="";
  let toRead = false;

  if(fileName != 'myFile.txt' && fileName != 'MyFile2.txt' && fileName != 'Sympathy_for_the_Devil.txt' && fileName != 'The_Sound_of_Silence.txt')
  {
    sentence = "non è stato trovato nessun file con il nome "+fileName;
    console.log("fileName error");
    toRead = false;
  }
  else{
    sentence = "il file selezionato è "+fileName;
    toRead= true;
  }
  let maxLine="";
  let maxCount=-1;

  let html = '<!DOCTYPE html>'+
    '<html>'+
    ' <head>'+
    ' <meta charset="utf-8" />'+
    ' <title>Pagina Node.js!</title>'+
    ' </head>'+
    ' <body>'+
    ' <p>'+sentence+'</p><br>';

   //console.log('1. parola is '+parola);

  if(toRead)
  {
    const myFileWriter = fs.createWriteStream('new_'+fileName, {
      flags: 'a' // 'a' means appending (old data will be preserved)
    });
    const rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false
    });
    let lineCounter=0;
    rl.on('line', function (line) {
      lineCounter++;
      let words = line.trim().split(" ");
      console.log("linea "+lineCounter+": - "+line.trim()+" - totale parole: "+words.length);
      
      if(words.length > maxCount)
      {
        console.log();
        maxCount = words.length;
        maxLine = line;
        console.log("max count: "+maxCount+" "+maxLine);
      }
     
      if(line.includes(' '+parola+' '))
          line = line.replace(parola,"");
      myFileWriter.write(line+"\n");
      
  
    });

    rl.on('close', function(){
      myFileWriter.end();
      html+= ' <p>La linea piu lunga:'+maxLine+'</p>'+
      	 ' <p>Conteggio parole:'+maxCount+'</p>'+
         ' </body>'+
         '</html>';
      res.write(html);
      res.end();    
    });

    
  }
  else{
    html+=' matte</body>'+
      '</html>';

    res.write(html);
    res.end();
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
