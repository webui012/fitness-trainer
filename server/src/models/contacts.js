import mongoose from 'mongoose';

const contactsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  fields: [{
    id: Number,
    icon: String,
    data: String,
  }],
  mapData: {
    center: Object,
    zoom: Number,
    bootstrapURLKeys: Object,
    text: String,
  },
})

export default mongoose.model('Contacts', contactsSchema)

