const express = require('express');
const app = express();

// Permite que Express entienda y lea los datos que le enviamos en formato JSON
app.use(express.json());

// Ruta para el registro general de datos
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta para simular el reporte de incidencias de la comunidad
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// Arrancar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});