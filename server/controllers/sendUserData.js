const { getUserById } = require('../database/queries');

module.exports = (req, res) => {
  getUserById(req.id).then((data) => {
    res.json({
      status: 200,
      message: 'success',
      user_data: {
        username: data.rows[0].username,
        email: data.rows[0].email,
        id: req.id,
      },
    });
  });
};
