const express = require('express');
const bodyParser = require('body-parser');
const authService = require('./authService');
const userService = require('./userService');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de SQLite 
const db = new sqlite3.Database(':memory:');
authService.setupDatabase(db);

app.use(bodyParser.json());

// Rutas para archivos estáticos (HTML, CSS, JS) en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para el servicio de autenticación
app.use('/api/auth', authService);

// Rutas para el servicio de gestión de usuarios
app.use('/api/users', userService);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

