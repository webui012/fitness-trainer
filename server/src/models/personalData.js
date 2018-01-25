import mongoose from 'mongoose';

const personalData = mongoose.Schema({
    fullNameAvatar: {
      defaultAvatar: String,
      userAvatar: String,
    },
    fullNameFields: [
      {
        type: String,
        placeholder: String,
        ref: String,
        id: String,
        nameField: String,
      }
    ],
    dataFields: {
      fieldsMeasuredDataForm: [
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        }
      ],
      MeasuredData: {
        name: String,
        action: String,
        method: String,
        legendName: String,
      }
    },
    aimsFormData: {
      nameField: String,
      selectName: String,
      options: [
        {
          optionValue: String,
          optionInfo: String,
        }
      ]
    },
    formData: Object,
});

const PersonalData = mongoose.model('PersonalData', personalData);

export default PersonalData;