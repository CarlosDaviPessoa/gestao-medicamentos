const express = require('express');
const router = express.Router();
const medicamentosController = require('../controllers/medicamentosController');

// Rota para listar medicamentos de um posto
router.get('/:postoId', medicamentosController.listarMedicamentos);

// Rota para atualizar a disponibilidade de um medicamento
router.put('/:id', medicamentosController.atualizarDisponibilidade);

module.exports = router;