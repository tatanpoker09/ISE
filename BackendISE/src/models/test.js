'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Test.belongsTo(models.Actvity);
      Test.hasMany(models.QuestionItem);
    }
  };
  Test.init({
    duration: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};