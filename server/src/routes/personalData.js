import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';
import Contacts from '../models/contacts';

const router = express.Router()

const db = mongoose.connection;

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
        return console.log(err);
      };
      res.json(docs);
    });
});

router.post('/cabinet/user/metrics', (req, res) => {
  let user;
  if (req.body.userId === 'personalData') {
    user = { userPesonalData: req.body };
  };
  
  if (req.body.userId === 'measuredData') {
    user = { userMetrics: req.body};
  };

  if (req.body.userId === 'contraindications') {
    user = { userContraindications: req.body.contraindications };
  } ;

  if (req.body.userId === 'aimsData') {
    user = { userAims: req.body.aims };
  };

  UserPersonalData.create(user, (err, docs) => {
    if (err) {
      return console.log(err);
    };
    console.log(docs);
    res.json(docs);
  });
});

router.get('/contacts', (req, res) => {
  Contacts.findById({ _id: "5a6517cb3e5db1237443df19" }, (err, docs) => {
    if (err) {
      return console.log(err);
    };
    res.json(docs);
  });
});

export default router

