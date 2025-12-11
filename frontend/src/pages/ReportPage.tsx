import React from "react";
import "./ReportPage.css";

type BetCard = {
  badge: string;
  type: string;
  match: string;
  market: string;
  odd: string;
  meta: string;
  confidence: string;
  stake: string;
  risk: string;
  riskTone?: "red";
};

type TableRow = {
  id: number;
  pick: string;
  odd: string;
  confidence: string;
  stake: string;
};

const topTabs = [
  { label: "Destaque", icon: "⭐" },
  { label: "Futebol", icon: "⚽" },
  { label: "Spin Sports", icon: "🎯" },
  { label: "Bolão", icon: "🏆" },
  { label: "Cassino", icon: "🎰" },
  { label: "Tigrinhos", icon: "🐯" },
  { label: "Crash", icon: "🚀" },
  { label: "Slots", icon: "🎲" },
];

const betCards: BetCard[] = [
  {
    badge: "HOT",
    type: "Booster",
    match: "Itália x Austrália",
    market: "Alternativas - Dupla Hipótese: Itália / Empate",
    odd: "1.70",
    meta: "13h45 hoje",
    confidence: "89% confiança",
    stake: "Stake R$50",
    risk: "Risco Alto",
    riskTone: "red",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Dinamarca x Holanda",
    market: "Total de gols - Mais de 1.5",
    odd: "1.53",
    meta: "19h15 hoje",
    confidence: "88% confiança",
    stake: "Stake R$30",
    risk: "Risco Baixo",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "França x Suécia",
    market: "Resultado final - 1X2: França",
    odd: "1.50",
    meta: "16h30 hoje",
    confidence: "84% confiança",
    stake: "Stake R$40",
    risk: "Risco Médio",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Noruega x Portugal",
    market: "Total de escanteios: Mais de 10.5",
    odd: "1.37",
    meta: "18h00 hoje",
    confidence: "82% confiança",
    stake: "Stake R$60",
    risk: "Risco Médio",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Alemanha x Bélgica",
    market: "Total de gols - Mais de 1.5",
    odd: "1.25",
    meta: "21h15 hoje",
    confidence: "82% confiança",
    stake: "Stake R$70",
    risk: "Risco Baixo",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Argentina x Uruguai",
    market: "Alternativas - Dupla hipótese: Argentina / Empate",
    odd: "1.30",
    meta: "14h45 amanhã",
    confidence: "86% confiança",
    stake: "Stake R$60",
    risk: "Risco Baixo",
  },
];

const tableRows: TableRow[] = [
  {
    id: 1,
    pick: "Espanha x Inglaterra (Moneyline Espanha)",
    odd: "1.70",
    confidence: "89%",
    stake: "R$70",
  },
  {
    id: 2,
    pick: "Itália x Austrália (Dupla Hipótese Itália/Empate)",
    odd: "1.70",
    confidence: "88%",
    stake: "R$50",
  },
  {
    id: 3,
    pick: "França x Suécia (França)",
    odd: "1.50",
    confidence: "84%",
    stake: "R$40",
  },
  {
    id: 4,
    pick: "Alemanha x Bélgica (Mais de 1.5 gols)",
    odd: "1.25",
    confidence: "82%",
    stake: "R$70",
  },
];

