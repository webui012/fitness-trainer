//const myHeaders = new Headers();

const myInit = {
  method: 'GET',
  //headers: myHeaders,
  //mode: 'cors',
  //cache: 'default',
  //credentials: 'omit',
  //'include'
  //
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
};

export default (host, path) =>
  fetch(`${host}${path}`, myInit)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        response.json().then(error => throw new Error(error.message));
        return;
      }
      return response.json();
    })
    .catch(error => console.log('error', error.message));
