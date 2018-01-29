import express from 'express';
import mongoose from 'mongoose';
import AdminCabinet from '../models/adminData';

const router = express.Router();

router.get('/', (req, res) => {
  AdminCabinet.findById({ '_id': '5a6f8443208fa81de8af640c' || null }, (err, docs) => {
    if (err) {
      return console.log(err);
    };
    res.json(docs);
  });
});

export default router