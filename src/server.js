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

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});