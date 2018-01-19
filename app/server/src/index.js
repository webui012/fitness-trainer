import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:6289');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/', routes);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server successfully started on http://localhost:3000/'));
