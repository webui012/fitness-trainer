import mongoose from 'mongoose';

const homepageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  slider: Object,
})

export default mongoose.model('Homepage', homepageSchema, 'pages')
