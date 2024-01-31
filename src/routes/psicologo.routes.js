const express = require('express');
const router = express.Router();
const psicologoController = require('../controllers/psicologo.controller.js');

router.get('/', psicologoController.getPsicologos);

module.exports = router;
