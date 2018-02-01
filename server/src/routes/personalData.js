import fs from 'fs';
import express from 'express';
import mongoose from 'mongoose';
import PersonalData from '../models/personalData';
import UserPersonalData from '../models/sendPersonalData';
import User from '../models/user';
import { imagePath, pathToAssets, getFileExtension } from '../utils/helperFunction';
import authenticate from "../middlewares/authenticate";

const router = express.Router();

// router.use(authenticate);

router.get('/', (req, res) => {
  // console.log(req.currentUser);
  PersonalData.findById({ _id: '5a67caf8e2146233b4c226d9' || null }, (err, docs) => {
    if (err) {
      return console.log(err);
    };

    res.json(docs);
  });
});

let id = '5a7117e55ce3db3039586237';

router.post('/metrics', (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  let user;

  // if (req.body.userId === 'personalData') {
  //   user = { userPesonalData: req.body };

  //   User.create(user, (err, docs) => {
  //     if (err) {
  //       return console.log(err);
  //     };

  //     id = docs._id;
  //     //id = req.user_id
  //     res.json(docs);
  //   });
  // };

  if (req.body.userId === 'personalData') {
    user = { userPesonalData: req.body };

    User.findByIdAndUpdate(id, { $set: user }, { new: true },(err, docs) => {
      if (err) {
        return console.log(err);
      };

      id = docs._id;
      //id = req.user_id
      res.json(docs);
    });
  };

  if (req.body.userId === 'measuredData') {
    user = { userMetrics: req.body };

    User.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };

  if (req.body.userId === 'contraindications') {
    user = { userContraindications: req.body.contraindications };

    User.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };

  if (req.body.userId === 'aimsData') {
    user = { userAims: req.body.aims };

    User.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, docs) => {
      if (err) {
        return console.log(err);
      };

      res.json(docs);
    });
  };
});

router.get('/metrics', (req, res) => {
  User.find({}, (err, docs) => {
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
    fs.readdir(pathToAssets(), (err, files) => {
      files.forEach(file => {
        if (file.includes('5757657')) {
          fs.unlink(`${pathToAssets()}/${file}`, error => {
            if (error) { throw error; };
          });
        }
      });
    });
    req.files.avatar.mv(imagePath(5757657, req.files.avatar.mimetype));
    res.send('ok');
  }
});

export default router;
