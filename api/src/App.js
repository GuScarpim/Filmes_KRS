const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// const mongoURI = 'Sua url do mongo';
// const mongoURI = 'mongodb+srv://scarpim:123@cluster0-yhxii.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true'
const mongoURI = 'mongodb+srv://GuScarpim:12345@cluster0-edmvi.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true'

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3030;
// const router = express.Router();

// Models
const FilmesModel = require('./Model/FilmesModel');

// Controllers
const FilmesController = require('./Controller/FilmesController');

// Load routes 
const FilmesRoute = require('./Routes/FilmesRoute');

app.use('/api/v1/filmes/', FilmesRoute);

/*Rotas*/
module.exports = app;

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port);
console.log('conectado a porta ' + port);
