const { compare } = require('bcryptjs');
const { signAuthentication, customizedError } = require('../auth');
const { getUserByEmail } = require('../database/queries');
const { loginSchema } = require('../utils');

const loginLogicHandler = (req, res, next) => {
  const { email, password } = req.body;
  let id;
  let username;
  loginSchema
    .validateAsync(req.body)
    .then(() => getUserByEmail(email))
    .then((data) => {
      if (!data.rows.length) {
        throw customizedError({
          errorMessage: "Email doesn't exists, Try another one or sign up",
          status: 406,
        });
      } else {
        id = data.rows[0].id;
        req.user_id = id;
        username = data.rows[0].username;
        return compare(password, data.rows[0].password);
      }
    })
    .then((isValid) => {
      if (isValid) {
        return signAuthentication({ id });
      }
      throw customizedError({ errorMessage: 'Authorization failed', status: 401 });
    })
    .then((token) => {
      if (token) {
        res
          .cookie('Access_Token', token, {
            httpOnly: true,
            maxAge: 900000000,
          })
          .send({ username, message: 'Successfully Logged In' });
          next();
      }
    })
    .catch((err) => {
      if (!err.details) {
        next(err);
      } else {
        next(customizedError({errorMessage: err.details[0].message, status: 400 }));
      }
    });
};

module.exports = loginLogicHandler;
