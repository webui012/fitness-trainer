import mongoose from 'mongoose';

const personalData = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullNameAvatar: Object,
  fullNameFields: Array,
  dataFields: {
    fieldsMeasuredDataForm: Array,
    MeasuredData: Object,
  },
  aimsFormData: {
    nameField: String,
    selectName: String,
    options: Object,
  },
});

let PersonalData = mongoose.model('PersonalData', personalData)

export default PersonalData;