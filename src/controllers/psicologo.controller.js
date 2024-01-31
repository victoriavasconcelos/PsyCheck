const psicologo = require('../models/psicologo.model.js');

const psicologos = [
    new psicologo(10, 'Dra. Maria Silva', 'Psicologia Clínica', 'maria.silva@example.com', '123456', 'Feminino'),
];

exports.getPsicologos = (req, res) => {
    res.json({ psicologos });
};
