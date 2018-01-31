import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import auth from './src/routes/auth';
import users from './src/routes/users';
import sales from './src/routes/sales';

const app = express();

dotenv.config()

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })

app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/users', users)

app.use('/api/sales', sales)

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(process.env.PORT)
