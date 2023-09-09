const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Asegúrate de importar la clave secreta desde tu configuración

module.exports = (req, res, next) => {
    // Obtén el token del encabezado de la solicitud
    const token = req.header('token');

    // Verifica si hay un token
    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado. Debes iniciar sesión.' });
    }

    try {
        // Verifica el token
        const decoded = jwt.verify(token, secretKey);

        // Añade los datos del usuario decodificados a la solicitud
        req.user = decoded;

        // Continúa con la siguiente función de middleware
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token inválido. Debes iniciar sesión.' });
    }
};