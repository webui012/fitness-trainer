import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import auth from './src/routes/auth';
import users from './src/routes/users';
import orders from './src/routes/orders';
import sales from './src/routes/sales';

const app = express();

dotenv.config()

mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true })

// Allow CORS
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(bodyParser.json());

// Routes for user registration and auth
app.use('/api/auth', auth);
app.use('/api/users', users)

// Routes for orders
app.use('/api/orders', orders)

// Routes for orders
app.use('/api/sales', sales)

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(process.env.PORT, () => console.log(`Listen on ${process.env.PORT}`))
