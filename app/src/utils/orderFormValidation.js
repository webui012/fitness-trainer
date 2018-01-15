import {
  require,
  positiveNumber,
  wholeNumber,
  isNumber,
  symbols,
  minAge,
  notBeginZero,
  nonNegativeInteger,
  chooseService,
  chooseAim
} from '../utils/constants';

// checking required field
const required = value =>
  value ? undefined : require;

// checking for negative number
const negativeNumber = value =>
  value < 0 ? positiveNumber : undefined;

// checking for fractional number
const fractionalNumber = value =>
  (parseInt(value) === parseFloat(value)) ? undefined : wholeNumber;

// checking for string in number
const stringInNumber = value =>
  isNaN(Number(value)) ? isNumber : undefined;

// checking for symbols
const specialSymbols = value =>
  !/^\d+$/.test(value) ? symbols : undefined;

// checking for minimum age
const minMaxAge = value =>
  value < 18 ? minAge : undefined;

// checking for number begin from 0
const checkNotBeginZero = value =>
  /^0[0-9]*$/.test(value) ? notBeginZero : undefined;

// checking for number begin from 0
const checkNonNegativeInteger = value =>
  (!(/^[0-9]*$/.test(value))) ? nonNegativeInteger : undefined;

// checking for maximum number length
const maxLength = max => value =>
  value && value.length > max ? `максимум ${max}-х значное число` : undefined;
const maxLength2 = maxLength(2);

// checking for minimum value
const minValue = min => value =>
  value && value < min ? `минимально допустимое значение ${min}` : undefined;
const minValue80 = minValue(80);
const minValue20 = minValue(20);
const minValue10 = minValue(10);

const maxValue = max => value =>
  value && value > max ? `максимальное допустимое значение ${max}` : undefined;
const maxValue250 = maxValue(250);
const maxValue200 = maxValue(200);

// checking for option selected
export const checkOptionSelected = value =>
  value === 'default' ? chooseService : undefined;
// checking for option selected
export const checkAimSelected = value =>
  value === 'default' ? chooseAim : undefined;

// combining validation rules
export const ageValidation = [
  negativeNumber,
  checkNotBeginZero,
  checkNonNegativeInteger,
  stringInNumber,
  minMaxAge,
  maxLength2
];
export const weightValidation = [
  negativeNumber,
  checkNotBeginZero,
  checkNonNegativeInteger,
  stringInNumber,
  minValue20,
  maxValue250
];
export const heightValidation = [
  negativeNumber,
  checkNotBeginZero,
  checkNonNegativeInteger,
  stringInNumber,
  minValue80,
  maxValue250
];
export const bodyParams = [
  negativeNumber,
  checkNotBeginZero,
  checkNonNegativeInteger,
  stringInNumber,
  minValue10,
  maxValue200
];