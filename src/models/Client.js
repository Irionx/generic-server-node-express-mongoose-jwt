const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: Number,
    email: String,
    movil: String,
    usuario: { type: String, ref: 'User' }, // Relación con el usuario que lo creó
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
