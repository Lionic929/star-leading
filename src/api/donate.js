export const convertResponseDonateData = (data) => {
  const convertedData = { ...data };
  Object.keys(convertedData).forEach((key) => {
    convertedData[key].tid = key.toUpperCase();
  });

  return convertedData;
};
