const db = require('./models/database');

const medicamentos = [
    { nome: 'Aciclovir 200 mg', quantidade: 10, posto_id: 1 },
    { nome: 'Ácido fólico 5 mg', quantidade: 5, posto_id: 2 },
    // Adicione todos os medicamentos aqui
];

const postos = [
    { nome: 'UAPS/CAPS - SER II', regional: 'I' },
    { nome: 'CTA/SAE', regional: 'I' },
    // Adicione todos os postos aqui
];

db.serialize(() => {
    postos.forEach((posto) => {
        db.run(
            'INSERT INTO postos (nome, regional) VALUES (?, ?)',
            [posto.nome, posto.regional]
        );
    });

    medicamentos.forEach((medicamento) => {
        db.run(
            'INSERT INTO medicamentos (nome, quantidade, posto_id) VALUES (?, ?, ?)',
            [medicamento.nome, medicamento.quantidade, medicamento.posto_id]
        );
    });
});

console.log('Banco de dados populado com sucesso!');