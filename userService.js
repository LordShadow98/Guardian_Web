const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Función de middleware para verificar la autenticación del token JWT
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Se requiere token JWT.' });
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Acceso prohibido. Token JWT no válido.' });
    }

    req.user = user;
    next();
  });
}

// Rutas para el servicio de gestión de usuarios
router.get('/profile', authenticateToken, (req, res) => {
  // Obtener información del usuario desde el token JWT
  const userInfo = {
    userId: req.user.userId,
    username: req.user.username,
  };

  res.json(userInfo);
});

router.put('/profile', authenticateToken, (req, res) => {
  // Actualizar información del usuario (simulación en memoria)
  const updatedUserInfo = {
    userId: req.user.userId,
    username: req.user.username,
    updatedData: req.body.updatedData, // Aquí puedes manejar la actualización de datos específicos
  };

  res.json(updatedUserInfo);
});

module.exports = router;
