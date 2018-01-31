import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import personalData from './src/routes/personalData';
import about from './src/routes/about';
import contacts from './src/routes/contacts';
import adminCabinet from './src/routes/adminData';
import users from './src/routes/users';  //routes for users actions (login ...)
import sales from './src/routes/sales';
import auth from './src/routes/auth';
import { getServiceOrderPage, postOrder } from './src/routes/serviceOrder';
import getServicesPage from './src/routes/services';
mongoose.Promise = Promise;

// Initialize dotenv config
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}));

// API routes
app.route('/cabinet/user/service-order')
  //get service order page
  .get(getServiceOrderPage)
  //create new order
  .post(postOrder);

app.route('/services')
  .get(getServicesPage);

// Routes for user registration and auth
app.use('/api/auth', auth);
app.use('/api/users', users)

// Routes for orders
//app.use('/api/orders', orders)


app.use('/cabinet/admin', adminCabinet);
app.use('/cabinet/user', personalData);
app.use('/about', about);
app.use('/contacts', contacts);
app.use('/users', users); // middleware for users endpoints
app.use('/api/sales', sales);


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Default route
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(process.env.PORT, () => console.log(`Listen on ${process.env.PORT}`))
