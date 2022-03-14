const checkAuthentication = require('./checkAuthentication');
const customizedError = require('./customizedError');
const signAuthentication = require('./signAuthentication');
const verifyAuthentication = require('./verifyAuthentication');

module.exports = {
  signAuthentication,
  verifyAuthentication,
  customizedError,
  checkAuthentication,
};
