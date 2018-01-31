import express from 'express';
import Order from '../models/order';
import mongoose from 'mongoose';
// Import auth middleware for access to currentUser._id
import authenticate from "../middlewares/authenticate";

const router = express.Router()

// Use auth middleware
router.use(authenticate);

// Create order
router.post('/', (req, res) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    clientId: req.currentUser._id,
    // Эти два поля пока хардкод, но данные должны идти из req.body
    serviceType: "Правильное питание",
    trainingPurpose: "Похудеть"
  })

  order.save()
  .then(order => res.status(200).json(order))
  .catch(e => res.status(500).json({ error: e }))
})

//Get all orders for current user
router.get("/", (req, res) => {
  // Find all orders with clientId == currentUser._id and send to client
  Order.find({ clientId: req.currentUser._id }).then(todos => res.json(todos));
});

export default router
