import express from 'express';
import dataAbout from '../data/about';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(dataAbout);
});

export default router;
