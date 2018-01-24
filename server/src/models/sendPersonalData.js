import mongoose from 'mongoose';

const userPersonalData = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userID: String,  
  userPesonalData:{
    avatar: String,
    name: {
      type: String,
      maxlength: 30,
      required: true,
    },
    surname: {
      type: String,
      maxlength: 30,
      required: true,
    },
    birth: {
      type: String,
      maxlength: 10,
      required: true,
    },
    height: {
      type: Number,
      min: 130,
      max: 300,
      required: true,
    },
    weight: {
      type: Number,
      min: 45,
      max: 250,
      required: true,
    },
  },
  userAims: {
    type: String,
  },
  userMetrics: {
    biceps: {
      type: Number,
      min: 10,
      max: 60,
    },
    buttocks: {
      type: Number,
      min: 50,
      max: 200,
    },
    shin: {
      type: Number,
      min: 25,
      max: 50,
    },
    neck: {
      type: Number,
      min: 15,
      max: 50,
    },
    breast: {
      type: Number,
      min: 45,
      max: 250,
    },
    tail: {
      type: Number,
      min: 45,
      max: 200,
    },
    hips: {
      type: Number,
      min: 45,
      max: 250,
    },
  },
  userContraindications:{
    type: String,
    maxlength: 300,
  },
});

let UserPersonalData = mongoose.model('UserPersonalData', userPersonalData)

export default UserPersonalData;