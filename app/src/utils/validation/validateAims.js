import Validation from './index';

export default (value, fieldName, action, store) => {
  let storeName = store[fieldName];
  let previousValue = document.getElementById('default-option').value;
  let currentValue = value;

  if (previousValue === currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  };

  return currentValue;
};
