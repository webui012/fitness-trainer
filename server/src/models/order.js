import mongoose from 'mongoose';
import moment from 'moment-timezone';
const Schema = mongoose.Schema;

// order schema definition
const orderSchema = new Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: String,
    default: moment.tz(Date.now(), 'Europe/Kiev').format()
  },
  serviceType: String,
  trainingPurpose: String
});

export default mongoose.model('Order', orderSchema);
