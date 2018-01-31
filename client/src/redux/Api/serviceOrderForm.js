export const getServiceOrderPage = () => {
  return fetch('http://localhost:8080/cabinet/user/service-order', {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
       Accept: 'application/json'
    }
  })
  .then(response => {
    if (response.status !== 200) {
      console.log(`Oops, problem. Status Code: ${response.status}`);
      throw new Error('Bad request');
    }
    return response.json();
  })
  .catch(error => console.log('error', error.message));
};

export const createNewOrder = data => {
  // We create the newGame object to be posted to the server
  console.log('opa');
  const newOrder = {...data};
  return fetch('http://localhost:8080/cabinet/user/service-order', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(newOrder)
  })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      return response.json()
    });
};