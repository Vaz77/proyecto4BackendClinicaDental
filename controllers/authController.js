const { User } = require('../models');
const bcrypt = require('bcrypt');
const MIN_PASSWORD_LENGTH = 6;
const authController = {};
const jwt = require('jsonwebtoken');
const authenticatedTokens = []; // Lista para almacenar los tokens autenticados




// Funcion para registrar un nuevo usuario
authController.register = async (req, res) => {
try {
    if (req.body.password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400).json({
        error: 'Password must be longer than 6 characters',
    });
    }
    // Generar un hash de la contraseña
    const newPassword = bcrypt.hashSync(req.body.password, 6);

    const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: newPassword,
    role_id: 1,
    });

    return res.status(201).json({
    message: 'User created successfully',
    user: newUser,
    });
} catch (error) {
    // Capturar y devolver cualquier error ocurrido durante la creacion del usuario
    return res.status(500).json({
    message: 'Something went wrong creating users',
    error: error.message,
    });
}
};

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
    // Buscar al usuario en la base de datos por su direccion de correo electronico
        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );
    // Verificar si el usuario no existe
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

    // Validar la contraseña
        const isMatch = bcrypt.compareSync(password, user.password);      
    // Verificar si la contraseña no coincide
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
    // Generar un token de autenticacion utilizando JWT
        const token = jwt.sign(
            { 
                userId: user.id,
                roleId: user.role_id,
                email: user.email
            },
            'secreto',
            {
                expiresIn: '2h' 
            }
        );  
    // Devolver una respuesta con el usuario autenticado y el token
        return res.json(
            {
                success: true,
                message: "User Logged",
                token: token
            }
        );
    // Capturar y devolver cualquier error ocurrido durante el inicio de sesion
    } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "user cant be logged",
                error: error.message
            });
        }
        
    }

    authController.logout = async (req, res) => {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split(" ")[1];
    
            // Eliminar el token de la lista de tokens autenticados
            const index = authenticatedTokens.indexOf(token);
            if (index !== -1) {
                authenticatedTokens.splice(index, 1);
            }
    
            res.status(200).json({
                message: "Logout successful"
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Logout failed"
            });
        }
    };


module.exports = authController;








