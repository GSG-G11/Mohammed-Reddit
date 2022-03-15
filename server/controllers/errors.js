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
  const status = err.status || 500;
  if (status === 401)
    res
      .status(status)
      .json({ status: 403, message: 'You dont have permission' });
  else if (status !== 401)
    res.status(status).json({ status: status, message: err.message });
  else res.sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};
module.exports = {
  pageNotFoundError,
  serverError,
};
