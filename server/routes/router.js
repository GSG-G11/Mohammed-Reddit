const router = require('express').Router();
const { verifyAuthentication, checkAuthentication } = require('../auth');
const {
  loginPageHandler,
  loginLogicHandler,
  registerPageHandler,
  registerLogicHandler,
  homePageHandler,
  pageNotFoundError,
  serverError,
  sendUserData,
  addPostHandler,
  upRatingPost,
  downRatingPost,
  allPostsHandler,
  deletePostHandler,
  logoutHandler,
} = require('../controllers');

router.route('/login').get(loginPageHandler).post(loginLogicHandler);
router.route('/register').get(registerPageHandler).post(registerLogicHandler);

router
  .route('/home')
  .get(checkAuthentication, homePageHandler)
  .post(checkAuthentication, sendUserData);
router.get('/post', allPostsHandler);
router.use(checkAuthentication);
router.post('/post', addPostHandler);
router.post('/post/up/:post_id?', upRatingPost);
router.post('/post/down/:post_id?', downRatingPost);
router.delete('/post/:post_id?', deletePostHandler);
router.post('/logout', logoutHandler);

router.use(pageNotFoundError);
router.use(serverError);

module.exports = router;
