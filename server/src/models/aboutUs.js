import mongoose from 'mongoose';

// const aboutUsAimsFormSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   aimsFormData: {
//     type: String,
//     required: true,
//   }
// })

// export default mongoose.model('AimsFormSchema', contactsSchema)

// const aboutUsFullNameFormSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   fullNameFields: {
//     avatar: true,
//     name: String,
//     surname: String,
//     birthday: {
//       type: Date,
//       default: Date.now,
//     },
//     height: {
//       type: Number,
//       max: 200,
//       min: 1,
//       required: true,
//     },
//     weight: {
//       type: Number,
//       max: 300,
//       min: 1,
//       required: true,
//     },
//   }
// })

// export default mongoose.model('FullNameFormSchema', contactsSchema)

// const aboutUsContraindicationsFormSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   contrFormData: {
//     type: String,
//     max: 200,
//     min: 1,
//     required: true,
//   }
// })

// export default mongoose.model('ContraindicationsFormSchema', contactsSchema)

// const aboutUsMeasuredDataFormSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   measuredFormData: {
//     neck: {
//       type : Number,
//       max: 50,
//       min: 1,
//       required: true,
//     },
//     breast: {
//       type : Number,
//       max: 200,
//       min: 1,
//       required: true,
//     },
//     tail: {
//       type : Number,
//       max: 200,
//       min: 1,
//       required: true,
//     },
//     hips: {
//       type : Number,
//       max: 100,
//       min: 1,
//       required: true,
//     },
//   }
// })

// export default mongoose.model('MeasuredDataFormSchema', contactsSchema)

const aboutUsGetDataSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullNameAvatar: {
    defaultAvatar: Boolean,
    userAvatar: Boolean,
  },
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

export default mongoose.model('AboutUsGetDataSchema', aboutUsGetDataSchema);