// routes/consultaRoutes.js
const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consulta.controller.js');

router.get('/', consultaController.getConsultas);

module.exports = router;
