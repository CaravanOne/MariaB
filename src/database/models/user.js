'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    numberOne: DataTypes.BIGINT,
    numDorso: DataTypes.INTEGER,
    dataTime: DataTypes.STRING,
    dni: DataTypes.BIGINT,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};