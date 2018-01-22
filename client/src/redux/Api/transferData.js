class TransferData {

  //Getting page data for the Contacts page
  static dataLocalContacts() {
    fetch('/contacts')
<<<<<<< HEAD
    .then( response => {
      console.dir(response)
      return response.json()
=======
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      console.log(response);
      return response.json();
>>>>>>> bc270d22ec6baafc0766ff0ab277ce8258cf8967
    })
    .then( data => {
      return console.log(data)
    })
  }
}

export default TransferData;