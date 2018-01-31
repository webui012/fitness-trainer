import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router()

router.post('/login', (req, res) => {
  const { data } = req.body

  User.findOne({ email: data.email })
    .then( user => {
      if (user && user.isValidPassword(data.password)) {
        res.json({ user: user.toAuthJSON() });
      } else {
        res.status(400).json({ errors: "Invalid credentials!" });
      }
    });
});

export default router
