const connection = require('../config/connection');

module.exports = (username, email, password) =>
  connection.query(
    'INSERT INTO USERS (username, email, password) VALUES ($1, $2, $3) RETURNING *;',
    [username, email, password]
  );
