import React from "react";
import "./analysis.css";

export function AnalysisFlow() {
  const steps = [
    { title: "Coleta de Dados", desc: "Busca estatísticas atualizadas das equipes, forma, elenco e árbitro." },
    { title: "Modelos Probabilísticos", desc: "Simula cenários usando modelos ofensivos, defensivos e ajustes de volatilidade." },
    { title: "Padrões da Partida", desc: "Identifica tendências de gols, posse, finalizações e comportamento tático recente." },
    { title: "Cálculo da Odd Justa", desc: "Estima a probabilidade real e compara com a odd oferecida pela casa." },
    { title: "Recomendação Final", desc: "Seleciona o mercado mais seguro e com melhor retorno esperado." },
  ];

  return (
    <div className="neoPanelFlow">
      <h2 className="neoTitle">Fluxo de Análise APEX-ML</h2>
      <div className="flowSteps">
        {steps.map((s, i) => (
          <div className="flowCard" key={i}>
            <span className="flowIndex">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
