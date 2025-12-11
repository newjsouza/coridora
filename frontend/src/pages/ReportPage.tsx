import React from "react";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCards, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  return (
    <div className="report-root">

      <TopTabs active="home" />

      <main className="page">
        <div className="section-title">
          <span>Relatório corrigido APEX-ML</span>
          <span className="section-subtitle">Mandos, odds e contexto revisados</span>
        </div>
        <div className="chip-row">
          <span className="chip green">Análise humana</span>
          <span className="chip green">Contexto corrigido</span>
          <span className="chip green">Mandos validados</span>
          <span className="chip orange">Stake inteligente</span>
          <span className="chip green">Live monitor</span>
        </div>

        <div className="hero-card">
          <div className="hero-header">
            <span className="hero-label">Relatório Corrigido · Aposta #1</span>
            <span className="hero-badge">Confiança 83% ✅</span>
          </div>
          <div className="hero-main">
            <div className="hero-teams">
              Vasco vs Fluminense
              <br />
              <small>São Januário · 20h00 BRT</small>
            </div>
            <div className="hero-odd">
              <span className="hero-odd-label">ODD</span>
              <span className="hero-odd-value">2.15 - 2.50</span>
            </div>
          </div>
          <div className="hero-meta">
            <span>Stake 4% banca</span>
            <span>Mandante confirmado: Vasco</span>
          </div>
          <div className="hero-progress">
            <div className="hero-progress-bar" style={{ width: "83%" }} />
          </div>
          <div className="hero-meta" style={{ marginTop: 6 }}>
            <span>Fator casa: +15pp psicológico</span>
            <span>Árbitro: Raphael Claus (2.8 cartões/jogo)</span>
          </div>
        </div>

        <div className="section-title">
          <span>Apostas revisadas</span>
          <span className="section-subtitle">Mandos e correções aplicadas</span>
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
            Correções críticas <span>verificado</span>
          </summary>
          <p>
            Atualização completa: Vasco é mandante em São Januário (não Maracanã), invertendo o racional
            para vitória do Vasco com confiança mantida em 83% e stake de 4%.
          </p>
          <ul>
            <li>Vasco mandante confirmado via CBF (Raphael Claus) – fator casa +15pp.</li>
            <li>Basel vs Aston Villa: St. Jakob-Park; mandância correta.</li>
            <li>Nottingham vs Utrecht: visitante favorito; texto ajustado.</li>
            <li>Betis vs Dinamo Zagreb: Betis é visitante no Maksimir.</li>
            <li>Demais apostas (#4, #6 e correlatas) mantidas; contexto validado.</li>
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
                    <span className="pill-status">{row.confidence}</span>
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
