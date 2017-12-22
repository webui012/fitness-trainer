export default (spinner = null, action) => {
  switch (action.type) {
    case 'FORM_REQUEST':
      return 'Данные отправляются...'

    case 'FORM_SUCCESS':
      return null;

    default:
      return spinner;
  }
}
