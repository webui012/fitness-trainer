import { dataAboutUs } from '../../pages/AboutUs/dataAboutUs';
import { dataContacts } from '../../pages/Contacts/contactsData';

class Api {

  static fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dataAboutUs.formData[`${data.userId}`] = data;
        resolve(dataAboutUs.formData);
      }, 2000);
    });
  }

  static dataLocal() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataAboutUs);
      }, 1000);
    });
  }

  static dataLocalContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataContacts);
      }, 1000);
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
