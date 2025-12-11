import React from "react";
import "./ReportPage.css";
import { AppHeader } from "../components/AppHeader";
import { TopTabs } from "../components/TopTabs";
import { betCards, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  return (
    <div className="report-root">
      <AppHeader />

      <TopTabs active="home" />

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
