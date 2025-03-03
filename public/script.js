```javascript
async function carregarMedicamentos() {
    const postoId = document.getElementById('posto').value;
    const response = await fetch(`/api/medicamentos/${postoId}`);
    const medicamentos = await response.json();

    const lista = document.getElementById('lista-medicamentos');
    lista.innerHTML = medicamentos.map(med => `
        <li>
            ${med.nome} - ${med.disponivel ? 'Disponível' : 'Indisponível'}
            <button onclick="atualizarDisponibilidade(${med.id}, ${med.disponivel ? 0 : 1})">
                ${med.disponivel ? 'Marcar como indisponível' : 'Marcar como disponível'}
            </button>
        </li>
    `).join('');
}

async function atualizarDisponibilidade(id, disponivel) {
    await fetch(`/api/medicamentos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disponivel })
    });
    carregarMedicamentos(); // Recarrega a lista após a atualização
}

// Carrega os medicamentos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarMedicamentos();
});
```

5. **Abra o arquivo `public/styles.css` no VSCode.**
6. **Adicione o código CSS:**
- Adicione o seguinte código:
```css
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

h1 {
    color: #333;
}

#app {
    max-width: 600px;
    margin: 0 auto;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background: #f9f9f9;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    margin-left: 10px;
}
```
