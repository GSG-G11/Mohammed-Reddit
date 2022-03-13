const router = require('express').Router();
const { verifyAuthentication } = require('../auth');
const { loginPageHandler, loginLogicHandler } = require('../controllers');

router.route('/login').get(loginPageHandler).post(loginLogicHandler)

module.exports = router;
