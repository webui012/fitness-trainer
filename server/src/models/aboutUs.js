import mongoose from 'mongoose';

const aboutUsAimsFormSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  aimsFormData: String
})

export default mongoose.model('Contacts', contactsSchema)

const aboutUsFullNameFormSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullNameFields: {
    avatar: File,
    name: String,
    surname: String,
    birthday: {
      type: Date,
      
    },
    height: {
      type: Number,
      max: 200,
      min: 1,
      required: true,
    },
    weight: {
      type: Number,
      max: 300,
      min: 1,
      required: true,
    },
  }
})

export default mongoose.model('Contacts', contactsSchema)

const aboutUsContraindicationsFormSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  contrFormData: {
    type: String,
    max: 100,
    min: 1,
    required: true,
  }
})

export default mongoose.model('Contacts', contactsSchema)

const aboutUsMeasuredDataFormSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  measuredFormData: {
    neck: {
      type : Number,
      max: 50,
      min: 1,
      required: true,
    },
    breast: {
      type : Number,
      max: 200,
      min: 1,
      required: true,
    },
    tail: {
      type : Number,
      max: 200,
      min: 1,
      required: true,
    },
    hips: {
      type : Number,
      max: 100,
      min: 1,
      required: true,
    },
  }
})

export default mongoose.model('Contacts', contactsSchema)