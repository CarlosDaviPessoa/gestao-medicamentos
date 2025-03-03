const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Cria as tabelas de postos e medicamentos
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS postos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            regional TEXT NOT NULL
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS medicamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            disponivel INTEGER DEFAULT 1, -- 1 para disponível, 0 para indisponível
            posto_id INTEGER NOT NULL,
            FOREIGN KEY (posto_id) REFERENCES postos(id)
        )
    `);
});

module.exports = db;