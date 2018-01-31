export const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Это поле необходимо заполнить';
  }

  if (!values.password) {
    errors.password = 'Это поле необходимо заполнить';
  }

  return errors;
};
