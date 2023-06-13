const { User } = require('../models');

const userController = {}

//Obtener el perfil del usuario
userController.getProfile = async (req, res) => {
    try{
        const userId = req.userId;
        const user = await User.findByPk(userId);
        if (!user){
            return res.status(404).json({
                message:'User not found'
            });
        }
        return res.json({
            name: user.name,
            surname: user.surname,
            email: user.email,
            phone: user.phone,
            role_id: user.role_id

        });
    }catch (error) {
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

        // Actualizar los campos del usuario
        user.name = name;
        user.surname = surname;
        user.email = email;
        user.phone = phone;

        // Guardar los cambios en la base de datos
        await user.save();

        return res.json({
            message: 'User profile updated successfully',
            user: {
                name: user.name,
                surname: user.surname,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Failed to update user profile',
            error: error.message
        });
    }
};


module.exports = userController;
