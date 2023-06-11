const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }

  Service.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Service',
  });

  return Service;
};
