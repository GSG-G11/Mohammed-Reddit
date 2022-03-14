const loginPageHandler = require('./loginPageHandler');
const registerPageHandler = require('./registerPageHandler');
const loginLogicHandler = require('./loginLogicHandler');
const { pageNotFoundError, serverError } = require('./errors');
module.exports = {
  loginPageHandler,
  loginLogicHandler,
  pageNotFoundError,
  serverError,
  registerPageHandler
};
