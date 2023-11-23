const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Ciao, mondo!');
});
app.listen(port, () => {
console.log(`L'applicazione è in ascolto sulla porta ${port}`);
});