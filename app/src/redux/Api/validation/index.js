class Validation {

  checkEmptyString(str) {
    if (str === '') {
      return 'Данное поле не должно быть пустым';
    } else {
      return str;
    }
  }

  deleteSpacesAroundEdges(str) {
    return str.replace(/^\s*/,'').replace(/\s*$/,'');
  }

  checkSpaces(str) {
    if (str.match(/ /i) === null) {
      return str;
    } else {
      return 'Данное поле не должно включать пробелы';
    }
  }

  checkNotMoreOneDash(str) {
    if (str.search(/^\-/)!==-1 || str.search(/-$/)!==-1){
      return 'Данное поле не должно содержать дефисы в начале и в конце строки';
    }

    if (str.match(/-/g) !== null && str.match(/-/g).length > 1) {
      return 'Данное поле не должно содержать более одного дефиса';
    }
    return str;
  }

  checkRussianLettersAndDash(str) {
    if (/^[а-яё\-]*$/i.test(str)) {
      return str;
    } else {
      return 'Данное поле должно содержать только буквы русского алфавита';
    }
  }

  checkOnlyRussianLetters(str) {
    if (/^[а-яё]*$/i.test(str)) {
      return str;
    } else {
      console.log('Данное поле должно содержать только буквы русского алфавита');
    }
  }

  checkNonNegativeInteger() {
    if (!(/^[0-9]*$/.test(str))) {
      return console.log('Данное поле может содержать только целое неотрицательное число');
    }
  }

  checkNotBeginZero(str) {
    if (/^0[0-9]*$/.test(str)) {
      return console.log('Число не должно начинаться с 0');
    }
  }

  checkRange(str, item1, item2) {
    if (arguments.length === 3) {
      if (item1 <= +str && +str <= item2) {
        return str;
      } else {
        return (`Введите число в промежутке между ${item1} и ${item2}`);
      }
    } else {
      return console.log('The field must contain one or three parameters');
    }
  }

  checkIntegerAndFractionalNumber(str, item1, item2) {
    if (!(/^[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(str))) {
      return console.log('Данное поле может содержать только целое или дробное число');
    }
  }

  roundNumber(str, roundOrder) {
    const isNumeric = str => !isNaN(parseFloat(+str)) && isFinite(+str);
    if (isNumeric(str)) {
      const number = +str;
      return roundOrder ? `${number.toFixed(roundOrder)}` : str;
    } else {
      return `${str} - не является числом`;
    }
  }

  maxLength(str, length) {
    if (arguments.length !== 2) {
      return 'You must specify two parameters in the function';
    }

    if (str.length > length) {
      return `Данное поле не должно включать более ${length} символов, в данный момент вы ввели ${str.length} символов`;
    }
    return str;
  }
}

// const validation = new Validation();
// validation.checkRussianLettersAndDash('ррпр?опопор');

export default Validation;
