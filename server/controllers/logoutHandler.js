module.exports = (req, res, next) => {
  if (!req.user_id) {
    next(
      customizedError({
        errorMessage: 'Authorization failed',
        status: 401,
      })
    );
  } else {
    res.clearCookie('Access_Token').status(200).redirect('/login');
  }
};
