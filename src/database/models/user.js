module.exports = (sequelize, DataTypes) => {
  const TableUsers = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
    {
      timestamps: false,
    });
  TableUsers.associate = (models) => {
    TableUsers.hasMany(models.BlogPost, { foreignKey: "userId", as: "posts" });
  }
  return TableUsers;
};