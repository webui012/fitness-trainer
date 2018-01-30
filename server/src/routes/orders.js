import express from 'express';
import mongoose from 'mongoose';

import Order from '../models/order';

const router = express.Router()

// Create order
router.post('/', (req, res) => {
  const {
    date,
    price,
    payment,
    status,
    customer,
    service,
  } = req.body

  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    date: date,
    price: price,
    payment: payment,
    status: status,
    customer: customer,
    service: service
  });

  order.save()
  .then(order => res.status(200).json(order))
  // .catch(e => res.status(500).json({ error: e }))
});

router.get('/', (req, res) => {
  Order.find()
  .exec()
  .then(orders => {
    orders ? res.status(200).json(orders) :
            res.status(404).json({ error: 'Invalid id!' })
  })
  .catch(e => res.status(500).json({ error: e }))
})


export default router
