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
  ENV: String(getEnvValue('NODE_ENV', 'development')),
  FIREBASE_SERVICE_ACCOUNT_KEY_FILE: String(getEnvValue('APP_TASK_FIREBASE_SERVICE_ACCOUNT_KEY_FILE')),
};
