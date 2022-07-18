module.exports = (sequelize, DataTypes) => {
  const TableBlogPost = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true },
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW},
  },
  {
    timestamps: false,
    tableName: 'BlogPosts'
  });

  TableBlogPost.associate = (models) => {
    TableBlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return TableBlogPost;
}; 