import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TopTabs } from "../components/TopTabs";
import { betDetails } from "./sharedData";
import "./ReportPage.css";

export const BetDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const detail = slug ? betDetails[slug] : undefined;

  if (!detail) {
    return (
      <div className="report-root">
        <TopTabs active="apostas" />
        <main className="page">
          <div className="section-title">
            <span>Aposta não encontrada</span>
            <span className="section-subtitle">Verifique se o link está correto</span>
          </div>
          <button className="btn-bet" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="report-root">
      <TopTabs active="apostas" />

      <main className="page">
        <div className="section-title">
          <span>{detail.match}</span>
          <span className="section-subtitle">{detail.market}</span>
        </div>

        <div className="hero-card">
          <div className="hero-header">
            <span className="hero-label">{detail.type}</span>
            {detail.status && (
              <span
                className={`status-pill ${detail.status.includes("✅") ? "win" : detail.status.includes("❌") ? "loss" : "pending"}`}
              >
                {detail.status}
              </span>
            )}
            <span className="hero-badge">Confiança {detail.confidence}</span>
          </div>
          <div className="hero-main">
            <div className="hero-teams">
              {detail.title}
              <br />
              <small>{detail.location}</small>
            </div>
            <div className="hero-odd">
              <span className="hero-odd-label">ODD</span>
              <span className="hero-odd-value">{detail.odd}</span>
            </div>
          </div>
          <div className="hero-meta">
            <span>Stake {detail.stake}</span>
            <span>Risco {detail.risk}</span>
          </div>
          <div className="hero-meta" style={{ marginTop: 6 }}>
            <span>Horário: {detail.time}</span>
            <span>Mercado: {detail.market}</span>
          </div>
        </div>

        {detail.finalScore && (
          <div className="detail-block">
            <div className="section-title">
              <span>Status e resultado</span>
              <span className="section-subtitle">Jogo encerrado</span>
            </div>
            <p className="detail-text">{detail.finalScore}</p>
          </div>
        )}

        <div className="detail-block">
          <div className="section-title">
            <span>Resumo</span>
            <span className="section-subtitle">Contexto principal</span>
          </div>
          <p className="detail-text">{detail.summary}</p>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Pontos-chave</span>
            <span className="section-subtitle">Por que o mercado tem valor</span>
          </div>
          <ul className="detail-list">
            {detail.keyPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Checklist</span>
            <span className="section-subtitle">Validação pré-aposta</span>
          </div>
          <ul className="detail-list">
            {detail.validation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {detail.outcomeNotes && detail.outcomeNotes.length > 0 && (
          <div className="detail-block">
            <div className="section-title">
              <span>Pós-jogo</span>
              <span className="section-subtitle">Análise do resultado</span>
            </div>
            <ul className="detail-list">
              {detail.outcomeNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-cta">
          <button className="btn-bet" onClick={() => navigate(-1)}>
            Voltar para as apostas
          </button>
        </div>
      </main>
    </div>
  );
};
