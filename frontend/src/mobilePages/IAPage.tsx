import React from "react";
import "../styles/mobilePages.css";

export default function IAPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>IA Explicada</h2>
      </div>

      <div className="mobilePageContent">
        <p>Explicação clara de como a IA chegou nas recomendações. “Passo a passo visual”.</p>
      </div>
    </div>
  );
}
