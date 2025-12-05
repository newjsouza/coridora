(function () {
    const statusElement = document.getElementById('liga-page-status');
    const body = document.body;

    document.addEventListener('DOMContentLoaded', initLigaPage);

    async function initLigaPage() {
        const ligaKey = body.dataset.liga;
        if (!ligaKey) {
            updateStatus('Liga não identificada nesta página.');
            return;
        }

        try {
            const response = await fetch('../data/outras-ligas.json');
            if (!response.ok) throw new Error('Falha ao carregar dados das ligas');
            const data = await response.json();
            const liga = data.ligas?.[ligaKey];
            if (!liga) {
                updateStatus('Liga não encontrada.');
                return;
            }

            renderHero(liga);
            renderMercados(liga);
            renderAnalisesDetalhadas(liga);
            setupViewTabs();
            updateStatus('');
        } catch (error) {
            console.error(error);
            updateStatus('Erro ao carregar informações desta liga. Tente novamente mais tarde.');
        }
    }

    function updateStatus(message) {
        if (!statusElement) return;
        statusElement.textContent = message;
        statusElement.classList.toggle('hidden', !message);
    }

    function renderHero(liga) {
        const hero = document.getElementById('liga-hero');
        if (!hero) return;
        hero.innerHTML = `
            <div class="liga-hero-logo">${liga.logo || '⚽'}</div>
            <div>
                <h1>${liga.nome}</h1>
                <p>${liga.pais || ''}</p>
                <p><strong>Rodada ${liga.rodadaAtual || ''}</strong> • ${liga.dataRodada || ''}</p>
            </div>
        `;
    }

    function renderMercados(liga) {
        const container = document.getElementById('liga-mercados');
        if (!container) return;

        if (!Array.isArray(liga.analises) || !liga.analises.length) {
            container.innerHTML = '<p class="empty-state">Nenhuma indicação disponível nesta rodada.</p>';
            return;
        }

        const cards = liga.analises.map((analise) => {
            return `
                <article class="liga-card mercado">
                    <header>
                        <h3>${analise.titulo || 'Confronto'}</h3>
                        <span class="liga-chip">${analise.competicao || ''}</span>
                    </header>
                    <p class="liga-meta">📅 ${analise.data || ''} • ${analise.horario || ''}</p>
                    <p class="liga-meta">📍 ${analise.local || ''}</p>
                    <p class="liga-recomendacao"><strong>Mercado recomendado:</strong> ${analise.recomendacao || 'Aguardando definição'}</p>
                    ${analise.alternativa ? `<p><strong>Alternativa:</strong> ${analise.alternativa}</p>` : ''}
                </article>
            `;
        }).join('');

        container.innerHTML = cards;
    }

    function renderAnalisesDetalhadas(liga) {
        const container = document.getElementById('liga-analises');
        if (!container) return;

        if (!Array.isArray(liga.analises) || !liga.analises.length) {
            container.innerHTML = '<p class="empty-state">As análises completas serão adicionadas em breve.</p>';
            return;
        }

        const cards = liga.analises.map((analise) => {
            const mandante = renderTimeBloco(analise.mandante_info, 'mandante');
            const visitante = renderTimeBloco(analise.visitante_info, 'visitante');
            const contexto = renderContexto(analise.contexto);
            return `
                <article class="liga-card analise">
                    <h3>${analise.titulo || ''}</h3>
                    <p class="liga-meta">${analise.competicao || ''} • ${analise.data || ''} às ${analise.horario || ''}</p>
                    ${contexto}
                    <div class="liga-times">
                        ${mandante}
                        ${visitante}
                    </div>
                    ${analise.ajustesTaticos ? `<p class="liga-ajuste">${analise.ajustesTaticos}</p>` : ''}
                    <div class="liga-recs">
                        <div>
                            <h4>Recomendação</h4>
                            <p>${analise.recomendacao || 'Em atualização'}</p>
                        </div>
                        ${analise.alternativa ? `<div><h4>Alternativa</h4><p>${analise.alternativa}</p></div>` : ''}
                    </div>
                    ${analise.observacoes ? `<p class="liga-alerta">${analise.observacoes}</p>` : ''}
                </article>
            `;
        }).join('');

        container.innerHTML = cards;
    }

    function renderTimeBloco(info = {}, tipo) {
        if (!info || typeof info !== 'object') return '';
        const icon = tipo === 'mandante' ? '🏠' : '✈️';
        const rows = Object.entries(info)
            .filter(([key]) => key !== 'nome')
            .map(([key, value]) => `<p><strong>${formatLabel(key)}:</strong> ${value}</p>`)
            .join('');
        return `
            <div class="time-bloco">
                <h5>${icon} ${info.nome || ''}</h5>
                ${rows}
            </div>
        `;
    }

    function renderContexto(contexto) {
        if (!contexto) return '';
        const rows = Object.entries(contexto)
            .map(([key, value]) => `<p><strong>${formatLabel(key)}:</strong> ${value}</p>`)
            .join('');
        return rows ? `<div class="liga-contexto">${rows}</div>` : '';
    }

    function formatLabel(key = '') {
        return key
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/_/g, ' ')
            .replace(/^./, (c) => c.toUpperCase());
    }

    function setupViewTabs() {
        const tabs = document.querySelectorAll('.liga-tab');
        const views = document.querySelectorAll('.liga-view');
        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.view;
                tabs.forEach((btn) => btn.classList.toggle('active', btn === tab));
                views.forEach((view) => view.classList.toggle('active', view.id === `${target}-view`));
            });
        });
    }
})();
