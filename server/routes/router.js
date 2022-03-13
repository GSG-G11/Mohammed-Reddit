const router = require('express').Router();
const { verifyAuthentication } = require('../auth');
const { loginPageHandler, loginLogicHandler } = require('../controllers');

router.get('/login', loginPageHandler);
router.post('/login', loginLogicHandler);

module.exports = router;
