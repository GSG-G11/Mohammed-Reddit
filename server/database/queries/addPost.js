const connection = require('../config/connection');

module.exports = (user_id, title, content, date) =>
  connection.query(
    'INSERT INTO posts (user_id, title, content, date) VALUES ($1, $2, $3, $4) RETURNING *;',
    [user_id, title, content, date]
  );
