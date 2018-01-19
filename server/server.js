import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import users from './src/routes/users';

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

// Middleware for pargin results
app.use(bodyParser.json());

// Middlewares for endpoints
app.use('/users', users)

// Default route
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))



// GET for Contacts page----------------------------------------------------
app.get('/contacts', (req, res) => {
  db.contacts.find({}).toArray((err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500);
    }
    console.log(doc)
    res.send(doc);
  })
})
// GET for Contacts page----------------------------------------------------

// Listen PORT from .env config
app.listen(process.env.PORT || 8080)