import React from "react";
import "../styles/mobilePages.css";

export default function InsightsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>Insights</h2>
      </div>

      <div className="mobilePageContent">
        <p>Aqui entram insights detalhados do confronto, tendências, padrão de gols, ritmo de jogo, scouts analisados, etc.</p>
      </div>
    </div>
  );
}
