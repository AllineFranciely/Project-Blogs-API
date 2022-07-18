const postService = require('../services/postService');

const getPosts = async (_req, res, _next) => {
  const response = await postService.getPosts();
  return res.status(200).json(response);
};

const getPostById = async (req, res) => {
  const response = await postService.getPostById(req.params);

  if (!response) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(response);
};

module.exports = {
  getPosts,
  getPostById,
};