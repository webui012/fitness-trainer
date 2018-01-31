import express from 'express';
import User from '../models/user';
import mongoose from 'mongoose';

const router = express.Router()

// Create new user
router.post('/signup', (req, res) => {
  // Get password and email data from body
  const { data } = req.body

  // Create new user with user schema
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    email: data.email,
    isAdmin: false
  })

  // Hash password with user method
  user.setPassword(data.password)

  // Save user to database
  user.save()
  .then(user => res.status(200).json({ user: user.toAuthJSON() }))
  .catch(e => res.status(500).json({ error: e }))
});

export default router
