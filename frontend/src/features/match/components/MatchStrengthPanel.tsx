import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function MatchStrengthPanel({ match }: Props) {
  if (!match) return null;

  const strengths = [
    { label: "Ataque", home: 82, away: 74 },
    { label: "Defesa", home: 63, away: 70 },
    { label: "Forma recente", home: 76, away: 68 },
    { label: "Pressão psicológica", home: 88, away: 60 },
    { label: "Estilo ofensivo", home: 80, away: 66 },
    { label: "Histórico do confronto", home: 58, away: 52 },
  ];

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Forças do Confronto</h3>

      <div className="strengthGrid">
        {strengths.map((s, idx) => (
          <div key={idx} className="strengthRow">
            <span className="strengthLabel">{s.label}</span>

            <div className="barContainer">
              <div className="barHome" style={{ width: `${s.home}%` }}></div>
              <div className="barAway" style={{ width: `${s.away}%` }}></div>
            </div>

            <div className="strengthValues">
              <span>{s.home}%</span>
              <span>{s.away}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
