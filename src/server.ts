/* eslint-disable no-console */
import app from './app';
import config from './config';

const { PORT } = config;

app.listen(PORT, (): void => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
