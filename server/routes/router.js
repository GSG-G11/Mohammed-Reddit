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
} = require('../controllers');

router.route('/login').get(loginPageHandler).post(loginLogicHandler);
router.route('/register').get(registerPageHandler).post(registerLogicHandler);

router.get('/home', checkAuthentication, homePageHandler);

router.use(pageNotFoundError);
router.use(serverError);

module.exports = router;
