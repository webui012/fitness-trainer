import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Services page schema definition
const servicesPageSchema = new Schema({
  services: [
    {
      id: Number,
      path: String,
      serviceName: String,
      imgSrc: String
    },
  ],
  motivations:
    {
      text: String,
      heading: String,
      sectionStyle: String,
      buttonStyle: String,
    }
});

const servicesPage = mongoose.model('servicespages', servicesPageSchema);
export default servicesPage;