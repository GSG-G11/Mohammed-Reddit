const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string()
    .email()
    .min(8)
    .max(50)
    .required(),
  password: joi.string()
    .pattern(/^[a-zA-Z0-9]{4,100}$/)
    .required(),
});

module.exports = loginSchema;
