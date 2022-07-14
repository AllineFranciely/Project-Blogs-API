module.exports = (sequelize, DataTypes) => {
  const TableCategories = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Categories',
    }, { timestamps: false } );
  return TableCategories;
};