const { sign } = require('jsonwebtoken');
const { customizedError } = require('../controllers');

const signAuthentication = (payload) => new Promise((resolve, reject) => {
  sign(payload, process.env.SECRET, (err, encoded) => {
    if (err) {
      reject(customizedError({ errorMessage: 'Cannot set token', status: 500 }));
    } else {
      resolve(encoded);
    }
  });
});

module.exports = signAuthentication;
