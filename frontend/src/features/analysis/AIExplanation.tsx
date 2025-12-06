import React from "react";
import "./analysis.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export function AIExplanation({ match }: Props) {
  if (!match) return null;

  return (
    <div className="neoPanelFlow">
      <h2 className="neoTitle">Como a IA pensou</h2>

      <p className="aiText">A recomendação foi gerada considerando:</p>

      <ul className="aiList">
        <li>⚽ Força ofensiva e defensiva dos últimos 5 jogos.</li>
        <li>📊 Volatilidade do confronto e estilo tático das equipes.</li>
        <li>🔥 Intensidade e moral atual da equipe mandante.</li>
        <li>🧠 Padrões probabilísticos do modelo APEX-ML.</li>
        <li>💹 Odd justa × valor oferecido pela casa.</li>
      </ul>

      <p className="aiConclusion">
        Resultado: seleção do mercado com o melhor equilíbrio entre segurança e retorno.
      </p>
    </div>
  );
}
