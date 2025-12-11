import React from "react";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

export const ChartsPage: React.FC = () => (
  <div className="report-root">
    <TopTabs active="graficos" />

    <main className="page">
      <div className="section-title">
        <span>Gráficos e acompanhamento</span>
        <span className="section-subtitle">Performance consolidada</span>
      </div>

      <div className="hero-card">
        <div className="hero-header">
          <span className="hero-label">Rentabilidade</span>
          <span className="hero-badge">Últimos 7 dias</span>
        </div>
        <div className="hero-main">
          <div className="hero-teams">
            ROI acumulado
            <br />
            <small>Stake média 3%</small>
          </div>
          <div className="hero-odd">
            <span className="hero-odd-label">ROI</span>
            <span className="hero-odd-value">+12,4%</span>
          </div>
        </div>
        <div className="hero-meta">
          <span>Drawdown máximo: 3,1%</span>
          <span>Apostas ativas: 6</span>
        </div>
        <div className="hero-progress">
          <div className="hero-progress-bar" style={{ width: "70%" }} />
        </div>
      </div>

      <details className="details" open>
        <summary>
          Próximos gráficos <span>Roadmap</span>
        </summary>
        <ul>
          <li>Evolução de banca diária</li>
          <li>Acerto por liga e mercado</li>
          <li>Distribuição de odds (histograma)</li>
          <li>Equilíbrio de stake por perfil (conservador x arrojado)</li>
        </ul>
      </details>
    </main>
  </div>
);
