
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Puedes ajustar este número según tus necesidades de seguridad.


// Función para registrar un usuario
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verifica si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe.' });
        }

        // Genera una sal única
        const salt = await bcrypt.genSalt(saltRounds);

        // Aplica el hash a la contraseña
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crea un nuevo usuario
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el registro.' });
    }
};

// Función para iniciar sesión
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Busca el usuario en la base de datos
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas.' });
        }

        // Compara la contraseña proporcionada con el hash almacenado en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Contraseña correcta, genera un token JWT
            const token = jwt.sign({ username }, secretKey, { expiresIn: '2h' });
            res.status(200).json({ token });
        } else {
            // Contraseña incorrecta, informa al cliente que las credenciales son incorrectas.
            res.status(401).json({ message: 'Credenciales inválidas.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el inicio de sesión.' });
    }
};

// Función para generar un token
exports.generateToken = (req, res) => {
    try {
        // Verifica la identidad del usuario (podría incluirse más lógica aquí)
        const username = req.body.username;

        // Genera un token JWT
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al generar el token.' });
    }
};