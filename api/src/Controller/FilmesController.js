'use strict'

const mongoose = require('mongoose');
const Filmes = mongoose.model('Filmes');

exports.get = async (req, res) => {
  await Filmes.find({})
    .then((ret) => {
      return res.status(200).send(ret);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.getId = async (req, res) => {
  await Filmes.find({ _id: req.params.id })
    .then((ret) => {
      return res.status(200).send(ret);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.post = async (req, res) => {
  const obj = req.body;
  // Receber um obj para criação no banco MongoDB
  console.log(obj)
  await Filmes.create(obj)
    .then((ret) => {
      return res.status(201).send(ret)
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.delete = async (req, res) => {
  await Filmes.deleteOne({ _id: req.params.id })
    .then((ret) => {
      return res.status(200).send(ret);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

exports.put = async (req, res) => {
  const obj = req.body;
  await Filmes.update({ _id: req.params.id }, obj)
    .then((ret) => {
      return res.status(200).send(ret)
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};