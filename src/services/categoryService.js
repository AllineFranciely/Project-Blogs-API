const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });

  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
}

module.exports = {
  createCategory,
  getCategories,
}; 