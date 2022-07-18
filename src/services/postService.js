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

const getPostById = async ({ id }) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return post;
};

module.exports = {
  getPosts,
  getPostById,
};