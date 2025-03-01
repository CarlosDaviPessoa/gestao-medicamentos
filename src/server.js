const express = require('express');
const app = express();
const port = 3000;

// Importa o roteador de medicamentos
const medicamentosRouter = require('./routes/medicamentos');

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota inicial para teste
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Configura as rotas de medicamentos
app.use('/api/medicamentos', medicamentosRouter);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});