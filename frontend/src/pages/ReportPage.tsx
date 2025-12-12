import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCards, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const playlistIds = [
    "4kPceYYKnTI", // Vasco vs Fluminense
    "xYxHyImcelc", // Aston Villa 2x1 Basel
    "7OyuxaSbhdo", // Nottingham Forest 2x1 Utrecht
    "aBWaHY4Wm7E", // Roma 3x0 Celtic
    "D2fxiEw9rI0", // Real Betis 3x1 Dinamo Zagreb
  ];

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

        <div className="hero-card hero-video">
          <div className="video-frame">
            <iframe
              title="Playlist APEX rodadas"
              src={`https://www.youtube.com/embed/${playlistIds[0]}?autoplay=1&mute=1&loop=1&playlist=${playlistIds.join(",")}&controls=1&modestbranding=1&rel=0&playsinline=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
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
              {bet.status && (
                <div className="status-row">
                  <span className={`status-pill ${bet.statusTone || "pending"}`}>
                    {bet.status}
                  </span>
                  {bet.score && <span className="status-score">{bet.score}</span>}
                </div>
              )}
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
