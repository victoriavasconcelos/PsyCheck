const paciente = require('../models/paciente.model.js');

const pacientes = [
    new paciente(100, 'José Silva', '1990-01-15', 'Não binário', 'Rua A, 123', '12345678901', 'jose.silva@example.com'),
];

exports.getPacientes = (req, res) => {
    res.json({ pacientes });
};
