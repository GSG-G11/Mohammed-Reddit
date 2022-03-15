const verifyAuthentication = require('./verifyAuthentication');

verifyAuthentication;
const checkAuthentication = (req, res, next) => {
  const token = req.cookies.Access_Token;
  verifyAuthentication(token)
    .then((data) => {
      req.user_id = data.id; // user_id 
      next();
    })
    .catch(next);
};

module.exports = checkAuthentication;
