const db = require('../models/database');

const listarMedicamentos = (req, res) => {
    const { postoId } = req.params;
    db.all(
        'SELECT * FROM medicamentos WHERE posto_id = ?',
        [postoId],
        (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        }
    );
};

const atualizarDisponibilidade = (req, res) => {
    const { id } = req.params;
    const { disponivel } = req.body;
    db.run(
        'UPDATE medicamentos SET disponivel = ? WHERE id = ?',
        [disponivel, id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Disponibilidade atualizada com sucesso!' });
        }
    );
};

module.exports = {
    listarMedicamentos,
    atualizarDisponibilidade,
};