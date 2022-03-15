const { addPost } = require('../database/queries');

const addPostHandler = (req, res, next) => {
  const { id } = req.query;
  new Date().getHours
  let date = `${new Date().getHours()}:${new Date().getMinutes()} ${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  const { title, content } = req.body;
  addPost(id, title, content, date)
    .then((data) => {
      res.status(200).json({ message: 'success', data: data.rows[0] });
    })
    .catch(next);
};

module.exports = {
  addPostHandler,
};
