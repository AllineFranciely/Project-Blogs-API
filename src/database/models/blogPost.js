const blogPostsSchema = (sequelize, DataTypes) => {
  const TableBlogPosts = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  });

  // TableBlogPosts.associate = (models) => {
  //   TableBlogPosts.belongsTo(models.User, {
  //     foreignKey: 'userId', as: 'user',
  //   });
  // }
  return TableBlogPosts;
}
module.exports = blogPostsSchema;