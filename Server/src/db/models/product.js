'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};