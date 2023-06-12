# Proyecto 4 - Sistema de Gestión de Citas para Clínica Dental

## Tabla de contenidos
- [Caracteristicas](#caracteristicas)
- [Tecnologias](#tecnologias)
- [Desarrollo](#desarrollo)
- [Licencia y Copyright](#licencia-y-copyright)


#### Caracteristicas
Este es el backend en desarrollo del sistema de gestión de citas para una clínica dental. Proporciona una API que permite a los usuarios registrarse, iniciar sesión, gestionar sus citas y acceder a su información personal. También ofrece funcionalidades para que los dentistas puedan registrarse, iniciar sesión y acceder a todas las citas y clientes registrados.

#### Tecnologias
-Node.js
-Express.js
-Sequelize


#### Desarrollo
El proyecto actualmente se encuentra en desarrollo y los siguientes endpoints han sido implementados y probados con éxito:

-POST /auth/register: Registro de usuarios.
-POST /auth/login: Inicio de sesión de usuarios.
Además, se han creado los modelos y sus relaciones de Role, User, Service y Appointment que son utilizados en el sistema.

Se espera continuar con la implementación de los siguientes endpoints y funcionalidades:

-GET /user/profile: Perfil de usuario.
-PUT /user/profile: Modificación de datos del perfil de usuario.
-POST /appointments: Creación de citas.
-PUT /appointments/:id: Modificación de una cita existente.
-DELETE /appointments/:id: Anulación de una cita existente.
-GET /appointments: Obtener todas las citas del usuario actual.
-GET /appointments/all: Obtener todas las citas existentes (solo para dentistas).
-GET /users: Obtener todos los clientes registrados (solo para dentistas).