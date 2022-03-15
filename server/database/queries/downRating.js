const connection = require('../config/connection');

module.exports = (postId) =>
  connection.query(
    'UPDATE posts SET vote = COALESCE(vote, 0) - 1 WHERE id = $1 RETURNING vote;',
    [postId]
  );
