// validation constants page AboutUs
export const validationAboutUs = {
  missingField: 'отсутствует данное поле',
  fieldNotBeEmpty: 'данное поле не должно быть пустым',
  maxFieldLength30: 'данное поле должно содержать не более 30 символов',
  maxFieldLength2: 'данное поле должно содержать не более 2 символов',
  maxFieldLength3: 'данное поле должно содержать не более 3 символов',
  ageMoreThan16: 'Ваш возраст должен быть не младше 16 лет',
  heightInRangeFrom80To249: 'Ваш рост должен быть в диапазоне от 80 до 249 см',
  weightInRangeFrom40To299: 'Ваш вес должен быть в диапазоне от 40 до 299 кг',
  neckInRangeFrom20To59: 'диаметр шеи должен быть в диапазоне от 20 до 59 см',
  breastInRangeFrom50To149: 'диаметр груди должен быть в диапазоне от 50 до 149 см',
  waistInRangeFrom30To149: 'диаметр талии должен быть в диапазоне от 30 до 149 см',
  hipInRangeFrom30To99: 'диаметр бедра должен быть в диапазоне от 30 до 99 см',
  fileInFormatJpgJpegPng: 'файл должен быть в формате jpg, jpeg или png',
  fieldWithRussianLetters: 'данное поле должно содержать только буквы русского алфавита',

  regExpEmptyString: /^$/,
  regExpChooseAimWorkouts: /(Выберите цель ваших тренировок...)/,
  regExpMoreThan16: /^(1([6-9])|[2-9][0-9])$/,
  regExpRangeFrom80To249: /^([8-9][0-9]|1[0-9][0-9]|2[0-4][0-9])$/,
  regExpRangeFrom40To299: /^([4-9][0-9]|1[0-9][0-9]|2[0-9][0-9])$/,
  regExpRangeFrom20To59: /^([2-5][0-9])$/,
  regExpRangeFrom50To149: /^([5-9][0-9]|1[0-4][0-9])$/,
  regExpRangeFrom30To149: /^([3-9][0-9]|1[0-4][0-9])$/,
  regExpRangeFrom30To99: /^([3-9][0-9])$/,
  regExpJpgJpegPng: /(^$)|(\.jpg|\.jpeg|\.png)$/i,
  regExpRussianLettersAndDash: /^[а-яё\-]*$/i,
};

// routes constants
export const routesConstants = {
  messageAboutWarning: 'Данные отсутствуют в базе данных',
}
