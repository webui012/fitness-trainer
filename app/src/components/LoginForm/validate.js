export  const validate = values => {
  const errors = {}
    if (!values.login) {
      errors.login = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
}