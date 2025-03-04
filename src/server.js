const express = require('express');
const db = require('./models/database');
const medicamentosRouter = require('./routes/medicamentos');

const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());
app.use(express.static('public'));

// Rotas
app.use('/api/medicamentos', medicamentosRouter);

// Nova rota para listar postos
app.get('/api/postos', (req, res) => {
    db.all('SELECT * FROM postos', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});