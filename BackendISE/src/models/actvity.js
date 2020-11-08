'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actvity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actvity.hasMany(models.Test);
    }
  };
  Actvity.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    target: DataTypes.FLOAT,
    rubric: DataTypes.STRING,
    instructions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actvity',
  });
  return Actvity;
};