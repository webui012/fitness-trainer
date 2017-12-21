const initialstate = {
  loading: true/false,//
  data: null, //data from server
  error: null //data for error message
}

export default (spinner = null, action) => {
  switch (action.type) {
    case 'WAIT_SEND_DATA':
      return 'Данные отправляются...';//Object.assign({},initialstate, {initialstate.loading:true}})

    case 'DELETE_WAIT_SEND_DATA':
      return null;//getSpinner

    default:
      return spinner;
  }
}
