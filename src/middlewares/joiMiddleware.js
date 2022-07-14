const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().required().empty(),
  password: Joi.number().required().empty(),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
  'number.empty': 'Some required fields are missing',
});

const validLogin = (req, res, next) => {
  const { error } = login.validate(req.body);

  if (!error) {
    return next();
  }
  console.log('joi', error);
  const [message] = error.details.map((e) => e.message);

  return res.status(400).json({ message });
};

module.exports = validLogin;