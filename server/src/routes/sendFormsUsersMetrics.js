// import express from 'express';
// import { validationResult } from 'express-validator/check';
// import {
//   contraindications,
//   aims,
//   measuredData,
//   fullName
// } from '../utils/validationAboutUs';
//
// router.post('/aimsData', aims, (req, res) => {
//   if (!req.body) {
//     return res.sendStatus(400);
//   };
//
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({
//       message: `Цель тренировок: ${errors.mapped().aims.msg}`,
//     });
//   }
//
//   console.log(req.body);
//   return res.json('200');
// });
//
// router.post('/contraindications', contraindications, (req, res) => {
//   if (!req.body) {
//     return res.sendStatus(400);
//   };
//
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({
//       message: `Противопоказания: ${errors.mapped().contraindications.msg}`,
//     });
//   }
//
//   const p = new Contraindication({message: req.body.contraindications});
//   p.save();
//
//   console.log(req.body);
//   return res.json('200');
// });
//
// router.post('/measuredData', measuredData, (req, res) => {
//   if (!req.body) {
//     return res.sendStatus(400);
//   };
//
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const field = Object.keys(errors.mapped())[0];
//     return res.status(422).json({
//       message: `Поле ${field}: ${errors.mapped()[field].msg}`,
//     });
//   }
//
//   console.log(req.body);
//   return res.json('200');
// });
//
// router.post('/personalData', fullName, (req, res) => {
//   if (!req.body) {
//     return res.sendStatus(400);
//   };
//
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const field = Object.keys(errors.mapped())[0];
//     return res.status(422).json({
//       message: `Поле ${field}: ${errors.mapped()[field].msg}`,
//     });
//   }
//
//   console.log(req.body);
//   return res.json('200');
// });
//
// export default router;
