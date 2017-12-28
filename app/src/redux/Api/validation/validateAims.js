import Validation from './index';

export default (value, fieldName, action, store) => {
    let storeName = store[fieldName];
    let previousValue = document.getElementById('default-option').value;
    let currentValue = previousValue;

    if (previousValue === currentValue) {
        let currentValue = value;
        action({ [fieldName]: currentValue});
        console.log(currentValue)
        return;
    } else if (previousValue !== currentValue) {
        let currentValue = value;
        action({ [fieldName]: currentValue });
        console.log(currentValue)
        return;
    } else if (storeName !== null) {
        action({ [fieldName]: null });
    }
}