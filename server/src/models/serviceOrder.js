import mongoose from 'mongoose';
import moment from 'moment-timezone';
const Schema = mongoose.Schema;

// order schema definition
const OrderSchema = new Schema(
  {
    date: { type: String, default: moment.tz(Date.now(), 'Europe/Kiev').format()},
    serviceType: String,
    trainingPurpose: String,
    client: String
  }
);

const collectionName = 'orders';
export default mongoose.model('ServiceOrder', OrderSchema, collectionName);