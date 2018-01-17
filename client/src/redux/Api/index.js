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
}

export default Api;
