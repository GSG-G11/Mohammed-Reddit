const { join } = require('path');

const pageNotFoundError = (req, res, next) => {
  res
    .status(404)
    .sendFile(
      join(__dirname, '..', '..', 'public', 'html', '404.html'),
      (err) => {
        if (err) next(err);
      }
    );
};
const serverError = (err, req, res, next) => {
  const status = err.status || 500;
  switch (status) {
    case 401:
      res.status(status).redirect('/login');
      break;
    case 500:
      res.sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
      break;
    default:
      res.status(status).json({ status: status, message: err.message });
  }
};
module.exports = {
  pageNotFoundError,
  serverError,
};
