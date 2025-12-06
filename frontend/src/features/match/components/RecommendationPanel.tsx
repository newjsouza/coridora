import React from "react";
import { useAppStore } from "@store/useAppStore";
import StatusBadge from "./StatusBadge";
import { BetHighlight } from "@features/bets/BetHighlight";
import "@/features/bets/bets.css";

export default function RecommendationPanel() {
  const { selectedMatch, analysis, loading } = useAppStore();

  if (!selectedMatch) {
    return (
      <section className="analysis-panel">
        <div className="panel-header">
          <h2>Recomendação APEX-ML (modo mock)</h2>
        </div>
        <p className="empty">Selecione uma partida para ver a recomendação.</p>
      </section>
    );
  }

  return (
    <section className="analysis-panel">
      <div className="panel-header">
        <h2>Recomendação APEX-ML (modo mock)</h2>
      </div>

      <div className="match-summary">
        <div>
          <p className="match-summary-teams">
            {selectedMatch.home} <span>vs</span> {selectedMatch.away}
          </p>
          <p className="match-summary-time">
            {selectedMatch.date} · {selectedMatch.time}
          </p>
        </div>
        {analysis?.factCheck && <StatusBadge status={analysis.factCheck} />}
      </div>

      {loading && <p className="loading">Carregando análise...</p>}

      {!loading && analysis && (
        <div className="analysisGrid">
          {analysis.mainBet && (
            <BetHighlight
              title={analysis.mainBet.title}
              confidence={analysis.confidence}
              odds={{ fair: analysis.mainBet.fairOdd, market: analysis.mainBet.marketOdd }}
              reasoning={analysis.mainBet.reasoning}
            />
          )}

          <div className="confidence-row">
            <span>Confiança</span>
            <span className="confidence-value">{analysis.confidence}%</span>
          </div>
          <div className="confidence-bar">
            <div
              className="confidence-bar-fill"
              style={{ width: `${Math.min(100, Math.max(0, analysis.confidence))}%` }}
            />
          </div>

          <div className="analysis-block">
            <p className="recommendation-title">{analysis.recommendation}</p>
            <p className="analysis-text">{analysis.reasoning}</p>
          </div>

          {analysis.odds && (
            <div className="odds-panel">
              <div className="odds-row">
                <span>Odd justa estimada</span>
                <strong>{analysis.odds.fair.toFixed(2)}</strong>
              </div>
              <div className="odds-row">
                <span>Odd de mercado (referência)</span>
                <strong>{analysis.odds.market.toFixed(2)}</strong>
              </div>
              <p className="odds-hint">
                Quando a odd de mercado é maior que a odd justa, em teoria existe valor.
                Use isso como ponto de partida, não como garantia.
              </p>
            </div>
          )}
        </div>
      )}

      {!loading && !analysis && (
        <p className="empty">
          Ainda não há análise mock para esta partida. Em breve o motor APEX-ML preencherá tudo
          automaticamente.
        </p>
      )}
    </section>
  );
}
