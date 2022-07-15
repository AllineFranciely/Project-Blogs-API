const postCategories = (sequelize, DataTypes) => {
  const tablePostCategories = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
  { timestamps: false,}
  );

  tablePostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: tablePostCategories,
      foreighnKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: tablePostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'posts',
    });
  };

  return tablePostCategories;
};

module.exports = postCategories
