import express from 'express';
import dataAbout from '../data/about';
import About from '../models/about';

const router = express.Router();

router.get('/', (req, res) => {
  About.findContentAbout((error, content) => res.json(...content));
});

export default router;
