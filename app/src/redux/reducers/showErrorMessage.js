export default (messageText = false, action) => {
  switch (action.type) {
    case 'ACTION_FAILURE':
      return !messageText;

    case 'CLOSE_ACTION_FAILURE':
      return !messageText;

    default:
      return messageText;
  }
}
