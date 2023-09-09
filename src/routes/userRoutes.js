const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importa el middleware

// Rutas protegidas que requieren autenticación
router.use(authMiddleware);

// Otras rutas para usuarios autenticados
/* router.get('/profile', userControllers.getProfile); */

/**
 * @swagger
 * /api/user/clients/{username}:
 *   get:
 *     summary: Obtiene la lista de clientes del usuario autenticado.
 *     description: >
 *       Esta ruta requiere autenticación. Debes proporcionar un token de autenticación válido en la solicitud.
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida con éxito.
 *       401:
 *         description: Acceso no autorizado. Debes iniciar sesión o proporcionar un token válido.
 *       500:
 *         description: Error al obtener la lista de clientes.
 */

/**
 * @swagger
 * /api/user/clients/{username}/add:
 *   post:
 *     summary: Crea un nuevo cliente para el usuario autenticado.
 *     description: >
 *       Esta ruta requiere autenticación. Debes proporcionar un token de autenticación válido en la solicitud.
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: Nombre de usuario para asociar el cliente.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               edad:
 *                 type: integer
 *               email:
 *                 type: string
 *               movil:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado con éxito.
 *       400:
 *         description: Este cliente ya existe.
 *       401:
 *         description: Acceso no autorizado. Debes iniciar sesión o proporcionar un token válido.
 *       500:
 *         description: Error al crear el cliente.
 */

router.get('/clients/:username', userControllers.getClientsByUser);
router.post('/clients/:username/add', userControllers.createClient);

module.exports = router;