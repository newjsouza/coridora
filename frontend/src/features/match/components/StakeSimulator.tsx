import React, { useState } from "react";
import "./neoglass.css";

export default function StakeSimulator() {
  const [bank, setBank] = useState(1000);
  const [risk, setRisk] = useState(2);

  const stake = ((bank * risk) / 100).toFixed(2);

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Simulador de Stake (mock)</h3>

      <label>Banca atual (R$)</label>
      <input
        type="number"
        value={bank}
        onChange={(e) => setBank(Number(e.target.value))}
        className="neoInput"
      />

      <label>Nível de risco (%)</label>
      <input
        type="range"
        min="1"
        max="10"
        value={risk}
        onChange={(e) => setRisk(Number(e.target.value))}
      />

      <p className="stakeValue">
        Stake sugerida: <strong>R$ {stake}</strong>
      </p>
    </div>
  );
}
