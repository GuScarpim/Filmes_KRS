'use scrict'

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('conected', () => {
  console.log('Mongoose default connection is open')
});

db.on('error', error => {
  console.log(`Mongoose default connection is occured \n${error}`)
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected')
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination')
    process.exit(0);
  });
});