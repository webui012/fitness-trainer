import express from 'express';
import mongoose from 'mongoose'; //mongoose for further db dev
import path from 'path'; // local path for index.html
import dotenv from "dotenv"; // use external config for PORT
import bodyParser from 'body-parser'; // middleware for parsing

import users from './src/routes/users';  //routes for users actions (login ...)
import sales from './src/routes/sales';  //routes for users actions (login ...)

const app = express();

dotenv.config(); // initialize dotenv config

// mongoose.connect()
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


app.use(bodyParser.json());

app.use('/users', users) // middleware for users endpoints
app.use('/api/sales', sales) // middleware for users endpoints

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(process.env.PORT) // listen PORT from .env config
