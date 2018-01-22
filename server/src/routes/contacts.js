import express from 'express';
import mongoose from 'mongoose';
import Contacts from '../models/contacts';

const router = express.Router()

const contacts = new Contacts({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  fields: Array,
  mapData: Object,
});

router.get('/contacts', (req, res) => {
  contacts.find({}, (err, data) => {
    if (err)
      res.send(err);
    res.send(data);
  });
})



export default router