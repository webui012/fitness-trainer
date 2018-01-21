import { check } from 'express-validator/check';
import { validationAboutUs } from './constants';

const {
  missingField,
  fieldNotBeEmpty,
  maxFieldLength30,
  maxFieldLength2,
  maxFieldLength3,
  ageMoreThan16,
  heightInRangeFrom80To249,
  weightInRangeFrom40To299,
  neckInRangeFrom20To59,
  breastInRangeFrom50To149,
  waistInRangeFrom30To149,
  hipInRangeFrom30To99,
  fileInFormatJpgJpegPng,
  fieldWithRussianLetters,
  regExpEmptyString,
  regExpChooseAimWorkouts,
  regExpMoreThan16,
  regExpRangeFrom80To249,
  regExpRangeFrom40To299,
  regExpRangeFrom20To59,
  regExpRangeFrom50To149,
  regExpRangeFrom30To149,
  regExpRangeFrom30To99,
  regExpJpgJpegPng,
  regExpRussianLettersAndDash,
} = validationAboutUs;

export const contraindications = [
  check('contraindications')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 30 }).withMessage(maxFieldLength30),
];

export const aims = [
  check('aims')
    .exists().withMessage(missingField)
    .not().matches(regExpChooseAimWorkouts).withMessage(fieldNotBeEmpty),
];

export const measuredData = [
  check('age')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 2 }).withMessage(maxFieldLength2)
    .matches(regExpMoreThan16).withMessage(ageMoreThan16),
  check('height')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 3 }).withMessage(maxFieldLength3)
    .matches(regExpRangeFrom80To249).withMessage(heightInRangeFrom80To249),
  check('weight')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 3 }).withMessage(maxFieldLength3)
    .matches(regExpRangeFrom40To299).withMessage(weightInRangeFrom40To299),
  check('neck')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 2 }).withMessage(maxFieldLength2)
    .matches(regExpRangeFrom20To59).withMessage(neckInRangeFrom20To59),
  check('breast')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 3 }).withMessage(maxFieldLength3)
    .matches(regExpRangeFrom50To149).withMessage(breastInRangeFrom50To149),
  check('tail')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 3 }).withMessage(maxFieldLength3)
    .matches(regExpRangeFrom30To149).withMessage(waistInRangeFrom30To149),
  check('hips')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .isLength({ max: 2 }).withMessage(maxFieldLength2)
    .matches(regExpRangeFrom30To99).withMessage(hipInRangeFrom30To99),
];

export const fullName = [
  check('avatar')
    .matches(regExpJpgJpegPng).withMessage(fileInFormatJpgJpegPng),
  check('name')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .matches(regExpRussianLettersAndDash).withMessage(fieldWithRussianLetters),
  check('surname')
    .exists().withMessage(missingField)
    .not().matches(regExpEmptyString).withMessage(fieldNotBeEmpty)
    .matches(regExpRussianLettersAndDash).withMessage(fieldWithRussianLetters),
];
