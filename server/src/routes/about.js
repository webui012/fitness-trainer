import express from 'express';
import About from '../models/about';

const router = express.Router();

router.get('/', (req, res) => {
  About.findContentAbout((error, content) => {
    if (error) {
      return res.status(500).json({
        message: 'Данные отсутствуют в базе данных',
      });
    }
    res.json(...content)
  });
});

export default router;
