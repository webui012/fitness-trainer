export default (messageText = false, action) => {
  switch (action.type) {
    case 'ACTION_FAILURE':
      return true;

    case 'CLOSE_ACTION_FAILURE':
      return false;

    default:
      return messageText;
  }
}
