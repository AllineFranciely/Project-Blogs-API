const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { statusCode, result } = await userService.createUser(req.body);

  return res.status(statusCode).json(result);
};

const getUsers = async (req, res) => {
  const { statusCode, result } = await userService.getUsers();

  return res.status(statusCode).json(result);
};

module.exports = {
  createUser,
  getUsers,
};