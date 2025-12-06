import React from "react";
import "../styles/mobilePages.css";

export default function AnalysisPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>Análise</h2>
      </div>

      <div className="mobilePageContent">
        <p>Aqui entram análises táticas da IA, fatores de risco, matchups, histórico e peso estatístico.</p>
      </div>
    </div>
  );
}
