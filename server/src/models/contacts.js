import mongoose from 'mongoose';

const contactsSchema = mongoose.Schema({  
  title: String,
  fields: [
    {
      id: Number,
      icon: String,
      data: String,
    },
    {
      id: Number,
      icon: String,
      data: String,
    },
    {
      id: Number,
      icon: String,
      data: String,
    },
    {
      id: Number,
      icon: String,
      data: String,
    }  ,
  ],
  mapData: {
    center: {
      lat: Number,
      lng: Number,
    },
    zoom: Number,
    bootstrapURLKeys: {
      key: String,
    },
    text: String,
  },
});

export default mongoose.model('Contacts', contactsSchema);

