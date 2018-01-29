import mongoose from 'mongoose';
import serviceOrder from '../models/serviceOrderPage';

mongoose.set('debug', true);

const getServiceOrderPage = (req, res) => {
  const id = '5a6b10b2cc6dd14094ac7da8';
  serviceOrder.findById(id, (err, servicePage) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.json(servicePage);
  });
};

export default getServiceOrderPage;
