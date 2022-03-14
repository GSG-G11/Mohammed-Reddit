const connection = require('../config/connection');

module.exports = (email) => connection.query('SELECT exists (SELECT 1 FROM users WHERE email = $1 LIMIT 1);', [email]);