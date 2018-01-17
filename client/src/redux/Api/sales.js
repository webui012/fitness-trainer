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
    fetch('localhost:8080')
        .then(function (response) {
            return response.json;
        })
  }

}

export default Api;
