const loginLogicHandler = require('./loginLogicHandler');
const loginPageHandler = require('./loginPageHandler');
const customizedError = require('../auth/customizedError');
const { pageNotFoundError, serverError } = require('./errors');
module.exports = {
  loginPageHandler,
  loginLogicHandler,
  customizedError,
  pageNotFoundError,
  serverError,
};
