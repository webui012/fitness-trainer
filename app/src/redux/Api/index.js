import SalesData from '../../pages/Sales/SalesData';

class Api {

    static dataSales() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(SalesData);
            }, 1000);
        });
    }

}

export default Api;