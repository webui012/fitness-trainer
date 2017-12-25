import { formData } from '../../pages/AboutUs/data';
class Api {

  fetchUserData(data) {
     //return fetch('http://asdas.asdasd').then((res) => res.json())
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        formData[`${data.userId}`] = data;
        resolve(formData);
<<<<<<< HEAD
          console.log(formData);
=======
>>>>>>> 6baacf934cf5e81ec22d5d5671671aca37de5f0d
      }, 2000);
    });
  }
}

export default new Api();
