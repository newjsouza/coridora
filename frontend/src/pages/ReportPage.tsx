import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCardsToday, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const videoGuardRef = useRef<HTMLDivElement | null>(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);

  useEffect(() => {
    const guard = videoGuardRef.current;
    if (!guard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setIsMiniPlayer(ratio < 0.4);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );

    observer.observe(guard);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="report-root">

      <TopTabs active="home" />

      <main className="page">
        <div className="section-title">
          <span>Relatório APEX Sports Analytics · 12/12/2025</span>
          <span className="section-subtitle">10 indicações · Bundesliga, Serie A, La Liga e mercados alternativos</span>
        </div>
        <div className="chip-row">
          <span className="chip green">Análise humana</span>
          <span className="chip green">10 indicações</span>
          <span className="chip green">Stake total 32%</span>
          <span className="chip orange">Confiança média 80.1%</span>
          <span className="chip green">Stop-loss 12%</span>
        </div>

        <div className="hero-video-wrapper">
          <div ref={videoGuardRef} className="hero-video-guard" aria-hidden />
          <div className={`hero-card hero-video ${isMiniPlayer ? "mini" : ""}`}>
            <div className="video-frame">
              <iframe
                title="Union Berlin vs RB Leipzig"
                src="https://www.youtube.com/embed/1n2v1Y7__-s?autoplay=1&mute=1&loop=1&playlist=1n2v1Y7__-s&controls=1&modestbranding=1&rel=0&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-header">
            <span className="status-pill pending">Não iniciado</span>
            <span className="hero-badge">Confiança 85%</span>
          </div>
          <div className="hero-main">
            <div className="hero-teams hero-teams-3d">
              Union Berlin vs RB Leipzig
              <br />
              <small>An der Alten Försterei · 16h30 BRT</small>
            </div>
            <div className="hero-odd">
              <span className="hero-odd-label">ODD</span>
              <span className="hero-odd-value">1.70 - 1.95</span>
            </div>
          </div>
          <div className="hero-meta">
            <span>Stake 4% banca</span>
            <span>Parlay: Leipzig + Over 2.5</span>
          </div>
          <div className="hero-progress">
            <div className="hero-progress-bar" style={{ width: "85%" }} />
          </div>
          <div className="hero-meta" style={{ marginTop: 6 }}>
            <span>Disparidade técnica + pressão por vice-liderança</span>
            <span>Stop-loss 12% · Kelly 0.25</span>
          </div>
        </div>

        <div className="section-title">
          <span>10 apostas do dia</span>
          <span className="section-subtitle">Bundesliga, Serie A, La Liga e mercados alternativos</span>
        </div>

        <div className="bets-carousel">
          {betCardsToday.map((bet) => (
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
            Sexta 12/12 tem grade curta; foco em Bundesliga, Serie A, La Liga e mercados alternativos (cartões, escanteios e goleadores).
            Seletividade máxima: 10 entradas, stake total 32% e confiança média 80.1%.
          </p>
          <ul>
            <li>Parlays técnicos: Leipzig + Over 2.5; Real Sociedad + Over 2.5.</li>
            <li>Mercados alternativos: cartões (Turquia), cantos (Bundesliga/Serie A), goleador (Raphinha).</li>
            <li>Conservadoras 7/10 com stake 3-5%; arrojadas 3/10 com stake 1-2.5%.</li>
            <li>Kelly 0.25 e stop-loss diário 12% mantidos.</li>
            <li>Escalações/árbitros monitorados 1h antes de cada jogo.</li>
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
