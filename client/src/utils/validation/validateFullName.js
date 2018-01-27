import Validation from './index';

export default (value, fieldName, action, store, field) => {
  let storeName = store[fieldName];
  let previousValue = value;
  let fields = field;
 
  if ( fields === 'text') {
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

  } else if ( fields === 'date' ) {

    let currentValue = Validation.checkEmptyString(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    previousValue = Validation.deleteSpacesAroundEdges(previousValue);
    currentValue = Validation.checkMoreOneDash(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    }

    return currentValue;
  } else if (fields === 'number') {
    let currentValue = Validation.checkEmptyString(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    previousValue = currentValue;
    currentValue = Validation.deleteSpacesAroundEdges(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    previousValue = currentValue;
    currentValue = Validation.maxLength(previousValue, 3);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    previousValue = currentValue;
    currentValue = Validation.checkNonNegativeInteger(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    previousValue = currentValue;
    currentValue = Validation.checkNotBeginZero(previousValue);

    if (previousValue !== currentValue) {
      action({ [fieldName]: currentValue });
      return;
    } else if (storeName !== null) {
      action({ [fieldName]: null });
    };

    return currentValue;
  }
};
