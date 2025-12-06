import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function MatchKPI({ match }: Props) {
  if (!match) return null;

  const kpis = [
    { label: "Intensidade do Jogo", value: "Alta", color: "#00eaff" },
    { label: "Risco do Confronto", value: "Médio", color: "#00ff99" },
    { label: "Volatilidade", value: "Moderada", color: "#b588ff" },
    { label: "Tensão Emocional", value: "Elevada", color: "#ff8b8b" },
  ];

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Resumo rápido APEX-ML</h3>

      <div className="kpiGrid">
        {kpis.map((k, i) => (
          <div key={i} className="kpiBox" style={{ borderColor: k.color }}>
            <span>{k.label}</span>
            <strong style={{ color: k.color }}>{k.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
