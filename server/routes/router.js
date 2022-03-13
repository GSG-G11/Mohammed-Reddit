const router = require('express').Router();
const { verifyAuthentication } = require('../auth');
const { loginPageHandler, loginLogicHandler, pageNotFoundError, serverError} = require('../controllers');

router.route('/login').get(loginPageHandler).post(loginLogicHandler)


router.use(pageNotFoundError);
router.use(serverError)

module.exports = router;
