import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import users from './src/routes/users';
import contacts from './src/routes/contacts';

const app = express();
const db = mongoose.connection;
// Initialize dotenv config
dotenv.config();

// Connect server to ATLAS MONGODB with .env params
mongoose.connect(
  process.env.MONGO_ATLAS_HOST +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_ROUTE,
  { useMongoClient: true }
);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for pargin results
app.use(bodyParser.json());

// Middlewares for endpoints
app.use('/users', users)
app.use('/contacts', contacts)

// app.get('/contacts', (req, res) => {
//  db.collection('contacts').findOne({}, (err, doc) => {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500);
//     }
//     res.send(doc);
//   })
// });

// Listen PORT from .env config
app.listen(process.env.PORT || 8080)