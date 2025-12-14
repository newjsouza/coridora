import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReportPage.css";
import { TopTabs } from "../components/TopTabs";
import { betCardsToday, tableRows } from "./sharedData";

export const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const videoGuardRef = useRef<HTMLDivElement | null>(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const featuredBet = betCardsToday.find((bet) => bet.slug === "bayern-mainz-combo");
  const featuredConfidenceValue = featuredBet ? parseFloat(featuredBet.confidence) : NaN;
  const featuredProgress = Number.isFinite(featuredConfidenceValue) ? Math.min(100, featuredConfidenceValue) : 76;

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
          <span>Relatório APEX Sports Analytics · 14/12/2025</span>
          <span className="section-subtitle">Rodada especial · 8 picks aprovadas · Europa + Brasil</span>
        </div>
        <div className="chip-row">
          <span className="chip green">APEX v2.0</span>
          <span className="chip green">15 jogos analisados</span>
          <span className="chip green">8 apostas aprovadas</span>
          <span className="chip green">Stake total 20.5%</span>
          <span className="chip orange">Confiança média 72.1%</span>
          <span className="chip green">Stop-loss 12% · filtro &lt;46 anomalia</span>
        </div>

        <div className="hero-video-wrapper">
          <div ref={videoGuardRef} className="hero-video-guard" aria-hidden />
          <div className={`hero-card hero-video ${isMiniPlayer ? "mini" : ""}`}>
            <div className="video-frame">
              <iframe
                title="GE TV - Flamengo 2x0 Pyramids"
                src="https://www.youtube.com/embed/DMH6SNNMfMQ?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&playlist=DMH6SNNMfMQ,3Yz2bydfBns,Z-Lt2HCe0Wo&loop=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="section-title">
          <span>Destaque</span>
          <span className="section-subtitle">Bayern x Mainz · Vitória + Over 2.5 (High Confidence)</span>
        </div>

        {featuredBet && (
          <div className="hero-card">
            <div className="hero-header">
              <span className={`status-pill ${featuredBet.statusTone || "pending"}`}>
                {featuredBet.status || "Não iniciado"}
              </span>
              <span className="hero-badge">{featuredBet.confidence} · {featuredBet.stake}</span>
            </div>
            <div className="hero-main">
              <div className="hero-teams hero-teams-3d">
                {featuredBet.match}
                <br />
                <small>{featuredBet.market} · {featuredBet.meta}</small>
              </div>
              <div className="hero-odd">
                <span className="hero-odd-label">ODD</span>
                <span className="hero-odd-value">{featuredBet.odd}</span>
              </div>
            </div>
            <div className="hero-meta">
              <span>Mercado: {featuredBet.market}</span>
              <span>Stop-loss 12% · anomalia &lt; 46</span>
            </div>
            <div className="hero-progress">
              <div className="hero-progress-bar" style={{ width: `${featuredProgress}%` }} />
            </div>
            <div className="hero-meta" style={{ marginTop: 6 }}>
              <span>Stake máxima {featuredBet.stake} · proteção on</span>
              <span>Filtro APEX v2.0 · sem picks &gt; 80%</span>
            </div>
            <div className="bet-footer">
              <span>Aposta central do dia</span>
              <button className="btn-bet" onClick={() => navigate(`/aposta/${featuredBet.slug}`)}>
                VER DETALHES
              </button>
            </div>
          </div>
        )}

        <div className="section-title">
          <span>8 apostas do dia</span>
          <span className="section-subtitle">Bundesliga, Premier League, La Liga, Serie A e Copa do Brasil</span>
        </div>

        <div className="bets-list">
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
            Domingo 14/12 com 15 confrontos avaliados e 8 apostas aprovadas (todas &gt; 60% confiança). Stake total 20.5% (limite 21%), confiança média 72.1%, stop-loss ativo em 12% e filtro de proteção mantém anomalia &lt; 46 e nenhuma pick acima de 80% de confiança.
          </p>
          <ul>
            <li>8 picks aprovadas: Bayern + Over 2.5; Sunderland x Newcastle BTTS; Lyon ML; Madrid ML + faltas Alavés; Brentford ML; Villarreal ML; Napoli ML; Under 2.5 Corinthians x Cruzeiro.</li>
            <li>Stake máxima 3.5% no Bayern + Over 2.5 (85.6% confiança); demais entre 2% e 3% conforme risco.</li>
            <li>Proteções: stop-loss 12%, sem upgrades de confiança &gt; 80%, filtro de anomalia &lt; 46, Kelly 0.25.</li>
            <li>Contexto chave: 15 jogos avaliados, destaque Bayern histórico, derbys com BTTS alto e mata-mata Copa do Brasil fechado.</li>
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
