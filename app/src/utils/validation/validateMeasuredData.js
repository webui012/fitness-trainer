import Validation from './index';

export default (value, fieldName, action, store) => {
    let storeName = store[fieldName];
    let previousValue = value;
    let currentValue = Validation.checkEmptyString(previousValue);

    if (previousValue !== currentValue) {
        action({ [fieldName]: currentValue });
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }

    previousValue = currentValue
    currentValue = Validation.deleteSpacesAroundEdges(previousValue);

    if (previousValue !== currentValue) {
        action({ [fieldName]: currentValue });
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }

    previousValue = currentValue
    currentValue = Validation.maxLength(previousValue, 3);

    if (previousValue !== currentValue) {
        action({ [fieldName]: currentValue });
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }

    previousValue = currentValue
    currentValue = Validation.checkNonNegativeInteger(previousValue);

    if (previousValue !== currentValue) {
        action({ [fieldName]: currentValue });
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }

    previousValue = currentValue
    currentValue = Validation.checkNotBeginZero(previousValue);

    if (previousValue !== currentValue) {
        action({ [fieldName]: currentValue });
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }
    return currentValue
}
