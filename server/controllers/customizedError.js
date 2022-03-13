const customizedError = ({ errorMessage, status }) => {
  const err = new Error(errorMessage);
  err.status = status;
  throw err;
};

module.exports = customizedError;
