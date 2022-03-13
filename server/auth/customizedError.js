module.exports = ({ errorMessage, status }) => {
  const err = new Error(errorMessage);
  err.status = status;
  return err;
};
