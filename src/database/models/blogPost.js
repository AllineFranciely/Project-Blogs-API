const blogPostsSchema = (sequelize, DataTypes) => {
  const TableBlogPosts = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });

  // TableBlogPosts.associate = (models) => {
  //   TableBlogPosts.belongsTo(models.User, {
  //     foreignKey: 'userId', as: 'user',
  //   });
  // }
  return TableBlogPosts;
}
module.exports = blogPostsSchema;