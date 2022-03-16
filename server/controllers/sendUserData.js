const { getUserById } = require('../database/queries');

module.exports = (req, res, next) => {
  if (!req.user_id) {
    next(
      customizedError({
        errorMessage: 'Authorization failed',
        status: 401,
      })
    );
  }
  getUserById(req.user_id)
    .then((data) => {
      res.json({
        status: 200,
        message: 'success',
        user_data: {
          username: data.rows[0].username,
          email: data.rows[0].email,
          id: req.user_id,
        },
      });
    })
    .catch(next);
};
