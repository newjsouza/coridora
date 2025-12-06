import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function GameScenarios({ match }: Props) {
  if (!match) return null;

  const scenarios = [
    { title: "Cenário 1 — Jogo aberto", text: "Alta troca de ataques e tendência de gols." },
    { title: "Cenário 2 — Marcação forte", text: "Jogo tende a travar. Tendência de under." },
    { title: "Cenário 3 — Pressão emocional", text: "Possível aumento de cartões." },
  ];

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Cenários de jogo (APEX-ML)</h3>

      <div className="scenarioList">
        {scenarios.map((s, i) => (
          <div key={i} className="scenarioItem">
            <strong>{s.title}</strong>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
