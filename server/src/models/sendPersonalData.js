import mongoose from 'mongoose';

const userPersonalData = mongoose.Schema({
  userPesonalData: {
    avatar: String,
    name: {
      type: String,
      maxlength: 30,
    },
    surname: {
      type: String,
      maxlength: 30,
    },
    birth: {
      type: String,
      maxlength: 12,
    },
    height: {
      type: Number,
      min: 130,
      max: 300,
    },
    weight: {
      type: Number,
      min: 45,
      max: 250,
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
  userContraindications: {
    type: String,
    maxlength: 300,
  },
},
{
  versionKey: false,
});

export default mongoose.model('UserPersonalData', userPersonalData);
