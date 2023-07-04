const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    // Obtener el token
    const bearerToken = req.headers.authorization;

    // Verificar si no se proporcionó un token
    if (!bearerToken) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token is missing',
      });
    }

    // Extraer el token de autorización (eliminar el prefijo "Bearer")
    const token = bearerToken.split(' ')[1];

    // Verificar y decodificar el token utilizando jwt
    const decoded = jwt.verify(token, 'secreto');

    // Almacenar los datos del usuario extraídos del token
    req.userId = decoded.userId;
    req.roleId = decoded.roleId; // Corregido: cambiar "req.role_Id" a "req.roleId"

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
      error: error.message,
    });
  }
};

module.exports = auth;



// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//     try {
//         // Obtener el token
//         const bearerToken = req.headers.authorization;
//         // Verificar si no se proporcionó un token 
//         if (!bearerToken) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Authorization token is missing"
//             });
//         }
//         // Extraer el token de autorización (eliminar el prefijo "Bearer")
//         const token = bearerToken.split(" ")[1];
//         // Verificar y decodificar el token utilizando jwt
//         const decoded = jwt.verify(token, 'secreto');
//         // Almacenar los datos del usuario extraídos del token
//         req.userId = decoded.userId;
//         req.role_Id = decoded.roleId;


//         next();
//     } catch (error) {
//         return res.status(401).json({
//             success: false,
//             message: "Invalid token",
//             error: error.message
//         });
//     }
// }

// module.exports = auth;
