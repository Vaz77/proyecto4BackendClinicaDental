const { Model, DataTypes } = require('sequelize');
const { User, Services } = require('./models');

module.exports = (sequelize) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: 'userId',
        // onDelete: 'CASCADE'
      });

      Appointment.belongsTo(models.Service, {
        foreignKey: 'serviceId',
        // onDelete: 'CASCADE'
      });
    }
  }

  Appointment.init({
    time: DataTypes.STRING,
    status: DataTypes.STRING,
    observations: DataTypes.STRING,
    date: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });

  return Appointment;
};
