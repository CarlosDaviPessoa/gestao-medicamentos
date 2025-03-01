const express = require('express');
const router = express.Router();
const db = require('../models/database');

// Listar medicamentos de um posto
router.get('/:postoId', (req, res) => {
    const { postoId } = req.params;
    db.all(
        'SELECT * FROM medicamentos WHERE posto_id = ?',
        [postoId],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        }
    );
});

// Atualizar quantidade de um medicamento
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { quantidade } = req.body;
    db.run(
        'UPDATE medicamentos SET quantidade = ? WHERE id = ?',
        [quantidade, id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Quantidade atualizada com sucesso!' });
        }
    );
});

module.exports = router;