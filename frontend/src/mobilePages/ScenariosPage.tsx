import React from "react";
import "../styles/mobilePages.css";

export default function ScenariosPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mobilePage">
      <div className="mobilePageHeader">
        <button className="backBtn" onClick={onBack}>← Voltar</button>
        <h2>Cenários de Jogo</h2>
      </div>

      <div className="mobilePageContent">
        <p>Cenários prováveis da partida: jogo travado, aberto, pressão inicial, momentos críticos.</p>
      </div>
    </div>
  );
}
