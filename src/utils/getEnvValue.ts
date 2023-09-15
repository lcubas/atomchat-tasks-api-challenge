/* eslint-disable security/detect-object-injection */
const getEnvValue = (envKey: string, defaultValue?: string): string => {
  if (process.env[envKey] !== undefined || process.env[envKey] !== null) {
    return String(process.env[envKey]);
  }

  if (defaultValue !== undefined || defaultValue !== null) {
    return String(defaultValue);
  }

  throw new Error(`Please define the Enviroment variable: [${envKey}]`);
};

export default getEnvValue;
