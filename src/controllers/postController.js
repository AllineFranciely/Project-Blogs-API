const postService = require('../services/postService');

const getPosts = async (_req, res, _next) => {
  const response = await postService.getPosts();
  return res.status(200).json(response);
};

module.exports = {
  getPosts,
};