const express = require('express');
const db = require('./db');
const { User } = require('./models');


const userController = {}

const app = express();

const PORT = 3000;

//app.use(express.json());

app.get('/health', (req, res) => {
    return res.send('healthy');
});

app.post('/register', async(req, res) => {
    try {
        if (req.body.password.length < 8) {
            return res.send('Password must be longer than 8 characters');
        }

        const newPassword = bcrypt.hashSync(req.body.password, 8);

        const newUser = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
                role_id: 3
            }
        );

        return res.send(newUser);
    } catch (error) {
        return res.send('Something went wrong creating users ' + error.message)
    }
})

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
)



//Crud User
userController.createUser =  async(req, res) => {
    try {
        const name = req.body.name;

        //validaciones

        const newUser = await User.create(
            {
                name: name,
            }
        )

        return res.json({
            success: true,
            message: "Create User",
            data: newUser
        })  
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Cant Create User"
        })
    }
}

userController.getAllUser = (req, res) => {
    return res.json({
        success: true,
        message: "Get All User"
    })
}

userController.updateUser = (req, res) => {
    return res.json({
        success: true,
        message: "Update User: " + req.params.id
    })
}

userController.deleteUser = (req, res) => {
    return res.json({
        success: true,
        message: "delete User: " + req.params.id
    })
}
