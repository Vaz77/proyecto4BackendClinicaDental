const express = require('express');
const db = require('./db');
const { User } = require('./models');
const authController = require('./controllers/authController');
const serviceController = require('./controllers/serviceController');

// const userController = {}
// const serviceController = {}

const app = express();

const PORT = 3000;

//app.use(express.json());

app.get('/health', (req, res) => {
    return res.send('healthy');
});

db.then(() =>
    {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        })
    }
)


/*/ SERVICES
app.post('/services', serviceController.createService)
app.get('/services', serviceController.getAllService)
app.put('/services/:id',serviceController.updateService)
app.delete('/services/:id', serviceController.deleteService)
*/