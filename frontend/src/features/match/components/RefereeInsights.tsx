import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function RefereeInsights({ match }: Props) {
  if (!match) return null;

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Árbitro (mock)</h3>

      <div className="refGrid">
        <div className="refBox">
          <span>Média de cartões</span>
          <strong>5.4</strong>
        </div>
        <div className="refBox">
          <span>Média de faltas</span>
          <strong>28</strong>
        </div>
        <div className="refBox">
          <span>Rigor disciplinar</span>
          <strong>Alto</strong>
        </div>
        <div className="refBox">
          <span>Tendência</span>
          <strong>Cartões acima da média</strong>
        </div>
      </div>
    </div>
  );
}
