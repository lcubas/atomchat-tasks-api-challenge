import express, { Application } from 'express';
import helmet from 'helmet';
import compression from 'compression';

import routes from './routes';
import handleError from './middlewares/handle-error.middleware';
import NotFoundException from './exceptions/NotFoundException';

const app: Application = express();

app.use(
  helmet(),
  compression(),
  express.json(),
  express.urlencoded({ extended: true }),
);

app.use('/api', routes);

app.all('*', () => {
  throw new NotFoundException();
});

app.use(handleError);

export default app;
