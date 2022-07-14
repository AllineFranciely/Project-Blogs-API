const Joi = require('joi');

const createUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
});

const validaCreateUser = (req, res, next) => {
  const { error } = createUser.validate(req.body);

  if (!error) {
    return next();
  }

  const [message] = error.details.map((e) => e.message);

  return res.status(400).json({ message });
};

module.exports = validaCreateUser;