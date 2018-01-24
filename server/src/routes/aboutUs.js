import express from 'express';
import mongoose from 'mongoose';
import personalData from '../models/aboutUs';

const router = express.Router()

router.get('/cabinet/user/metrics', (req, res) => {
  AboutUsGetDataSchema.findById({ _id: "5a66fa213e5db1237443dfa3" }, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    console.log(docs);
    
    res.json(docs);
  });
})

export default router