export const ReportPage: React.FC = () => {
  return (
    <div className="report-root">
      <header className="app-header">
        <div className="app-header-left">
          <div className="logo-circle">B</div>
          <div className="app-title">
            <span>Betano</span>
            <span>Coridora especial</span>
          </div>
        </div>
        <div className="app-header-right">
          <button className="btn-outline">Nova conta</button>
          <button className="btn-solid">Entrar</button>
        </div>
      </header>

      <div className="top-tabs">
        {topTabs.map((tab, index) => (
          <button key={tab.label} className={`top-tab ${index === 0 ? "active" : ""}`}>
            <span className="top-tab-icon" aria-hidden>
              {tab.icon}
            </span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <main className="page">
        <div className="section-title">
          <span>Melhores palpites (Coridora)</span>
          <span className="section-subtitle">Atualizado em tempo real</span>
        </div>
        <div className="chip-row">
          <span className="chip green">Análise humana</span>
          <span className="chip green">Odds otimizadas</span>
          <span className="chip green">Variância protegida</span>
          <span className="chip green">Live monitor</span>
          <span className="chip orange">Stake inteligente</span>
        </div>

        <div className="hero-card">
          <div className="hero-header">
            <span className="hero-label">Selecionado pelo Coridora</span>
            <span className="hero-badge">
              Confiança 89% <span aria-hidden>✅</span>
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-teams">
              Espanha x Inglaterra
              <br />
              <small>Liga das Nações UEFA</small>
            </div>
            <div className="hero-odd">
              <span className="hero-odd-label">ODD</span>
              <span className="hero-odd-value">1.70</span>
            </div>
          </div>
          <div className="hero-meta">
            <span>13h30 BRT</span>
            <span>ODD +8% acima</span>
          </div>
          <div className="hero-progress">
            <div className="hero-progress-bar" style={{ width: "89%" }} />
          </div>
          <div className="hero-meta" style={{ marginTop: 6 }}>
            <span>1.17 3+ Escanteios Inglaterra</span>
            <span>2.29 Inglaterra - Escanteios Total</span>
          </div>
        </div>

        <div className="section-title">
          <span>Melhores odds</span>
          <span className="section-subtitle">Atualizado às 12:04</span>
        </div>

        <div className="bets-carousel">
          {betCards.map((bet) => (
            <div className="bet-card" key={bet.match}>
              <div className="bet-header">
                <span className="bet-badge">{bet.badge}</span>
                <span className="bet-type">{bet.type}</span>
              </div>
              <div className="bet-match">{bet.match}</div>
              <div className="bet-market">{bet.market}</div>
              <div className="bet-odd-row">
                <div>
                  <div className="bet-odd">{bet.odd}</div>
                  <div className="bet-market">{bet.meta}</div>
                </div>
                <div className="bet-badges-row">
                  <span className="tag-risk">{bet.confidence}</span>
                  <span className={`tag-risk ${bet.riskTone === "red" ? "red" : ""}`}>
                    {bet.risk}
                  </span>
                  <span className="tag-stake">{bet.stake}</span>
                </div>
              </div>
              <div className="bet-footer">
                <span>Proteção on</span>
                <button className="btn-bet">APOSTAR</button>
              </div>
            </div>
          ))}
        </div>

        <details className="details" open>
          <summary>
            Por que Coridora? <span>+ info</span>
          </summary>
          <p>
            Selecionamos apenas odds com valor esperado positivo, protegendo variância e trazendo apostas
            que combinam análise humana com otimização em tempo real.
          </p>
          <ul>
            <li>Line shopping automático para buscar melhores preços.</li>
            <li>Proteção por stake inteligente para evitar picos de perda.</li>
            <li>Monitoramento live para cortar apostas ruins antes do cashout.</li>
          </ul>
        </details>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Palpite</th>
                <th>Odd</th>
                <th>Confiança</th>
                <th>Stake</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.pick}</td>
                  <td>{row.odd}</td>
                  <td>
                    <span className={`pill-status ${row.confidence === "82%" ? "red" : ""}`}>
                      {row.confidence}
                    </span>
                  </td>
                  <td>{row.stake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="bottom-item active">
          <span className="icon" aria-hidden>
            🏠
          </span>
          <span>Home</span>
        </button>
        <button className="bottom-item">
          <span className="icon" aria-hidden>
            ⚽
          </span>
          <span>Eventos</span>
        </button>
        <button className="bottom-item">
          <span className="icon" aria-hidden>
            🔍
          </span>
          <span>Busca</span>
        </button>
        <button className="bottom-item">
          <span className="icon" aria-hidden>
            🎟️
          </span>
          <span>Bilhetes</span>
        </button>
        <button className="bottom-item">
          <span className="icon" aria-hidden>
            👤
          </span>
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  );
};
