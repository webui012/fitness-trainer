import mongoose from 'mongoose';

const adminDataSchema = mongoose.Schema({
  rows: Array,
  users: Array,
});

export default mongoose.model('AdminCabinet', adminDataSchema, 'adminCabinet');