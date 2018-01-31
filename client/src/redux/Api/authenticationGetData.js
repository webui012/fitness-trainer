export default (host, path) =>
  fetch(`${host}${path}`, {
    method: 'get',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  })
    .then(response => {

      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        response.json().then(error => throw new Error(error.message));
        return;
      }
      //return response.json();
    })
    .catch(error => console.log('error', error.message));
