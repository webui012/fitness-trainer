import {dataAll} from '../../pages/AboutUs/data1';

class Api {

  fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dataAll.formData[`${data.userId}`] = data;
        reject(dataAll.formData);
      }, 2000);
    });
  }

  dataLocal() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataAll);
      }, 2000);
    });
  }
}

export default new Api();
