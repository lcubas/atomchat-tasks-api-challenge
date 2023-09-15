/* eslint-disable security/detect-object-injection */
import path from 'path';
import dotenv from 'dotenv';
import getEnvValue from './utils/getEnvValue';

const envFileMap: Record<string, string> = {
  'development': '.env',
  'production': '.env.prod',
};

const getEnvFilePath = (): string => {
  const env = getEnvValue('NODE_ENV', 'development');

  if (env in Object.keys(envFileMap)) {
    return envFileMap[env];
  }

  return envFileMap.development;
};

dotenv.config({ path: path.resolve(__dirname, getEnvFilePath()) });

export default {
  PORT: Number(getEnvValue('PORT', '3000')),
};
