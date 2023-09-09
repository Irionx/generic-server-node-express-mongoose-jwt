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
