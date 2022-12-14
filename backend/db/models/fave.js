'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fave.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Fave.belongsTo(models.Tee, { foreignKey: 'teeId', onDelete: 'CASCADE' });

    }
  }
  Fave.init({
    userId: DataTypes.INTEGER,
    teeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fave',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
  });
  return Fave;
};
