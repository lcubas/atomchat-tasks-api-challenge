/* eslint-disable security/detect-object-injection */
const getEnv = (envKey: string, defaultValue?: string): string => {
  if (process.env[envKey]) {
    return String(process.env[envKey]);
  }

  if (defaultValue) {
    return defaultValue;
  }

  throw new Error(`Please define the Enviroment variable: [${envKey}]`);
};

export default getEnv;
