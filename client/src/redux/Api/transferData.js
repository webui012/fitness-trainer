class TransferData {

  //Getting page data for the Contacts page
  static dataLocalContacts() {
    return fetch('http://localhost:8080/contacts')
    .then( response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      return response.json();
    })
    .then( data => data )
  }

  //Getting page data for the cabinet/user page
  static dataServerUserCabinet() {
    return fetch('http://localhost:8080/cabinet/user')
      .then(response => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          return;
        }
        return response.json();
      })
      .then( data => data )
  }

  static personalDataSendToServer(data) {
    return fetch('http://localhost:8080/cabinet/user/metrics', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...data}),
    })
      .then(response => {
        return response.json();
      })
  }
}

export default TransferData;