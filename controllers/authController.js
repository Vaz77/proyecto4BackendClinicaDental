const { User } = require('../models');
const bcrypt = require('bcrypt');
const MIN_PASSWORD_LENGTH = 6;
const authController = {};

// Función para registrar un nuevo usuario
authController.register = async (req, res) => {
try {
    if (req.body.password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400).json({
        error: 'Password must be longer than 6 characters',
    });
    }

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
    return res.status(500).json({
    message: 'Something went wrong creating users',
    error: error.message,
    });
}
};

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // const email = req.body.email;
        // const password = req.body.password;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }

        //Validamos password
        const isMatch = bcrypt.compareSync(password, user.password); // true      

        if (!isMatch) {
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                roleId: user.role_id,
                email: user.email
            },
            'secreto',
            {
                expiresIn: '3h' 
            }
        );  

        return res.json(
            {
                success: true,
                message: "User Logged",
                token: token
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "user cant be logged",
                error: error
            }
        )
    }
}


module.exports = authController;





//Crud User
// userController.createUser =  async(req, res) => {
//     try {
//         const name = req.body.name;

//         //validaciones

//         const newUser = await User.create(
//             {
//                 name: name,
//             }
//         )

//         return res.json({
//             success: true,
//             message: "Create User",
//             data: newUser
//         })  
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "Cant Create User"
//         })
//     }
// }

// userController.getAllUser = (req, res) => {
//     return res.json({
//         success: true,
//         message: "Get All User"
//     })
// }

// userController.updateUser = (req, res) => {
//     return res.json({
//         success: true,
//         message: "Update User: " + req.params.id
//     })
// }

// userController.deleteUser = (req, res) => {
//     return res.json({
//         success: true,
//         message: "delete User: " + req.params.id
//     })
// }



