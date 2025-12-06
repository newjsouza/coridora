import React, { useState } from "react";
import "./advanced.css";

export function BankSimulator() {
  const [bank, setBank] = useState(500);
  const [stake, setStake] = useState(50);
  const [result, setResult] = useState<null | "win" | "loss">(null);

  const newBank =
    result === "win" ? bank + stake * 0.8 : result === "loss" ? bank - stake : bank;

  return (
    <div className="neoPanelAdv">
      <h2 className="neoTitle">Simulador de Banca (mock)</h2>

      <div className="formRow">
        <label>Banca atual:</label>
        <input type="number" value={bank} onChange={(e) => setBank(Number(e.target.value))} />
      </div>

      <div className="formRow">
        <label>Stake usada:</label>
        <input type="number" value={stake} onChange={(e) => setStake(Number(e.target.value))} />
      </div>

      <div className="simButtons">
        <button onClick={() => setResult("win")} className="btnWin">
          Ganhei
        </button>
        <button onClick={() => setResult("loss")} className="btnLoss">
          Perdi
        </button>
      </div>

      {result && (
        <div className="stakeBox">
          <p>Nova banca estimada:</p>
          <strong>R$ {newBank.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}
