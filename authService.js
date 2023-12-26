const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Variable para la clave secreta 
const secretary = process.env.JWT_SECRET_KEY || 'ShadowGarden';

// SQLite Database 
let db;

// Configuracion de la base de datos
function setupDatabase(database) {
  db = database;
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
  });
}

// Aquí comienza la transpilación (para el navegador)
// Puedes transpilar a ES5 o cualquier versión que sea compatible con navegadores

// Endpoint para registrar un nuevo usuario
router.post('/register', async (req, res) => {     
  res.json({ message: 'Registrarse no está disponible en el lado del cliente.' });
});

// Endpoint para iniciar sesión y generar un token JWT
router.post('/login', async (req, res) => {
  res.json({ message: 'Iniciar sesión no está disponible en el lado del cliente.' });
});

// Aquí finaliza la transpilación

// Endpoint para cerrar sesión (simplemente devolvemos una respuesta exitosa)
router.post('/logout', (req, res) => {
  res.json({ message: 'Cierre de sesión exitoso.' });
});

module.exports = router;
module.exports.setupDatabase = setupDatabase;
