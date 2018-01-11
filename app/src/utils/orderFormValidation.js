const require = 'This field is required',
      positiveNumber = 'Must be a positive number',
      wholeNumber = 'Must be a whole number',
      isNumber = 'Must be a number',
      symbols = 'Unnecessary symbol(s)',
      minAge = 'You should be at least 18',
      correctValue = 'Please input correct value';

// checking required field
export const required = value =>
  value ? undefined : require;

// checking for negative number
export const negativeNumber = value =>
  value < 0 ? positiveNumber : undefined;

// checking for fractional number
export const fractionalNumber = value =>
  (Number(value) ^ 0) === Number(value) ? undefined : wholeNumber;

// checking for string in number
export const stringInNumber = value =>
  isNaN(Number(value)) ? isNumber : undefined;

// checking for symbols
export const specialSymbols = value =>
  !/^\d+$/.test(value) ? symbols : undefined;

// checking for minimum age
export const minMaxAge = value =>
  value < 18 ? minAge : undefined;

// checking for minimum or maximum height
export const minMaxHeight = value =>
  (value < 80 || value > 250) ? correctValue : undefined;

// checking for minimum or maximum weight
export const minMaxWeight = value =>
  (value < 20 || value > 250) ? correctValue : undefined;

// checking for minimum or maximum measurements
export const minMaxBodyParameters = value =>
  (value < 10 || value > 200) ? correctValue : undefined;

// checking for maximum number length
const maxLength = max => value =>
  value && value.length > max ? `Maximum ${max} digits or less` : undefined;

export const maxLength2 = maxLength(2);

export const ageValidation = [ negativeNumber, fractionalNumber, specialSymbols, required, stringInNumber, minMaxAge, maxLength2 ];
export const weightValidation = [ negativeNumber, fractionalNumber, specialSymbols, required, stringInNumber, minMaxWeight ];
export const heightValidation = [ negativeNumber, fractionalNumber, specialSymbols, required, stringInNumber, minMaxHeight ];
export const bodyParams = [ negativeNumber, fractionalNumber, specialSymbols, required, stringInNumber, minMaxBodyParameters ];