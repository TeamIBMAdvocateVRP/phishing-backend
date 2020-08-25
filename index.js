const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const mongoUri = process.env.MONGO_URL;

mongoose.connect(mongoUri, options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Nos conectamos a la base de datos')
});

app.use(parser.urlencoded({
    extended: true,
  }));
  
app.use(parser.json({ limit: '5mb' }));

app.use('/api', require('./src/Routes/index'));

//Dirección o url a partir del dominio
// www.mipaginadebackend.com/
app.get('/',(req, res) => {
    res.send('Hello World desde el get!');
});

app.listen(port, () => {
  console.log(`Ya está arriba :D ${port}`);
});