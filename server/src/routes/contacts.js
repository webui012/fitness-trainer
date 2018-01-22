import express from 'express';
import mongoose from 'mongoose';
import Contacts from '../models/contacts';

const router = express.Router()

router.get('/contacts', (req, res) => {
  let contacts = new Contacts({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    fields: Array,
    mapData: Object,
  });
  contacts.find({}, (err, data) => {
    if (err)
      res.send(err);
      console.log(data)
    res.send(data);
  });
})



export default router