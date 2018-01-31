import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';


import { getServiceOrderPage, postOrder } from './src/routes/serviceOrder';
import getServicesPage from './src/routes/services';
import users from './src/routes/users'; //routes for users actions (login ...)
import sales from './src/routes/sales'; //routes for users actions (login ...)

const app = express();

// Initialize dotenv config
dotenv.config();

mongoose.Promise = global.Promise;
// Connect server to ATLAS MONGODB with .env params
mongoose.connect(
  process.env.MONGO_ATLAS_HOST +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_ROUTE,
  { useMongoClient: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// API routes
app.route('/cabinet/user/service-order')
  //get service order page
  .get(getServiceOrderPage)
  //create new order
  .post(postOrder);

app.route('/services')
  .get(getServicesPage);

app.use('/users', users) // middleware for users endpoints
app.use('/api/sales', sales) // middleware for users endpoints

// Default route
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Listen PORT from .env config
app.listen(process.env.PORT || 8080);