import { dataAboutUs } from '../../pages/AboutUs/dataAboutUs';
import { dataContacts } from '../../pages/Contacts/contactsData';

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataAboutUs);
      }, 500);
    });
  }

  static dataLocalContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataContacts);
      }, 500);
    });
  }

  static sendForm(data) {
    if (data) {
      const { userId } = data;
      delete data.userId;
      return fetch(`http://localhost:6289/${userId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.status !== 200) {
          console.log(`Oops, problem. Status Code: ${response.status}`);
          throw new Error('There was an error saving data');
        }
        return response.json();
      })
      .catch(error => console.log('error', error.message));
    }
  }
}

export default Api;
