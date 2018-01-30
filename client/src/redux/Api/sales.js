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
        return fetch('http://localhost:8080/api/sales')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return data;
            })

    }

}

export default Api;
