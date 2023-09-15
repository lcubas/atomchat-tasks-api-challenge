import path from 'path';
import dotenv from 'dotenv';
import getEnv from './utils/getEnv';

enum EnviromentFile {
  development = '.env',
  production = '.env.prod',
}

const envPath = EnviromentFile[process.env.NODE_ENV || 'development'];

dotenv.config({ path: path.resolve(__dirname, envPath) });

export default {
  PORT: Number(getEnv('PORT', '3000')),
};
