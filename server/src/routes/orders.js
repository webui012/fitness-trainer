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
  // console.log(req.headers.Authorization)
  console.log(req.header("Authorization"))
  const order = new ServiceOrder({
    _id: mongoose.Types.ObjectId(),
    clientId: req.currentUser._id,
    serviceType: "Правильное питание",
    trainingPurpose: "Похудеть"
  })

  order.save()
  .then(order =>
    res.status(200).json({ message: 'order was successfully created' }))
  .catch(e => res.status(500).json({ error: e }))
})

//Get all orders for current user
router.get("/", (req, res) => {
  // Find all orders with clientId == currentUser._id and send to client
  ServiceOrder.find({
    clientId: req.currentUser._id
  }).then(todos => res.json(todos));
});

export default router
