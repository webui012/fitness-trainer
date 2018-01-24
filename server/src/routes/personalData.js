import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';

const router = express.Router()

router.get('/', (req, res) => {
  PersonalData.findOne({ _id: "5a67caf8e2146233b4c226d9" }, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    res.json(docs);
  });
})

router.post('/', (req, res) => {
  UserPersonalData.save((err, docs) => {
    if (err) {
      return console.log(err)
    };
    res.json(docs);
  });
})

export default router

