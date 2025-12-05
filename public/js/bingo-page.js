document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('bingo-root');
    const status = document.getElementById('bingo-status');
    if (!container) return;

    try {
        const response = await fetch('data/bingo-10-mercados.json');
        if (!response.ok) throw new Error('Falha ao carregar bingo');
        const data = await response.json();
        renderBingoPage(container, data);
        updateStatus(status, '');
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p class="empty-state">Erro ao carregar o Bingo. Atualize a página para tentar novamente.</p>';
        updateStatus(status, 'Sem conexão com o arquivo de dados.');
    }
});

function updateStatus(element, message) {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle('hidden', !message);
}

function renderBingoPage(container, data) {
    if (!data || !Array.isArray(data.mercados)) {
        container.innerHTML = '<p class="empty-state">Nenhum mercado disponível no momento.</p>';
        return;
    }

    const jogos = Array.isArray(data.jogos_programados)
        ? `<ul>${data.jogos_programados.map((jogo) => `<li>${jogo}</li>`).join('')}</ul>`
        : '';

    const mercados = data.mercados
        .slice(0, 10)
        .map((mercado) => {
            return `
                <article class="bingo-mercado">
                    <div class="numero">${mercado.numero}</div>
                    <h3>${mercado.titulo}</h3>
                    <p><strong>Jogo:</strong> ${mercado.jogo}</p>
                    <p><strong>Hora:</strong> ${mercado.hora}</p>
                    <p><strong>Confiança:</strong> ${mercado.confianca}%</p>
                    <p><strong>Value:</strong> ${mercado.odds?.value || '-'} </p>
                    <p><strong>Risco:</strong> ${mercado.risco}</p>
                    <p class="bingo-motivo">${mercado.motivo}</p>
                </article>
            `;
        })
        .join('');

    container.innerHTML = `
        <div class="bingo-header">
            <h1>${data.titulo || 'Bingo Especial'}</h1>
            <p>${data.data || ''}</p>
            <p class="bingo-aviso">${data.aviso || ''}</p>
        </div>
        <div class="bingo-programacao">
            <h3>📅 Jogos programados</h3>
            ${jogos}
        </div>
        <div class="bingo-mercados">${mercados}</div>
        <div class="bingo-resumo">
            <h2>🎯 Resumo</h2>
            <p><strong>Total de mercados:</strong> ${data.resumo_bingo?.total_mercados || ''}</p>
            <p><strong>Stake recomendado:</strong> ${data.resumo_bingo?.valor_stake_recomendado || ''}</p>
            <p><strong>Taxa de sucesso esperada:</strong> ${data.resumo_bingo?.taxa_sucesso_esperada || ''}</p>
            <p><strong>Value médio:</strong> ${data.resumo_bingo?.value_medio || ''}</p>
            <p><strong>Confiança média:</strong> ${data.resumo_bingo?.confianca_media || ''}</p>
            <p><strong>Maior value:</strong> ${data.resumo_bingo?.maior_value || ''}</p>
            <p><strong>Melhor relação:</strong> ${data.resumo_bingo?.melhor_relacao || ''}</p>
            <p class="bingo-aviso-final">${data.resumo_bingo?.aviso_final || ''}</p>
        </div>
    `;
}
