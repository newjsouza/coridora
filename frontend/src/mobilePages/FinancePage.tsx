import React from "react";
import "../styles/mobilePages.css";

export default function FinancePage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>Financeiro</h2>
      </div>

      <div className="mobilePageContent">
        <p>Gestão de banca simulada, cálculo de stake ideal (versão mock), desempenho esperado.</p>
      </div>
    </div>
  );
}
