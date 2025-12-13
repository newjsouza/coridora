import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCardsToday, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const videoGuardRef = useRef<HTMLDivElement | null>(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const featuredBet = betCardsToday.find((bet) => bet.slug === "flamengo-pyramids-qualifica");

  useEffect(() => {
    const guard = videoGuardRef.current;
    if (!guard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setIsMiniPlayer(ratio < 0.9);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    observer.observe(guard);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="report-root">

      <TopTabs active="home" />

      <main className="page">
        <div className="section-title">
          <span>Relatório APEX Sports Analytics · 13/12/2025</span>
          <span className="section-subtitle">5 apostas aprovadas · Intercontinental, Premier League, Serie A e Portugal</span>
        </div>
        <div className="chip-row">
          <span className="chip green">APEX v2.0</span>
          <span className="chip green">5 apostas aprovadas</span>
          <span className="chip green">Stake total 14%</span>
          <span className="chip orange">Confiança média 73.8%</span>
          <span className="chip green">Stop-loss 12%</span>
          <span className="chip green">Taxa sucesso estimada 72%</span>
        </div>

        <div className="hero-video-wrapper">
          <div ref={videoGuardRef} className="hero-video-guard" aria-hidden />
          <div className={`hero-card hero-video ${isMiniPlayer ? "mini" : ""}`}>
            <div className="video-frame">
              <iframe
                title="Destaque Flamengo vs Pyramids"
                src="https://www.youtube.com/embed/1n2v1Y7__-s?autoplay=1&mute=1&loop=1&playlist=1n2v1Y7__-s&controls=1&modestbranding=1&rel=0&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="section-title">
          <span>Destaque</span>
          <span className="section-subtitle">Flamengo qualifica vs Pyramids · Copa Intercontinental</span>
        </div>

        {featuredBet && (
          <div className="hero-card">
            <div className="hero-header">
              <span className="status-pill pending">{featuredBet.status || "Não iniciado"}</span>
              <span className="hero-badge">Confiança 76% · Stake 3.5%</span>
            </div>
            <div className="hero-main">
              <div className="hero-teams hero-teams-3d">
                Flamengo vs Pyramids
                <br />
                <small>Qualificação · 14h · Ahmad Bin Ali</small>
              </div>
              <div className="hero-odd">
                <span className="hero-odd-label">ODD</span>
                <span className="hero-odd-value">1.45 - 1.65</span>
              </div>
            </div>
            <div className="hero-meta">
              <span>Mercado: Flamengo qualifica</span>
              <span>Índice anomalia 41 · EV 1.6+</span>
            </div>
            <div className="hero-progress">
              <div className="hero-progress-bar" style={{ width: "76%" }} />
            </div>
            <div className="hero-meta" style={{ marginTop: 6 }}>
              <span>Stake máxima 3.5% · proteção on</span>
              <span>Filtro APEX v2.0 sem overconfidence</span>
            </div>
            <div className="bet-footer">
              <span>Jogo destaque do dia</span>
              <button className="btn-bet" onClick={() => navigate(`/aposta/${featuredBet.slug}`)}>
                VER DETALHES
              </button>
            </div>
          </div>
        )}

        <div className="section-title">
          <span>5 apostas do dia</span>
          <span className="section-subtitle">Intercontinental, Premier League, Serie A e Primeira Liga</span>
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
            Resumo executivo <span>APEX v2.0</span>
          </summary>
          <p>
            Sábado 13/12 com 5 apostas aprovadas, stake total 14%, confiança média 73.8% e taxa de sucesso estimada 72%. Nenhuma confiança acima de 80% e stake máxima 3.5% por entrada; Flamengo qualifica é o jogo destaque.
          </p>
          <ul>
            <li>Filtro APEX v2.0: zero apostas &gt; 80% confiança, stake máx 3.5%, rejeição de clean sheets, anomalia &lt; 46, ajustes de volatilidade.</li>
            <li>Stake total 14% com stop-loss 12% e Kelly 0.25; Flamengo qualifica leva o máximo (3.5%).</li>
            <li>Mercados aprovados: Flamengo qualifica; Liverpool ML; Atalanta Over 2.5; Chelsea BTTS; Porto gol 1º tempo.</li>
            <li>EV médio 1.23; escalações confirmadas via FlashScore 1h antes; principais desfalques já precificados.</li>
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
