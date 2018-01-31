export default () => {
  return fetch('http://localhost:8080/services', {
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
}