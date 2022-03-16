const { customizedError } = require('../auth');
const {
  addPost,
  upRating,
  downRating,
  getAllPosts,
  deletePost,
} = require('../database/queries');

const addPostHandler = (req, res, next) => {
  const user_id = req.user_id;
  const time = new Date();
  let date = `${time.getHours()}:${time.getMinutes()} ${time.getFullYear()}-${
    time.getMonth() + 1
  }-${time.getDate()}`;
  const { title, content } = req.body;
  addPost(user_id, title, content, date)
    .then((data) => {
      res.status(200).json({ message: 'success', data: data.rows[0] });
    })
    .catch(next);
};

const upRatingPost = (req, res, next) => {
  const postId = req.params.post_id;
  if (!req.params.post_id) {
    next(
      customizedError({ errorMessage: 'Failed to add rating', status: 400 })
    );
  } else {
    upRating(postId)
      .then((data) => {
        res.status(200).json({ message: 'success', data: data.rows[0] });
      })
      .catch(next);
  }
};

const downRatingPost = (req, res, next) => {
  const postId = req.params.post_id;
  if (!req.params.post_id) {
    next(
      customizedError({ errorMessage: 'Failed to add rating', status: 400 })
    );
  } else {
    downRating(postId)
      .then((data) => {
        res.status(200).json({ message: 'success', data: data.rows[0] });
      })
      .catch(next);
  }
};

const allPostsHandler = (req, res, next) => {
  getAllPosts()
    .then((data) => {
      if (!data.rowCount) {
        next(
          customizedError({
            errorMessage: 'No posts yet, add new post to see it.',
            status: 204,
          })
        );
      } else {
        res.status(200).json({ message: 'success', data: data.rows });
      }
    })
    .catch(next);
};

const deletePostHandler = (req, res, next) => {
  const user_id = req.user_id;
  const { post_id } = req.params;
  deletePost(user_id, post_id)
    .then((data) => {
      if (!data.rowCount) {
        next(
          customizedError({
            errorMessage: "Can't delete this post",
            status: 400,
          })
        );
      } else {
        res.status(200).json({ message: 'success', data: data.rows });
      }
    })
    .catch(next);
};
module.exports = {
  addPostHandler,
  upRatingPost,
  downRatingPost,
  allPostsHandler,
  deletePostHandler,
};
