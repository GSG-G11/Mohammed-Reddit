const { join } = require('path');

const pageNotFoundError = (req, res, next) => {
  res
    .status(400)
    .sendFile(
      join(__dirname, '..', '..', 'public', 'html', '404.html'),
      (err) => {
        if (err) next(err);
      }   
    );
};
const serverError = (err, req, res, next) => {
  res.status(err.status || 500);
  if (err.message) res.json({ status: err.status, message: err.message });
  else res.sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};
module.exports = {
  pageNotFoundError,
  serverError,
};
