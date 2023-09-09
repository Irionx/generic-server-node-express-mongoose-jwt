const Client = require('../models/Client');
const User = require('../models/User');

exports.createClient = async (req, res) => {
    try {
        const { nombre, apellido, edad, email, movil } = req.body;
        const username = req.params.username; // Obtiene el nombre de usuario desde el parámetro de la URL

        // Verifica si el cliente ya existe para este usuario (si deseas evitar duplicados)
        const existingClient = await Client.findOne({ usuario: username, nombre });

        if (existingClient) {
            return res.status(400).json({ message: 'Este cliente ya existe.' });
        }

        // Crea un nuevo cliente asociado al usuario
        const newClient = new Client({
            nombre,
            apellido,
            edad,
            email,
            movil,
            usuario: username, // Asocia el cliente con el usuario actual
        });

        await newClient.save();

        res.status(201).json({ message: 'Cliente creado con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el cliente.' });
    }
};

exports.getClientsByUser = async (req, res) => {
    try {
        const username = req.params.username; // Obtiene el nombre de usuario de los parámetros de la URL


        // Busca todos los clientes asociados a este usuario por su ID
        const clients = await Client.find({ usuario: username });

        // Devuelve la lista de clientes
        res.status(200).json(clients);
        console.log('se supone correcto');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la lista de clientes.' });
    }
};
