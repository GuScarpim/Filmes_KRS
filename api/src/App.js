const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = 'Sua url do mongo';

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
