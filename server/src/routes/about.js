import express from 'express';
import About from '../models/about';
import { routesConstants } from '../utils/constants';

const router = express.Router();

router.get('/', (req, res) => {
  About.findContentAbout((error, content) => {
    if (error) {
      return res.status(500).json({
        message: routesConstants.messageAboutWarning,
      });
    }

    res.json(...content);
  });
});

export default router;
