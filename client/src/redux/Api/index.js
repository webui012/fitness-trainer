import { dataAboutUs } from '../../pages/AboutUs/dataAboutUs';
import { dataContacts } from '../../pages/Contacts/contactsData';

class Api {

  static fetchUserData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dataAboutUs.formData[`${data.userId}`] = data;
        resolve(dataAboutUs.formData);
        console.log(dataAboutUs.formData)
      }, 500);
    });
  }

}

export default Api;
