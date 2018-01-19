import { check } from 'express-validator/check';

export const contraindications = [
  check('contraindications')
    .exists().withMessage('данное поле не должно быть пустым')
    .isLength({ max: 30 }).withMessage('данное поле должно содержать не более 30 символов'),
];

export const aims = [
  check('aims')
    .exists().withMessage('данное поле не должно быть пустым'),
];

export const measuredData = [
  check('age')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 2 }).withMessage('данное поле должно содержать не более 2 символов'),
  check('height')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 3 }).withMessage('данное поле должно содержать не более 3 символов'),
  check('weight')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 3 }).withMessage('данное поле должно содержать не более 3 символов'),
  check('neck')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 2 }).withMessage('данное поле должно содержать не более 2 символов'),
  check('breast')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 3 }).withMessage('данное поле должно содержать не более 3 символов'),
  check('tail')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 3 }).withMessage('данное поле должно содержать не более 3 символов'),
  check('hips')
    .exists().withMessage('данное поле не должно быть пустым')
    .matches(/^[1-9]*$/).withMessage('данное поле должно быть числовым')
    .isLength({ max: 2 }).withMessage('данное поле должно содержать не более 2 символов'),
];
