const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Versión de OpenAPI
        info: {
            title: 'API de Autenticación', // Nombre de tu API
            version: '1.0.0', // Versión de tu API
        },
    },
    // Especifica la ubicación de tus rutas de Express
    apis: ['./src/routes/*.js'], // Puedes ajustar esta ruta a tus necesidades
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;