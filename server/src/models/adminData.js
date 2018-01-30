import mongoose from 'mongoose';

const adminDataSchema = mongoose.Schema({
  rows: {
    status: String,
    date: String,
    weight: String,
    user: String,
  },
  users: Array,
});

export default mongoose.model('AdminCabinet', adminDataSchema, 'adminCabinet');
