const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/formularioDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Definir el esquema de los datos del formulario
const FormularioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String,
  experiencia: String
});

const Formulario = mongoose.model('Formulario', FormularioSchema);

// Endpoint para recibir los datos del formulario
app.post('/guardarFormulario', (req, res) => {
  const { nombre, correo, telefono, experiencia } = req.body;

  // Crear un nuevo documento en la base de datos
  const nuevoFormulario = new Formulario({
    nombre,
    correo,
    telefono,
    experiencia
  });

  // Guardar el documento en la base de datos
  nuevoFormulario.save()
    .then(() => {
      res.status(200).json({ message: 'Formulario guardado correctamente' });
    })
    .catch(err => {
      res.status(500).json({ message: 'Hubo un error al guardar el formulario', error: err });
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
