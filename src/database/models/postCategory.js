module.exports = (sequelize, DataTypes) => {
  const TablePostCategory = sequelize.define('PostCategory', { 
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true }, 
  }, { timestamps: false, tableName: 'PostCategories' });

  TablePostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: TablePostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories'
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: TablePostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    });
  };

  return TablePostCategory;
}; 