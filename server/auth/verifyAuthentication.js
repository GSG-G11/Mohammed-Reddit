const { verify } = require('jsonwebtoken');
const customizedError = require('./customizedError');

const verifyAuthentication = (token) => new Promise((resolve, reject) => {
  verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      reject(customizedError({ errorMessage: 'User not authenticated', status: 401 }));
    } else {
      resolve(decoded);
    }
  });
});

module.exports = verifyAuthentication;
