import React from "react";
import "./tactical.css";

export function TacticalHeatmap() {
  // Mock simples: matriz 3x5 representando regiões do campo
  const cells = [
    "Pressão alta (direita)",
    "Pressão alta (centro)",
    "Pressão alta (esquerda)",
    "Zona de criação",
    "Ataques pelo lado direito",
    "Ataques pelo meio",
    "Ataques pelo lado esquerdo",
    "Zona de perigo defensivo",
    "Bolas paradas ofensivas",
    "Transições rápidas",
  ];

  return (
    <div className="tacticalPanel">
      <h2 className="tacticalTitle">Heatmap tático (modo mock)</h2>
      <p className="tacticalSubtitle">
        Distribuição aproximada da pressão e criação de jogadas em campo.
      </p>

      <div className="tacticalGrid">
        {cells.map((label, index) => (
          <div key={index} className={`tacticalCell cell-${index}`}>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
