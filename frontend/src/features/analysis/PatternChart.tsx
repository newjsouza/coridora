import React from "react";
import "./analysis.css";

export function PatternChart() {
  const values = [30, 45, 55, 70, 60, 80, 75];

  return (
    <div className="neoPanelFlow">
      <h2 className="neoTitle">Padrões de Tendência (mock)</h2>

      <div className="chartContainer">
        {values.map((v, i) => (
          <div
            key={i}
            className="chartBar"
            style={{ height: `${v}%`, animationDelay: `${i * 0.12}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
