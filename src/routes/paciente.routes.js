const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/paciente.controller.js');


router.get('/', pacienteController.getPacientes);

module.exports = router;
