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

// Middleware for pargin results
app.use(bodyParser.json());

// Middlewares for endpoints
app.use('/users', users)
//app.use('/contacts', contacts)

// Default route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.get("/contacts", (req, res) => {
  db.collection('contacts').findOne({}, (req, data) => {
    return res.send(data)
  })
});

// Listen PORT from .env config
app.listen(process.env.PORT || 8080)