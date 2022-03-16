const connection = require('../config/connection');

module.exports = (user_id, post_id) =>
  connection.query(
    'DELETE FROM posts WHERE user_id = (SELECT id FROM users WHERE id = $1) and id = $2 RETURNING *;',
    [user_id, post_id]
  );
