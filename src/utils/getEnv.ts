const getEnv = (envKey: string, defaultValue?: string): string => {
  if (process.env[envKey]) {
    return String(process.env[envKey]);
  }

  if (defaultValue) {
    return String(defaultValue);
  }

  throw new Error(`Please define the Enviroment variable: [${envKey}]`);
};

export default getEnv;
