import React from "react";
import "./factcheck.css";
import { FactCheckBadge } from "./FactCheckBadge";

interface FactCheckPanelProps {
  matchId?: string;
}

export function FactCheckPanel({ matchId = "001" }: FactCheckPanelProps) {
  // Mock simples – em versão futura isso virá do backend de fact-check.
  const summary = {
    sources: ["SofaScore", "ESPN", "Flashscore", "Transfermarkt"],
    inconsistencies: 0,
    lastUpdate: "Atualizado há poucos minutos",
    confidence: 97,
  };

  return (
    <div className="factPanel">
      <h2 className="factTitle">Fact-Checking APEX-ML</h2>
      <FactCheckBadge status={summary.inconsistencies === 0 ? "ok" : "warning"} />

      <div className="factGrid">
        <div>
          <span>Partida ID</span>
          <strong>{matchId}</strong>
        </div>
        <div>
          <span>Fontes consultadas</span>
          <strong>{summary.sources.length}</strong>
        </div>
        <div>
          <span>Inconsistências</span>
          <strong>{summary.inconsistencies}</strong>
        </div>
        <div>
          <span>Confiabilidade</span>
          <strong>{summary.confidence}%</strong>
        </div>
      </div>

      <p className="factHint">
        Este painel mostra se os dados usados na análise passaram pela rotina de
        verificação do APEX-ML. Em versões futuras, discrepâncias específicas serão
        listadas aqui (jogadores, clubes, odds, transferências etc.).
      </p>
    </div>
  );
}
