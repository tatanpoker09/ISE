'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SchoolAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SchoolAdmin.belongsTo(models.School);
    }
  };
  SchoolAdmin.init({
    school: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SchoolAdmin',
  });
  return SchoolAdmin;
};