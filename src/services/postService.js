const { BlogPost, User, Category } = require('../database/models');

const getPosts = async () => {
  // console.log('cheguei');
  const posts = await BlogPost.findAll(
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );
console.log(posts, 'oi');
  return posts;
};

module.exports = {
  getPosts,
};