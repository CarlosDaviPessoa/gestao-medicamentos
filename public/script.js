async function carregarMedicamentos() {
    const postoId = document.getElementById('posto').value;
    const response = await fetch(`/api/medicamentos/${postoId}`);
    const medicamentos = await response.json();

    const lista = document.getElementById('lista-medicamentos');
    lista.innerHTML = medicamentos.map(med => `
        <li>
            ${med.nome} - Quantidade: ${med.quantidade}
            <button onclick="atualizarQuantidade(${med.id})">Atualizar</button>
        </li>
    `).join('');
}

async function atualizarQuantidade(id) {
    const novaQuantidade = prompt('Nova quantidade:');
    await fetch(`/api/medicamentos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantidade: novaQuantidade })
    });
    carregarMedicamentos();
}