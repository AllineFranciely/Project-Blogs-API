const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const createUser = async ({ displayName, email, password, image }) => {
  const findOne = await User.findOne({ where: { email } });

  if (findOne) {
    return { statusCode: 409, result: { message: 'User already registered' } };
  }

  const payload = { displayName, email };

  const config = { expiresIn: '7d', algorithm: 'HS256' };

  await User.create({ displayName, email, password, image });

  const token = jwt.sign(payload, JWT_SECRET, config);

  return { statusCode: 201, result: { token } };
};

module.exports = {
  createUser,
};