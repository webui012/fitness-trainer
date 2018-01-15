export const validate = values => {
  const errors = {}
    if (!values.login) {
      errors.login = 'Это поле необходимо заполнить'
    }
    if (!values.password) {
      errors.password = 'Это поле необходимо заполнить'
    }
    return errors
}
