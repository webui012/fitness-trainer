export const validate = values => {
  let errors ={};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 5) {
    errors.password1 = 'Must be no less then 5 characters'
  } else if (!/[a-zA-Z]\d+/i.test(values.password1)) {
    errors.password1 = 'Must contain digits end characters'
  }
   if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2 !== values.password1) {
    errors.password2 = "Passwords doesn't match"
    }
  return errors
}