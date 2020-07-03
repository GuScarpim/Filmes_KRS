'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Filmes = Schema({
    titulo: { type: String, unique: true },
    sinopse: { type: String, unique: true },
    genero: { type: String },
    data: { type: String },
    idioma: { type: String },
    legendado: { type: Boolean },
    diretor: { type: String },
    link_imdb: { type: String },
    avaliacao: { type: Number },
});

module.exports = mongoose.model('Filmes', Filmes);