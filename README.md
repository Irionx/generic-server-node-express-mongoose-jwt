## Backend Básico con Login, Registro y Creación de Clientes

Este proyecto de backend proporciona funcionalidades básicas de autenticación, incluyendo registro y inicio de sesión, con el uso de tokens de acceso. También ofrece la capacidad de crear y gestionar clientes asociados a usuarios.

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
### Ejecución
Para ejecutar la aplicación, utiliza los siguentes comandos:

```
npm install
```
para instalar las dependencias y luego:
```
node app.js
```
Luego, puedes acceder a la documentación Swagger y probar los puntos finales en localhost:3000/api-docs.

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




























# server-node-express-jsonwebtoken
 backend basico con login, y registro. Access token, hash & salt para password, creacion de clientes para el usuario

esquema de cliente:
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "edad": 30,
    "email": "juan@example.com",
    "movil": "123-456-7890",
    "usuario": "juanjito" // El nombre de usuario del usuario que lo creó
}
esquema de usuario:
{
    "username": "juanjito",
    "password": "contraseña_segura"
}

node app.js to run
then you con go to: to load swagger and test endpoints
localhost:3000/api-docs 


  "dependencies": {
    "bcrypt": "^5.1.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  }
