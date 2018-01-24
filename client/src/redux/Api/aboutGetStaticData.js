import constants from './constants';
const { about, localhost8080 } = constants;

export default () =>
  fetch(`${localhost8080}${about}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        throw new Error('Bad request');
      }

      return response.json();
    })
    .catch(error => console.log('error', error.message));
