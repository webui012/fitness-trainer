import { formData } from '../../pages/AboutUs/data';
class Api {

  fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        formData[`${data.userId}`] = data;
        resolve(formData);
        console.log(formData);
      }, 2000);
    });
  }
}

export default new Api();
