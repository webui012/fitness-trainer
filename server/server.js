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
import sales from './src/routes/sales';  //routes for users actions (login ...)
mongoose.Promise = Promise;

const app = express();

dotenv.config();

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

app.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}));

app.use(bodyParser.json());

app.use('/cabinet/admin', adminCabinet);
app.use('/cabinet/user', personalData);
app.use('/about', about);
app.use('/contacts', contacts);
//app.use('/users', users); // middleware for users endpoints
app.use('/api/sales', sales); // middleware for users endpoints

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(process.env.PORT || 8080, () => console.log('Server successfully started on http://localhost:8080/'));
