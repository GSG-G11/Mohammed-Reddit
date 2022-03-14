const loginPageHandler = require('./loginPageHandler');
const registerPageHandler = require('./registerPageHandler');
const loginLogicHandler = require('./loginLogicHandler');
const { pageNotFoundError, serverError } = require('./errors');
const registerLogicHandler = require('./registerLogicHandler');
const homePageHandler = require('./homePageHandler');
module.exports = {
  loginPageHandler,
  loginLogicHandler,
  pageNotFoundError,
  serverError,
  registerPageHandler,
  registerLogicHandler,
  homePageHandler,
};
