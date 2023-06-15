const { Appointment } = require("../models");

const appointmentController = {
  createAppointment: async (req, res) => {
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

      // Devuelve la nueva cita creada en la respuesta
      return res.status(201).json(newAppointment);
    } catch (error) {
      // Maneja cualquier error y devuelve la respuesta de error correspondiente
      console.error("Error creating appointment:", error);
      return res.status(500).json({ error: "Failed to create appointment" });
    }
  },

  updateAppointment: async (req, res) => {
    try {
      const { appointmentId } = req.params;
      const { time, date, observations } = req.body;

      // Buscar la cita por Id
      const appointment = await Appointment.findByPk(appointmentId);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      // Actualiza datos de la cita
      appointment.time = time;
      appointment.date = date;
      appointment.observations = observations;

      // Guarda los cambios en la base de datos
      await appointment.save();

      // Devuelve la cita modificada en la respuesta
      return res.status(200).json(appointment);
    } catch (error) {
      console.error("Error updating appointment", error);
      return res.status(500).json({ error: "Failed to update appointment" });
    }
  },

  cancelAppointment: async (req, res) => {
    try {
      const { appointmentId } = req.params;
      // Buscar la cita por Id
      const appointment = await Appointment.findByPk(appointmentId);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      // Verificar que la cita pertenezca al usuario
      if (appointment.user_id !== req.user.id) {
        return res
          .status(403)
          .json({ error: "You are not authorized to cancel this appointment" });
      }

      // Elimina la cita de la base de datos
      await appointment.destroy();
      return res.status(200).json({
        message: "Appointment canceled successfully",
      });
    } catch (error) {
      console.error("Error canceling appointment", error);
      return res.status(500).json({ error: "Failed to cancel appointment" });
    }
  },
};

module.exports = appointmentController;

