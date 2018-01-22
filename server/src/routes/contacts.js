import express from 'express';
import mongoose from 'mongoose';
import Contacts from '../models/contacts';

const router = express.Router()

router.get('/contacts', (req, res) => {
  Contacts.findOne({}, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    console.log(docs)
    res.json(docs);
  });
})

router.get('/cabinet/user', (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    res.json(docs);
  });
})

export default router