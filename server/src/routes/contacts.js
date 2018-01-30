import express from 'express';
import mongoose from 'mongoose';
import Contacts from '../models/contacts';

const router = express.Router();

router.get('/', (req, res) => {
  Contacts.findById({ _id: '5a6517cb3e5db1237443df19' }, (err, docs) => {
    if (err) {
      return console.log(err);
    };

    res.json(docs);
  });
});

export default router;
