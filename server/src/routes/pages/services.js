import express from 'express';
import mongoose from 'mongoose';
import servicesPage from '../../models/servicesPage';

const router = express.Router();

router.get('/', (req, res) => {
  const id = '5a6e5c15e939a2281cdcdcea';
  servicesPage.findById(id, (err, servicePage) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.json(servicePage);
  });
});

export default router;
