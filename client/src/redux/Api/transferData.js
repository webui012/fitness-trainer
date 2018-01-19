
class TransferData {
  //Getting page data for the Contacts page
  static dataLocalContacts() {
    fetch('/contacts')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(`tr:${data}`);
      return data;
    })
    .catch(error => console.log('error', error.message));
  }
}

export default TransferData