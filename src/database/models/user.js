const UserSchema = (sequelize, DataTypes) => {
  const TableUser = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });

  TableUser.associate = (models) => {
    TableUser.hasMany(models.BlogPost, { foreignKey: "userId", as: "posts" });
  }

  return TableUser;
}

module.exports = UserSchema;