const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        // Obtener el token
        const bearerToken = req.headers.authorization;
        // Verificar si no se proporcionó un token 
        if(!bearerToken) {
            return res.json(
                {
                    success: true,
                    message: "no puedes pasar"
                }
            )
        }
        // Extraer el token de autorizacion (eliminar el prefijo "Bearer")
        const token = bearerToken.split(" ")[1];         
        // Verificar y decodificar el token utilizando jwt
        const decoded = jwt.verify(token, 'secreto');
        // Almacenar los datos del usuario extraidos del token
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
            error: error
        });
    }

}

module.exports = auth;