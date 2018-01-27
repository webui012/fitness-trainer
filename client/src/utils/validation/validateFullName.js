import Validation from './index';

export default (value, fieldName, action, store, field) => {
  let storeName = store[fieldName];
  let previousValue = value;
  let fields = field;
     console.log(fields);
  if ( fields === 'text') {
    console.log('boom')
  };

  let currentValue = Validation.checkEmptyString(previousValue);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  };

  previousValue = Validation.deleteSpacesAroundEdges(previousValue);
  currentValue = Validation.checkNotMoreOneDash(previousValue);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  }

  currentValue = Validation.checkRussianLettersAndDash(previousValue);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  }
  previousValue = currentValue;
  currentValue = Validation.checkMoreOneDash(previousValue);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  }
  previousValue = currentValue;
  currentValue = Validation.maxLength(previousValue, 30);

  if (previousValue !== currentValue) {
    action({ [fieldName]: currentValue });
    return;
  } else if (storeName !== null) {
    action({ [fieldName]: null });
  };

  return currentValue;
};
