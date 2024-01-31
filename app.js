
const express = require('express');
const bodyParser = require('body-parser');
const psicologoRoutes = require('../PsyCheckAPI/src/routes/psicologo.routes.js');
const pacienteRoutes = require('../PsyCheckAPI/src/routes/paciente.routes.js');
const consultaRoutes = require('../PsyCheckAPI/src/routes/consulta.routes.js');
const app = express();

app.use(bodyParser.json());

app.use('/psicologos', psicologoRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/consultas', consultaRoutes);

app.listen(4050, () => {
    console.log('Servidor rodando na porta 4050');
  });
  