const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const appointmentController = require('./controllers/appointmentController');
const authMiddleware = require('./middleware/verifyToken');
const isDoctor = require('./middleware/isDoctor');
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar el estado del servidor
app.get('/health', (req, res) => {
return res.send('healthy');
});

// Ruta para el registro de usuarios
app.post('/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authMiddleware, authController.logout);

// Ruta para obtener el perfil del usuario
app.get('/profile', authMiddleware, userController.getProfile);
app.put('/profile', authMiddleware, userController.updateProfile);
app.get('/clients', userController.getAllClients);

// Rutas para creación, modificación y cancelación de citas
app.post('/appointments', authMiddleware, appointmentController.createAppointment);
app.put('/appointments/:appointmentId', authMiddleware, appointmentController.updateAppointment);
app.delete("/appointments/:appointmentId", authMiddleware, appointmentController.cancelAppointment);
app.get('/appointments/user', authMiddleware, appointmentController.getUserAppointments);
app.get("/appointments", isDoctor, appointmentController.getAllAppointments);

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