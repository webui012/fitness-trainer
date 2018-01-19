import express from 'express';
import { validationResult } from 'express-validator/check';
import dataAbout from '../data/about';
import dataAboutUs from '../data/aboutUs';
import { contraindications, aims, measuredData } from './validation';

const router = express.Router();

router.get('/about', (req, res) => {
  res.json(dataAbout);
});

router.get('/cabinet/user', (req, res) => {
  res.json(dataAboutUs);
});

router.post('/cabinet/aimsData', aims, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: `Цель тренировок: ${errors.mapped().aims.msg}`,
    });
  }

  console.log(req.body);
  return res.json('200');
});

router.post('/cabinet/contraindications', contraindications, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: `Противопоказания: ${errors.mapped().contraindications.msg}`,
    });
  }

  console.log(req.body);
  return res.json('200');
});

router.post('/cabinet/measuredData', measuredData, (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const field = Object.keys(errors.mapped())[0];
    return res.status(422).json({
      message: `Поле ${field}: ${errors.mapped()[field].msg}`,
    });
  }

  console.log(req.body);
  return res.json('200');
});

router.post('/cabinet/personalData', (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  };

  console.log(req.body);
  return res.json('200');
});

// router.post('/cabinet/form', (req, res) => {
//   if (!req.body) {
//     return res.sendStatus(400);
//   };
//
//   if (req.body.userId !== undefined) {
//     switch (req.body.userId) {
//       case 'contraindications':
//         console.log(req.body.data);
//         return res.json('200');
//       case 'personalData':
//         console.log(req.body.data);
//         return res.json('200');
//       case 'aimsData':
//         console.log(req.body.data);
//         return res.json('200');
//       case 'measuredData':
//         console.log(req.body.data);
//         return res.json('200');
//     }
//   }
// });

export default router;
