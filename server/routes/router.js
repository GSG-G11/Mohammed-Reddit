const router = require('express').Router();
const { verifyAuthentication } = require('../auth');
const {
  loginPageHandler,
  loginLogicHandler,
  pageNotFoundError,
  serverError,
  registerPageHandler,
  registerLogicHandler
} = require('../controllers');

router.route('/login').get(loginPageHandler).post(loginLogicHandler);
router.route('/register').get(registerPageHandler).post(registerLogicHandler);

router.use(pageNotFoundError);
router.use(serverError);

module.exports = router;
