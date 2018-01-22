class TransferData {

  //Getting page data for the Contacts page
  static dataLocalContacts() {
    fetch('/contacts')
    .then( response => {
      console.dir(response)
      return response.json()
    })
    .then( data => {
      return console.log(data)
    })
  }
}

export default TransferData;