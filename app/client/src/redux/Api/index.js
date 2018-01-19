import { dataAboutUs } from '../../pages/AboutUs/dataAboutUs';
import { dataContacts } from '../../pages/Contacts/contactsData';
import constants from './constants';

class Api {

  static fetchUserData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dataAboutUs.formData[`${data.userId}`] = data;
        reject(dataAboutUs.formData);
      }, 500);
    });
  }

  static dataLocal() {
    const { localhost3000, userCabinet } = constants;
    return fetch(`${localhost3000}${userCabinet}`)
      .then(response => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          throw new Error('Bad request');
        }

        return response.json();
      })
      .catch(error => console.log('error', error.message));
  }

  static dataLocalContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataContacts);
      }, 500);
    });
  }
}

export default Api;
