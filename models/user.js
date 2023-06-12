const { Model, DataTypes } = require('sequelize');



module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // User.belongsTo(models.Role, {
      //   foreignKey: 'role_id'
      // });

      // User.hasMany(models.Appointment, {
      //   foreignKey: 'user_id'
      // });
    }
  }

  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};



