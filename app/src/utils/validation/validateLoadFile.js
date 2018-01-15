import Validation from './index';

export default (value, fieldName, action, store) => {
  let storeName = store[fieldName];
  if (value === 'загрузите фото') {
    return null;
  }

  let previousValue = value;
  let currentValue = Validation.checkPngJpgJpegExtension(previousValue);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  };

  return currentValue;
};
