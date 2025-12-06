import React, { useState } from "react";
import "./advanced.css";

export function KellyCalculator() {
  const [bank, setBank] = useState(500);
  const [prob, setProb] = useState(0.55);
  const [odd, setOdd] = useState(1.8);

  const q = 1 - prob;
  const kelly = (prob * odd - q) / (odd - 1);
  const recommendedStake = Math.max(0, Number((kelly * bank).toFixed(2)));

  return (
    <div className="neoPanelAdv">
      <h2 className="neoTitle">Stake Inteligente (Fórmula de Kelly)</h2>

      <div className="formRow">
        <label>Banca:</label>
        <input type="number" value={bank} onChange={(e) => setBank(Number(e.target.value))} />
      </div>

      <div className="formRow">
        <label>Probabilidade (0-1):</label>
        <input type="number" step="0.01" value={prob} onChange={(e) => setProb(Number(e.target.value))} />
      </div>

      <div className="formRow">
        <label>Odd:</label>
        <input type="number" step="0.01" value={odd} onChange={(e) => setOdd(Number(e.target.value))} />
      </div>

      <div className="stakeBox">
        <p>Stake sugerida:</p>
        <strong>R$ {recommendedStake}</strong>
      </div>
    </div>
  );
}
