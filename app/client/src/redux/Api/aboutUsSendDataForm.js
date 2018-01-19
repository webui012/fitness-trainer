import constants from './constants';
const { localhost3000 } = constants;

export default data =>
  fetch(`${localhost3000}/cabinet/${data.userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data.data }),
  })
  .then(response => {
    if (response.status === 422) {
      response.json().then(data => throw new Error(data.message));
      return;
    }

    if (response.status !== 200) {
      console.log(`Oops, problem. Status Code: ${response.status}`);
      throw new Error('Bad request');
    }

    return response.json();
  })
  .catch(error => console.log('error', error.message));
