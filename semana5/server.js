const express = require('express');
const app = express();

// Middleware para permitir que el servidor entienda datos en formato JSON
app.use(express.json());

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo general
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta dinámica con parámetro
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta POST para recibir reportes comunitarios
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Servidor escuchando en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});