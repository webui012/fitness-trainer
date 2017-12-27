import { formData } from '../../pages/AboutUs/data';

class Api {

  fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        formData[`${data.userId}`] = data;
        reject(formData);
      }, 2000);
    });
  }

  dataArray() {
    return fetch('https://jsonplaceholder.typicode.com/users')
          .then(data => data.json())
  }

  dataLocal() {
    return fetch('../../pages/AboutUs/data')
      .then(data => data.json())
  }
}

export default new Api();
