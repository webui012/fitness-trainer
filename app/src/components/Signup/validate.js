export const validate = values => {
  let errors = {};
  if (!values.username) {
    errors.username = 'Это поле необходимо заполнить';
  } else if (values.username.length > 15) {
    errors.username = 'Не более 15 символов';
  }

  if (!values.email) {
    errors.email = 'Это поле необходимо заполнить';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неверный email адрес';
  }

  if (!values.password1) {
    errors.password1 = 'Это поле необходимо заполнить';
  } else if (values.password1.length < 5) {
    errors.password1 = 'Не менее 5 символов';
  } else if (!/[a-zA-Z]\d+/i.test(values.password1)) {
    errors.password1 = 'Должен содержать буквы и цифры';
  }

  if (!values.password2) {
    errors.password2 = 'Это поле необходимо заполнить';
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'Пароли не совпадают';
  }

  return errors;
};
