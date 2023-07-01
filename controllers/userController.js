const { User } = require('../models');

const userController = {};

// Obtener el perfil del usuario
userController.getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
/*
    //Verificar si el usuario tiene un token válido
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, 'secreto', (err) => {
      if (err) {
        return res.status(401).json({
          succes: false,
          message: 'Invalid Token'
        });
      }
    })
*/
    return res.json({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      role_id: user.role_id
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch user profile',
      error: error.message
    });
  }
};

// Actualizar el perfil del usuario
userController.updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name, surname, email, phone } = req.body;

    // Verificar si el usuario existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Actualizar los datos del usuario
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.phone = phone;

    // Guardar los cambios en la base de datos
    await user.save();

    return res.json({
      message: 'User profile updated successfully',
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      role_id: user.role_id
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to update user profile',
      error: error.message
    });
  }
};

// Obtener todos los clientes registrados
userController.getAllClients = async (req, res) => {
  try {
    const clients = await User.findAll({ where: { role_id: 3 } });

    return res.json({
      success: true,
      message: 'Clients retrieved',
      data: clients,
    });
  } catch (error) {
    console.error('Error retrieving clients', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve clients',
      error: error.message,
    });
  }
};

module.exports = userController;

