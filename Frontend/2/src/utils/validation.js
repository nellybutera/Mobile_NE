export const validateInteger = (value) => {
  if (value === "") {
    return false;
  }
  const number = parseInt(value);
  return Number.isInteger(number);
};

export const validateAlphanumeric = (value) => {
  if (value === "") {
    return false;
  }
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  return alphanumericRegex.test(value);
};
