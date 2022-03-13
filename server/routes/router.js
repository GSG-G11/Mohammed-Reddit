const router = require('express').Router();
const { loginPageHandler } = require('../controllers');

router.get('/login', loginPageHandler);

module.exports = router;
