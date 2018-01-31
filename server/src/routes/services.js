import servicesPage from '../models/servicesPage';

const getServicesPage = (req, res) => {
  const id = '5a6e5c15e939a2281cdcdcea';
  servicesPage.findById(id, (err, servicePage) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.json(servicePage);
  });
};

export default getServicesPage;