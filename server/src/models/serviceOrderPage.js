import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Service order page schema definition
const serviceOrderSchema = new Schema({
  orderFormData: {
    serviceType: String,
    trainingPurpose: String,
  },
  serviceToogleFields: [
    {
      value: String,
      text: String,
    },
  ],
  additionalInfoFields: {
    options: [
      {
        value: String,
        text: String,
      },
    ]
  },
});

const serviceOrder = mongoose.model('serviceorders', serviceOrderSchema);
export default serviceOrder;