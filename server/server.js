import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

const MongoStore = require('connect-mongo')(session);

import users from './src/routes/users';
import accounts from './src/routes/accounts';
import authentication from './src/routes/authentication';

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

// Middleware for parsing results
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// Middleware for session
app.use(session({
  secret: 'J4QPw^(RdsQ_$ubB',
  resave: false,
  saveUninitialized: false,
  //cookie: { secure: true }
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize());
app.use(passport.session());

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Middlewares for endpoints
app.use('/users', users);
app.use('/accounts', accounts);
app.use('/authentication', authentication);

// Default route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

// Listen PORT from .env config
app.listen(process.env.PORT || 8090)
