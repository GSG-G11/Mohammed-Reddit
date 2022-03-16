const loginPageHandler = require('./loginPageHandler');
const registerPageHandler = require('./registerPageHandler');
const loginLogicHandler = require('./loginLogicHandler');
const { pageNotFoundError, serverError } = require('./errors');
const registerLogicHandler = require('./registerLogicHandler');
const homePageHandler = require('./homePageHandler');
const sendUserData = require('./sendUserData');
const logoutHandler = require('./logoutHandler');
const {
  addPostHandler,
  upRatingPost,
  downRatingPost,
  allPostsHandler,
  deletePostHandler,
} = require('./postsHandlers');
module.exports = {
  loginPageHandler,
  loginLogicHandler,
  pageNotFoundError,
  serverError,
  registerPageHandler,
  registerLogicHandler,
  homePageHandler,
  sendUserData,
  addPostHandler,
  upRatingPost,
  downRatingPost,
  allPostsHandler,
  deletePostHandler,
  logoutHandler,
};
