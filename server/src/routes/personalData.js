import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';

const router = express.Router()

router.get('/', (req, res) => {
  PersonalData.findById({ _id: "5a67caf8e2146233b4c226d9" }, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    console.log(docs)
    res.json(docs);
  });
})

export default router