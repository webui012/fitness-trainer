import {ServiceOrderData} from '../../pages/ServiceOrder/serivceOrderData';

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ServiceOrderData);
    }, 1000);
  });
}