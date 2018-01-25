import { VALIDATION_WARNING } from '../constants';

class Validation {

  static checkEmptyString(str) {
    if (str === '') {
      return VALIDATION_WARNING.emptyString;
    } else {
      return str;
    }
  }

  static deleteSpacesAroundEdges(str) {
    return str.replace(/^\s*/,'').replace(/\s*$/,'');
  }

  static checkSpaces(str) {
    if (str.match(/ /i) === null) {
      return str;
    } else {
      return VALIDATION_WARNING.notSpaces;
    }
  }

  static checkNotMoreOneDash(str) {
    if (str.search(/^\--/) !== -1 || str.search(/-$/) !== -1) {
      return VALIDATION_WARNING.notBeginAndEndDash;
    }

    if (str.match(/--/g) !== null && str.match(/-/g).length > 1) {
      return VALIDATION_WARNING.notMoreOneDash;
    };
    return str;
  }

  static checkRussianLettersAndDash(str) {
    if (/^[а-яё0-9\-]*$/i.test(str)) {
      return str;
    } else {
      return VALIDATION_WARNING.rusLettersAndDash;
    }
  }

  static checkOnlyRussianLetters(str) {
    if (/^[а-яё0-9]*$/i.test(str)) {
      return str;
    } else {
      return VALIDATION_WARNING.rusLettersAndDash;
    }
  }

  static checkNonNegativeInteger(str) {
    if (!(/^[0-9]*$/.test(str))) {
      return VALIDATION_WARNING.nonNegativeInteger;
    } else {
      return str;
    }
  }

  static checkNotBeginZero(str) {
    if (/^0[0-9]*$/.test(str)) {
      return VALIDATION_WARNING.notBeginZero;
    } else {
      return str;
    }
  }

  static checkRange(str, item1, item2) {
    if (arguments.length === 3) {
      if (item1 <= +str && +str <= item2) {
        return str;
      } else {
        return `Введите число в промежутке между ${item1} и ${item2}`;
      }
    } else {
      return console.log(VALIDATION_WARNING.rangeArguments);
    }
  }

  static checkIntegerAndFractionalNumber(str, item1, item2) {
    if (!(/^[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(str))) {
      return VALIDATION_WARNING.fractionalNumber;
    } else {
      return str;
    }
  }

  static roundNumber(str, roundOrder) {
    const isNumeric = str => !isNaN(parseFloat(+str)) && isFinite(+str);
    if (isNumeric(str)) {
      const number = +str;
      return roundOrder ? `${number.toFixed(roundOrder)}` : str;
    } else {
      return `${str} - не является числом`;
    }
  }

  static maxLength(str, length) {
    if (arguments.length !== 2) {
      return console.log(VALIDATION_WARNING.maxLengthArguments);
    }

    if (str.length > length) {
      return `Данное поле не должно включать более ${length} символов, в данный момент количество введённых символов равно ${str.length}`;
    };

    return str;
  }

  static checkPngJpgJpegExtension(str) {
    if (!(/(\.jpg|\.jpeg|\.png)$/i.test(str))) {
      return VALIDATION_WARNING.pngJpgJpegExtension;
    } else {
      return str;
    }
  }
}

export default Validation;
