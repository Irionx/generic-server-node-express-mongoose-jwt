


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado con éxito
 *       400:
 *         description: El usuario ya existe
 *       500:
 *         description: Error en el registro
 */
/**
* @swagger
* /api/auth/login:
*   post:
*     summary: Iniciar sesión
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*               password:
*                 type: string
*     responses:
*       200:
*         description: Inicio de sesión exitoso
*       401:
*         description: Credenciales incorrectas
*       500:
*         description: Error en el inicio de sesión
*/


// Ruta de registro de usuarios (POST)
router.post('/register', authController.register);

// Ruta de inicio de sesión (POST)
router.post('/login', authController.login);

// Ruta para generar un token (POST)
router.post('/token', authController.generateToken);

module.exports = router;