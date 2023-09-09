## Backend Básico con Login, Registro y Creación de Clientes

Este proyecto de backend proporciona funcionalidades básicas de autenticación, incluyendo registro y inicio de sesión, con el uso de tokens de acceso. También ofrece la capacidad de crear y gestionar clientes asociados a usuarios.

### Preparación
Es necesario una base de datos lista y conectada a nuestro proyecto, en mi caso utilicé mongoDB https://www.mongodb.com/try/download/community
una vez instalada y creada podemos configurar el Identificador uniforme de recursos de la base de datos en el archivo config.js:

```javascript
module.exports = {
    dbURI: 'mongodb://localhost/exampleDatabaseName', // Cambia esto por la URI de tu base de datos
    secretKey: 'miSecretKey', 
};
```

### Ejecución
Para ejecutar la aplicación, utiliza los siguentes comandos:

```
npm install
```
para instalar las dependencias y luego:
```
node app.js
```
si todo fue bien la consola mostra
Luego, puedes acceder a la documentación Swagger y probar los puntos finales en localhost:3000/api-docs.

### Esquema de Cliente

```json
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30,
    "email": "juan@example.com",
    "movil": "123-456-7890",
    "usuario": "juanjito" // Nombre de usuario del usuario que lo creó
}
```
### Esquema de Usuario

```json
{
    "username": "juanjito",
    "password": "contraseña_segura"
}
```
### Dependencias
Asegúrate de tener instaladas las siguientes dependencias:
```json
 "dependencies": {
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
}
```
¡Disfruta de tu backend básico y seguro!
