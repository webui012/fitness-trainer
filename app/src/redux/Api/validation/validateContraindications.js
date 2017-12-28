import Validation from './index';

export default (value, fieldName, action, store) => {
  let storeName = store[fieldName];
  let previousValue = value;
  let currentValue = Validation.checkEmptyString(previousValue);

  if (previousValue !== currentValue) {
    currentValue = `${currentValue}. Если у Вас противопоказания отсутствуют - просто укажите фразу "Противопоказаний нет"`;
    action({[fieldName]: currentValue});
    return;
  } else if (storeName !== null) {
    action({[fieldName]: null});
  }

  currentValue = Validation.maxLength(previousValue, 30);

  if (previousValue !== currentValue) {
    action({[fieldName]: currentValue});
    return;
  } else if (storeName !== null) {
    action({[fieldName]: null});
  }
  return currentValue;
}
