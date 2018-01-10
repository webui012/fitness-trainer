import aboutData from '../../../pages/About/aboutData';

export default () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(aboutData);
    }, 1000);
  });
