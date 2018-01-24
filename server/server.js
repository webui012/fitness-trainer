import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import contacts from './src/routes/contacts';
import personalData from './src/routes/personalData';

const app = express();

// Initialize dotenv config
dotenv.config();

// Connect server to ATLAS MONGODB with .env params
mongoose.connect(
  process.env.MONGO_ATLAS_HOST +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_ROUTE,
  { useMongoClient: true }
);
let db = mongoose.connection;

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for pargin results
app.use(bodyParser.json());

// Middlewares for endpoints
app.use('/contacts', contacts)
app.use('/cabinet/user', personalData)

// app.get('/cabinet/user', (req, res) => {
//   db.collection('personalData').findOne({}, (err, docs) => {
//     if (err) {
//       return console.log(err)
//     };
//     console.log(docs);
//     res.json(docs);
//   });
// })


// Listen PORT from .env config
app.listen(process.env.PORT || 8080)