'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.appointment.hasMany(models.user, {
        foreignKey: 'userId',
        //onDelete: 'CASCADE'
      })
    }
    static associate(models) {
      models.services.hasMany(models.appointment, {
        foreignKey: 'serviceId',
        //onDelete: 'CASCADE'
      })
    }
  }
  Appointment.init({
    time: DataTypes.STRING,
    status: DataTypes.STRING,
    observations: DataTypes.STRING,
    date: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    services_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};