const createUserService = require('../services/createUserService');

const createUser = async (req, res) => {
  const { statusCode, result } = await createUserService.createUser(req.body);

  return res.status(statusCode).json(result);
};

module.exports = {
  createUser,
};