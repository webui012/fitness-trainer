export default (text = 'ERROR!', action) => {
  switch (action.type) {
    case 'SEND_DATA_ERROR': return `${action.payload}`;
    default: return text;
  }
}
