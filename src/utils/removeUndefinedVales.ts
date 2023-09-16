/* eslint-disable @typescript-eslint/no-explicit-any */
const removeUndefinedValues = (data: any): any => {
  if (typeof data  === 'object') {
    return Object.entries(data)
      .filter(([_, value]) => value !== undefined && value !== null)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }

  return data;
}

export default removeUndefinedValues;
