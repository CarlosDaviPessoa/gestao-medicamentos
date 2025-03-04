async function carregarPostos() {
    const response = await fetch('/api/postos');
    const postos = await response.json();

    const selectPosto = document.getElementById('posto');
    selectPosto.innerHTML = postos.map(posto => `
        <option value="${posto.id}">${posto.nome}</option>
    `).join('');
}

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

// Carrega os postos e medicamentos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarPostos();
    carregarMedicamentos();
});