const categoriesService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const response = await categoriesService.createCategory(req.body);

  return res.status(201).json(response);
};

module.exports = {
  createCategory,
}; 