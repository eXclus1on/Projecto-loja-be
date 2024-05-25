const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user');

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  productList: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  },
}, {
  timestamps: true,
});

module.exports = Order;
