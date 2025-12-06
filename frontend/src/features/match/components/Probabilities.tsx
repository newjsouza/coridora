import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";
import { apexEngine } from "../engine/apexEngine";

interface Props {
  match: Match | null;
}

export default function Probabilities({ match }: Props) {
  if (!match) return null;

  const engine = apexEngine(match);
  const recommendedMarket = engine?.recommendedMarket ?? "Mercado neutro";

  const probs = {
    home: 57,
    draw: 23,
    away: 20,
    market: 72,
  };

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Probabilidades APEX-ML (mock)</h3>

      <div className="probRow">
        <span>Vitória mandante</span>
        <strong>{probs.home}%</strong>
      </div>
      <div className="probRow">
        <span>Empate</span>
        <strong>{probs.draw}%</strong>
      </div>
      <div className="probRow">
        <span>Vitória visitante</span>
        <strong>{probs.away}%</strong>
      </div>

      <hr className="probDivider" />

      <div className="probHighlighted">
        <span>Mercado sugerido (APEX-ML)</span>
        <strong>
          {probs.market}% — {recommendedMarket}
        </strong>
      </div>
    </div>
  );
}
