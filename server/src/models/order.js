import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  date: String,
  price: String,
  payment: String,
  status: String,
  customer: String,
  service: String
})

export default mongoose.model('Order', orderSchema)
