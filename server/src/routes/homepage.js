import express from 'express';
import mongoose from 'mongoose';

import Homepage from '../models/pages/homepage';

const router = express.Router()

// Create order
router.post('/', (req, res) => {
  const { title, slider } = req.body

  const hp = new Homepage({
    _id: mongoose.Types.ObjectId(),
    title: title,
    slider: slider
  });

  hp.save()
  .then(hp => res.status(200).json(hp))
  .catch(e => res.status(500).json({ error: e }))
});

router.get('/', (req, res) => {
  Homepage.findOne()
  .exec()
  .then(data => {
    data ? res.status(200).json(data) :
            res.status(404).json({ error: 'Invalid id!' })
  })
  .catch(e => res.status(500).json({ error: e }))
})


export default router
