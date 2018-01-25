import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';
import Contacts from '../models/contacts';

const router = express.Router()

let db = mongoose.connection;

router.get('/cabinet/user', (req, res) => {
  // PersonalData.findById({ _id: "5a67caf8e2146233b4c226d9" }, (err, docs) => {
  //   if (err) {
  //     return console.log(err)
  //   };
  //   console.log(docs)
  //   res.json(docs);
  // });
    db.collection('personalData').findOne({}, (err, docs) => {
      if (err) {
        return console.log(err)
      };
      res.json(docs);
    });
})

let user = {
  id: "5a698c93e21462414c0c087",
  "userPesonalData": { 
    name: "Tom", 
    surname: "Paul",
    birth: "10-10-2000",
    height: 170,
    weight: 70,
  }
}

router.post('/cabinet/user/metrics', (req, res) => {
  let newUser = new UserPersonalData(req.body);
  console.log(req.body)
  newUser.save((err, docs) => {
    if (err) {
      return console.log(err)
    };
    console.log(docs)
    res.json(docs);
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

