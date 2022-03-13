const loginLogicHandler = require('./loginLogicHandler');
const loginPageHandler = require('./loginPageHandler');
const customizedError = require('../auth/customizedError');

module.exports = {
  loginPageHandler,
  loginLogicHandler,
  customizedError,
};
