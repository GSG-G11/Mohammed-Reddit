const connection = require('../config/connection');

module.exports = (post_id) =>
  connection.query('DELETE FROM posts WHERE id = $1 RETURNING *;', [post_id]);
