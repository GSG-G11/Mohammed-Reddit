const { verify } = require('jsonwebtoken');
const customizedError = require('./customizedError');

const verifyAuthentication = (req, res, next) => new Promise((resolve, reject) => {
  const token = req.cookies.Access_Token;
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      reject(customizedError({ errorMessage: 'User not authenticated', status: 401 }));
    } else {
      resolve(decoded);
    }
  });
});

module.exports = verifyAuthentication;
