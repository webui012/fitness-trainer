class TransferData {

  //Getting page data for the Contacts page
  static dataLocalContacts(host, path) {
    return fetch(`${host}${path}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }

      return response.json();
    });
  }

  //Getting page data for the cabinet/user page
  static dataServerUserCabinet(host, path) {
    return fetch(`${host}${path}`)
      .then(response => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          return;
        }

        return response.json();
      });
  }

  static personalDataSendToServer(data, host, path) {
    return fetch(`${host}${path}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }

      return response.json();
    });
  }
}

export default TransferData;
