const connection = require('../config/connection');

module.exports = () =>
  connection.query(
    'SELECT users.username, posts.content, posts.date, posts.id, posts.title, posts.user_id, posts.vote FROM posts INNER JOIN users ON (posts.user_id = users.id) ORDER BY posts.date;'
  );
