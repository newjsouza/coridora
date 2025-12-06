import React from "react";
import "./bets.css";

interface BetHighlightProps {
  title: string;
  confidence: number; // 0 a 100
  odds: {
    fair: number;
    market: number;
  };
  reasoning: string;
  category?: string; // ex: "Gols", "Ambas Marcam", "Linha Asiática"
}

export function BetHighlight({
  title,
  confidence,
  odds,
  reasoning,
  category = "Mercado sugerido",
}: BetHighlightProps) {
  return (
    <div className="betHighlightPanel">
      <div className="betCategory">{category}</div>

      <h2 className="betTitle">{title}</h2>

      <div className="confBarWrapper">
        <div className="confBarFill" style={{ width: `${confidence}%` }}></div>
      </div>

      <div className="betConfidence">
        Confiança: <strong>{confidence}%</strong>
      </div>

      <p className="betReasoning">{reasoning}</p>

      <div className="oddsGrid">
        <div>
          <span>Odd justa:</span>
          <strong>{odds.fair.toFixed(2)}</strong>
        </div>
        <div>
          <span>Odd mercado:</span>
          <strong className="oddMarket">{odds.market.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
