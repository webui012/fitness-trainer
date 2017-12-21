export default (spinner = null, action) => {
  switch (action.type) {
    case 'WAIT_SEND_DATA': return 'Данные отправляются...';
    case 'DELETE_WAIT_SEND_DATA': return null;
    default: return spinner;
  }
}
