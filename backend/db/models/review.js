'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId',
      onDelete: 'CASCADE' });
      Review.belongsTo(models.Tee, { foreignKey: 'teeId',
      onDelete: 'CASCADE' });
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    teeId: DataTypes.INTEGER,
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 500]
      },
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
