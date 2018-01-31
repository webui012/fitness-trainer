import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import auth from './src/routes/auth';
import users from './src/routes/users';
//import orders from './src/routes/orders';
import sales from './src/routes/pages/sales';
import services from './src/routes/pages/services';

import { getServiceOrderPage, postOrder } from './src/routes/serviceOrder';

// Initialize dotenv config
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const app = express();

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
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


// Routes for user registration and auth
app.use('/api/auth', auth);
app.use('/api/users', users)

// Routes for orders
//app.use('/api/orders', orders)

// Routes for PAGES
app.use('/api/sales', sales)
app.use('/api/services', services)

// Default route
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(process.env.PORT, () => console.log(`Listen on ${process.env.PORT}`))
