const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const login = async ({ email, password }) => {
  const findedUser = await User.findOne({ where: { email, password } });

  const config = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };

  if (!findedUser) {
    return { statusCode: 400, result: { message: 'Invalid fields' } };
  }

  const infos = {
    email,
    id: findedUser.id,
  };

  const token = jwt.sign(infos, JWT_SECRET, config);

  return { statusCode: 200, result: { token } };
};

module.exports = {
  login,
};