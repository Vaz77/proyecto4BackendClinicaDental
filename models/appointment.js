const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Appointment.belongsTo(models.Service, {
        foreignKey: 'service_id'
      });
    }
  }

  Appointment.init({
    time: DataTypes.STRING,
    status: DataTypes.STRING,
    observations: DataTypes.STRING,
    date: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
  });

  Appointment.modelName = 'Appointment';

  return Appointment;
};
