const Joi = require('joi');

const createCategory = Joi.object({
  name: Joi.string().empty().required(),
});

const validateCreateCategory = (req, res, next) => {
  const { error } = createCategory.validate(req.body);

  if (!error) {
    return next();
  }
console.log(error);
  const [message] = error.details.map((e) => e.message);

  return res.status(400).json({ message });
};

module.exports = validateCreateCategory; 