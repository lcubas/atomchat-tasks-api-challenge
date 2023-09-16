import express, { type Application } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { onRequest } from 'firebase-functions/v2/https';

import routes from './routes';
import NotFoundException from './exceptions/NotFoundException';
import { errorHandler } from 'middlewares/error-handler.middleware';

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

app.use(errorHandler);

export const api = onRequest(app);
