import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';
import Contacts from '../models/contacts';

const router = express.Router()

router.get('/cabinet/user', (req, res) => {
  PersonalData.findById({ _id: "5a67caf8e2146233b4c226d9" }, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    res.json(docs);
  });
})

let user = new UserPersonalData({"userPesonalData": { name: "Tom", surname: "Paul" }});

router.post('*/metrics', (req, res) => {
  user.save((err, user) => {
    if (err) {
      return console.log(err)
    };
    console.log("Сохранен объект user", user);
  });
})

router.get('/contacts', (req, res) => {
  Contacts.findById({ _id: "5a6517cb3e5db1237443df19" }, (err, docs) => {
    if (err) {
      return console.log(err)
    };
    res.json(docs);
  });
})

export default router

