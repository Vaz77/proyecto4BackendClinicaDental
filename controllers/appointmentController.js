const { Appointment } = require("../models");

exports.createAppointment = async (req, res) => {
try {
    const { time, date, observations, userId, serviceId } = req.body;

    // Realiza las validaciones necesarias en los datos recibidos
    
    const newAppointment = await Appointment.create({
    time,
    date,
    observations,
    user_id: userId,
    service_id: serviceId,
    });

    // Devuelve la nueva cita creada, en la respuesta
    return res.status(201).json(newAppointment);
} catch (error) {
    // Maneja cualquier error y devuelve la respuesta de error correspondiente
    console.error("Error creating appointment:", error);
    return res.status(500).json({ error: "Failed to create appointment" });
}
};


