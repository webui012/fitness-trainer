import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const router = express.Router()

router.post('/login', (req, res) => {
  let user = Object.assign(new User(), req.body);
  user.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'user created' });
  });
  // handle user login functions ...
})

router.get('/user-role', (req, res) => {
  User.find(function (err, users) {
    if (err) return console.error(err);
    return res.json(users);
  });
})


export default router
