import mongoose from 'mongoose';
import serviceOrder from '../models/serviceOrderPage';
import Order from '../models/serviceOrder';

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

// Get the body data and create a new Order
const postOrder = (req, res) => {
  // We assign the order info to a empty Order and send a message back if no errors
  let order = Object.assign(new Order(), req.body);
  // ...Then we save it into the db
  order.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'order was successfully created' }); // A simple JSON answer to inform the client
  });
};

export { getServiceOrderPage, postOrder };
