/*import SalesData from '../../pages/Sales/SalesData';*/

class Api {

  /*static dataSales() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(SalesData);
      }, 500);
    });
  }*/

  static dataSales() {
    return fetch('/sales')
        .then(function (response) {
            return response.json;
        })
        .then(function (data) {
            console.log(data);
        })

  }


}

export default Api;
