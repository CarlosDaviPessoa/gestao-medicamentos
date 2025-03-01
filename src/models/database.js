const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    // Tabela de medicamentos
    db.run(`
        CREATE TABLE IF NOT EXISTS medicamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            quantidade INTEGER DEFAULT 0,
            posto_id INTEGER NOT NULL,
            FOREIGN KEY (posto_id) REFERENCES postos(id)
        )
    `);

    // Tabela de postos
    db.run(`
        CREATE TABLE IF NOT EXISTS postos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            regional TEXT NOT NULL
        )
    `);
});

module.exports = db;