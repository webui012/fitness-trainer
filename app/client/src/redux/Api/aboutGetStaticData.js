import constants from './constants';
const { about, localhost3000 } = constants;

export default () =>
  fetch(`${localhost3000}${about}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        throw new Error('Bad request');
      }

      return response.json();
    })
    .catch(error => console.log('error', error.message));
