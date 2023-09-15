import express, { type Application } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { onRequest } from 'firebase-functions/v2/https';

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

app.use(routes);

app.all('*', () => {
  throw new NotFoundException();
});

app.use(handleError);

export const api = onRequest(app);
