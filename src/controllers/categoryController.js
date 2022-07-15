const categoriesService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const response = await categoriesService.createCategory(req.body);

  return res.status(201).json(response);
};

const getCategories = async (_req, res, _next) => {
  const response = await categoriesService.getCategories();
  return res.status(200).json(response);
};

module.exports = {
  createCategory,
  getCategories,
}; 