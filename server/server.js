import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

// Auth
import auth from './src/routes/auth';
import users from './src/routes/users';
import orders from './src/routes/orders';

// Pages
import sales from './src/routes/pages/sales';
import services from './src/routes/pages/services';
import serviceOrder from './src/routes/pages/serviceOrder';


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
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Middleware for parsing
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));

// Routes for user registration and auth
app.use('/api/auth', auth);
app.use('/api/users', users)

// Routes for orders (create / fetch)
app.use('/api/orders', orders)

// Routes for PAGES
app.use('/api/sales', sales)
app.use('/api/services', services)
app.use('/api/service-order', serviceOrder)

// Default route
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(process.env.PORT, () => console.log(`Listen on ${process.env.PORT}`))
