const express = require('express');
const mongoose = require('mongoose');
const { dbURI } = require('./src/config');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Importa la configuración de Swagger
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));

// Configura middleware y rutas
app.use(express.json());
app.use('/api/auth', authRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
    res.send('¡Bienvenido!');
});

// Rutas de usuarios
app.use('/api/user', userRoutes);

// Configura Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conéctar a la base de datos
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión a la base de datos establecida');
        // Inicia el servidor
        app.listen(3000, () => {
            console.log('Servidor en funcionamiento en el puerto 3000');
        });
    })
    .catch(err => console.error('Error de conexión a la base de datos:', err));
