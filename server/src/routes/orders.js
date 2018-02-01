import express from 'express';
import ServiceOrder from '../models/serviceOrder';
import mongoose from 'mongoose';

// Import auth middleware for access to currentUser._id
import authenticate from "../middlewares/authenticate";

const router = express.Router()

// Use auth middleware
router.use(authenticate);

// Create order
router.post('/', (req, res) => {
  const { serviceType, trainingPurpose } = req.body.data
  
  const order = new ServiceOrder({
    _id: mongoose.Types.ObjectId(),
    clientId: req.currentUser._id,
    user: req.currentUser.username,
    status: false,
    serviceType: serviceType,
    trainingPurpose: trainingPurpose
  })

  order.save()
  .then(order =>
    res.status(200).json({ message: 'order was successfully created' }))
  .catch(e => res.status(500).json({ error: e }))
})

//Get all orders for current user
router.get("/", (req, res) => {
  if (req.currentUser.isAdmin) {
    ServiceOrder.find().then(orders => res.json(orders));
  } else {
    ServiceOrder.find({
      clientId: req.currentUser._id
    }).then(orders => res.json(orders));
  }
});

export default router
