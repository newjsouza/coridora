import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCards, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="report-root">

      <TopTabs active="home" />

      <main className="page">
        <div className="section-title">
          <span>Relatório APEX Sports Analytics · 11/12/2025</span>
          <span className="section-subtitle">10 indicações consolidadas · Copas + Europa League</span>
        </div>
        <div className="chip-row">
          <span className="chip green">Análise humana</span>
          <span className="chip green">10 indicações</span>
          <span className="chip green">Stake total 31.5%</span>
          <span className="chip orange">Kelly 0.25</span>
          <span className="chip green">Stop-loss 12%</span>
        </div>

        <div className="hero-card">
          <div className="hero-header">
            <span className="hero-badge">Confiança 83% ✅</span>
          </div>
          <div className="hero-main">
            <div className="hero-teams hero-teams-3d">
              Fluminense vs Vasco
              <br />
              <small>Maracanã · 20h00 BRT</small>
            </div>
            <div className="hero-odd">
              <span className="hero-odd-label">ODD</span>
              <span className="hero-odd-value">1.80 - 2.10</span>
            </div>
          </div>
          <div className="hero-meta">
            <span>Stake 4% banca</span>
            <span>Risco Baixo-Médio</span>
          </div>
          <div className="hero-progress">
            <div className="hero-progress-bar" style={{ width: "83%" }} />
          </div>
          <div className="hero-meta" style={{ marginTop: 6 }}>
            <span>Forma Flu: 7/8 invicto · +15pp psicológico</span>
            <span>Árbitro: Raphael Claus (2.8 cartões/jogo)</span>
          </div>
        </div>

        <div className="section-title">
          <span>10 apostas do dia</span>
          <span className="section-subtitle">Copa do Brasil, Challenge Cup, Europa League</span>
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
                <button className="btn-bet" onClick={() => navigate(`/aposta/${bet.slug}`)}>
                  MAIS DETALHES
                </button>
              </div>
            </div>
          ))}
        </div>

        <details className="details" open>
          <summary>
            Resumo executivo <span>validado</span>
          </summary>
          <p>
            Quinta 11/12 concentra semifinais (Copa do Brasil) e 6ª rodada decisiva da Europa League.
            Pressão alta gera valor em gols, escanteios e cartões, além de moneylines com vantagem técnica.
          </p>
          <ul>
            <li>Banca segregada 100% para apostas do dia; stop-loss diário 12% e Kelly 0.25 aplicado.</li>
            <li>Stake unitário: 3-5% nas conservadoras; 1-2% nas arrojadas; total planejado 31.5%.</li>
            <li>Escalações checadas 1h antes; documentação completa em linha com APEX Compliance.</li>
            <li>Top edges: Aston Villa superior ao Basel; Betis favorito mesmo visitante; Flu em sequência invicta.</li>
            <li>Mercados de apoio: BTTS+Over em Celtic vs Roma; parlay cartões+Betis; Lo Celso e Roma 1T.</li>
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

    </div>
  );
};
