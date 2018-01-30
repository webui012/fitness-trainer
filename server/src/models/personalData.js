import mongoose from 'mongoose';

const personalData = mongoose.Schema({
  fullNameAvatar: {
    defaultAvatar: String,
    userAvatar: String,
  },
  fullNameFields: Array,
  dataFields: {
    fieldsMeasuredDataForm: Array,
    MeasuredData: {
      name: String,
      action: String,
      method: String,
      legendName: String,
    },
  },
  aimsFormData: {
    nameField: String,
    selectName: String,
    options: Array,
  },
});

export default mongoose.model('PersonalData', personalData, 'personalData');
