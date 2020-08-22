const express = require('express');
const app = express();
const port = 3000;


//Dirección o url a partir del dominio
// www.mipaginadebackend.com/
app.get('/',(req, res) => {
    res.send('Hello World desde el get!');
});

app.post('/',(req, res) => {
    res.send('Hello World desde el post!');
});

app.listen(port, () => {
  console.log(`Ya está arriba :D ${port}`);
});