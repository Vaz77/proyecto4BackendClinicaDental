const express = require('express');
const db = require('./db');
const { User } = require('./models');
const authController = require('./controllers/authController');

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de prueba para verificar el estado del servidor
app.get('/health', (req, res) => {
return res.send('healthy');
});

// Configura la ruta para el registro de usuarios
app.post('/register', authController.register);

// Conexión a la base de datos y inicio del servidor
db.then(() => {
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});
});



/*/ SERVICES
app.post('/services', serviceController.createService)
app.get('/services', serviceController.getAllService)
app.put('/services/:id',serviceController.updateService)
app.delete('/services/:id', serviceController.deleteService)
*/