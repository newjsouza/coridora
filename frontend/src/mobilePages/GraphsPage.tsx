import React from "react";
import "../styles/mobilePages.css";

export default function GraphsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>Gráficos</h2>
      </div>

      <div className="mobilePageContent">
        <p>Gráficos de probabilidade, evolução de desempenho, padrões ofensivos, heatmaps e métricas.</p>
      </div>
    </div>
  );
}
