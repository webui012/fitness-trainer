import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import personalData from './src/routes/personalData';
import about from './src/routes/about';
import sendFormsUsersMetrics from './src/routes/sendFormsUsersMetrics';

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

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for pargin results
app.use(bodyParser.json());

// Middlewares for endpoints
app.use('/', personalData);
app.use('/about', about);
app.use('/cabinet/forms', about);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Listen PORT from .env config
app.listen(process.env.PORT || 8080, () => console.log('Server successfully started on http://localhost:8080/'))
