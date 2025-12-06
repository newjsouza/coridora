import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function MiniSummary({ match }: Props) {
  if (!match) return null;

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Informações do confronto</h3>

      <div className="miniSummary">
        <div>
          <span>Data</span>
          <strong>{match.date}</strong>
        </div>
        <div>
          <span>Horário</span>
          <strong>{match.time}</strong>
        </div>
        <div>
          <span>Casa</span>
          <strong>{match.home}</strong>
        </div>
        <div>
          <span>Fora</span>
          <strong>{match.away}</strong>
        </div>
      </div>
    </div>
  );
}
