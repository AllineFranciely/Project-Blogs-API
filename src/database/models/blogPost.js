const blogPosts = (sequelize, DataTypes) => {
  const TableBlogPosts = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: {
      type: DataTypes.DATE
    },
    updated: {
      type: DataTypes.DATE
    }
  });

  TableBlogPosts.associate = (models) => {
    TableBlogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  }
  return TableBlogPosts;
}
module.exports = blogPosts;