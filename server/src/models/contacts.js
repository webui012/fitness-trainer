import mongoose from 'mongoose';

const contactsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  fields: Array,
  mapData: Object,
})

export default mongoose.model('Contacts', contactsSchema)

