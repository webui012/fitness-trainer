import mongoose from 'mongoose';

const personalData = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
      },
      {
        type: String,
        placeholder: String,
        ref: String,
        id: String,
        nameField: String,
      },
      {
        type: String,
        placeholder: String,
        ref: String,
        id: String,
        nameField: String,
      },
      {
        type: Number,
        placeholder: String,
        ref: String,
        id: String,
        nameField: String,
      },
      {
        type: Number,
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
        },
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        },
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        },
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        },
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        },
        {
          type: Number,
          nameField: String,
          ref: String,
          placeholder: String,
        },
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
        },
        {
          optionValue: String,
          optionInfo: String,
        },
        {
          optionValue: String,
          optionInfo: String,
        },
        {
          optionValue: String,
          optionInfo: String,
        },
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