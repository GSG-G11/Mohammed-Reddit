const { customizedError, signAuthentication } = require('../auth');
const { addUser, checkEmail } = require('../database/queries');
const { signupSchema, hashingPassword } = require('../utils');

const registerLogicHandler = (req, res, next) => {
  let { username, email, password } = req.body;
  let id;
  signupSchema
    .validateAsync(req.body)
    .then(() => checkEmail(email))
    .then((data) => {
      const { exists } = data.rows[0];
      if (exists) {
        throw customizedError({
          errorMessage: 'This email already exists, try again',
          status: 400,
        });
      } else return hashingPassword(password);
    })
    .then((hashedPassword) => {
      return addUser(username, email, hashedPassword);
    })
    .then((data) => {
      if (!data.rows.length) {
        throw customizedError({
          errorMessage: 'This email already exists, try again',
          status: 400,
        });
      } else {
        id = data.rows[0].id;
        req.user_id = id;
        username = data.rows[0].username;
        return signAuthentication({ id });
      }
    })
    .then((token) => {
      if (token) {
        res
          .cookie('Access_Token', token, {
            httpOnly: true,
            maxAge: 900000000,
          })
          .send({ username, message: 'Successfully Registered' });
        next();
      }
    })
    .catch((err) => {
      if (
        err.message ===
        'duplicate key value violates unique constraint "users_email_key"'
      ) {
        next(
          customizedError({
            errorMessage: 'This email already exists, try again',
            status: 400,
          })
        );
      } else if (err.details) {
        next(
          customizedError({ errorMessage: err.details[0].message, status: 400 })
        );
      } else {
        next(err);
      }
    });
};

module.exports = registerLogicHandler;
