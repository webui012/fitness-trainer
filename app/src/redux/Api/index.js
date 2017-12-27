import { formData } from '../../pages/AboutUs/data';


class Api {

  fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        formData[`${data.userId}`] = data;
        resolve(formData);
      }, 2000);
    });
  }

  dataArray() {
   let data = fetch('https://jsonplaceholder.typicode.com/users/')
          .then(data => data.json())
    return data
  }

  dataLocal() {
    return fetch('../../pages/AboutUs/data1.json')
      .then(data => data.json())
      .then(data => JSON.parse(data))
  }
}

export default new Api();
