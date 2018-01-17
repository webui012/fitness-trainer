import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const router = express.Router()

router.post('/login', (req, res) => {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
  });
  // handle user login functions ...
})


export default router
