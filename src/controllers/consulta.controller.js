const consulta = require('../models/consulta.model.js');

const consultas = [
    new consulta(1, 10, 100, '2024-04-01 10:00:00', true, 'Ótima evolução nas últimas consultas.', 'Progresso positivo.', 'Paciente está se sentindo bem.'),
];

exports.getConsultas = (req, res) => {
    res.json({ consultas });
};
