const userService = require('../services/userService');

const createUser = async (req, res, _next) => {
  const { statusCode, result } = await userService.createUser(req.body);

  return res.status(statusCode).json(result);
};

const getUsers = async (_req, res, _next) => {
  const response = await userService.getUsers();
 if (response) {
  return res.status(200).json(response);
  }
  return res.status(500).json({ message: 'Internal Erros' });
};

const getUserById = async (req, res, _next) => {
  const { statusCode, result } = await userService.getUserById(req.params);

  return res.status(statusCode).json(result);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};