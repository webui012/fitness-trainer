import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';
import { imagePath } from '../utils/helperFunction';

const router = express.Router();

router.get('/', (req, res) => {
  PersonalData.findById({ _id: '5a67caf8e2146233b4c226d9' || null }, (err, docs) => {
    if (err) {
      return console.log(err);
    };

    res.json(docs);
  });
});

let id;

router.post('/metrics', (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  let user;

  if (req.body.userId === 'personalData') {
    user = { userPesonalData: req.body };

    UserPersonalData.create(user, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      id = docs._id;
      res.json(docs);
    });
  };

  if (req.body.userId === 'measuredData') {
    user = { userMetrics: req.body };

    UserPersonalData.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };

  if (req.body.userId === 'contraindications') {
    user = { userContraindications: req.body.contraindications };

    UserPersonalData.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };

  if (req.body.userId === 'aimsData') {
    user = { userAims: req.body.aims };

    UserPersonalData.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };
});

router.get('/metrics', (req, res) => {
  UserPersonalData.find({}, (err, docs) => {
    if (err) {
      return console.log(err);
    };

    res.json(docs);
  });
});

router.post('/metrics/avatar', (req, res) => {
  if (!req.files) {
    return res.sendStatus(400);
  } else {
    req.files.avatar.mv(imagePath(5757657, req.files.avatar.mimetype));
    // UserPersonalData.find({id: req.user.id})
    //   .then(user => {
    //     if (!user.id) { throw new Error(); }
    //
    //     req.files.avatar.mv(imagePath(user.id, req.files.avatar.mimetype));
    //     const imageTypeArray = req.files.avatar.mimetype.split('/');
    //     const imageType = imageTypeArray[imageTypeArray.length - 1];
    //     user.avatar.useravatar = `${user.id}.${imageType}`;
    //     user.save();
    //   })
    //   .catch(err => res.sendStatus(500).json({ message: 'User not found' }));
    res.send('ok');
  }
});

export default router;
