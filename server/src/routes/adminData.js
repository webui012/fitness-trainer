import express from 'express';
import mongoose from 'mongoose';
//import AdminCabinet from '../models/adminData';
// import UserPersonalData from '../models/sendPersonalData';
import User from '../models/user'

const router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      return console.log(err);
    };
    res.json(docs);
  });
});

export default router;
