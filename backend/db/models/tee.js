'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tee.belongsTo(models.User, { foreignKey: 'userId' });
      Tee.hasMany(models.Fave, { foreignKey: 'teeId' });
    }
  }
  Tee.init({
    name: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    userId: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    brand: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tee',
    defaultScope: {
      exclude: [
        'createdAt',
        'updatedAt',
      ],
    },
  });
  return Tee;
};
