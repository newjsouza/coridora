import React from "react";
import "./advanced.css";

export function TrendLineChart() {
  const points = [12, 25, 40, 38, 52, 70, 65, 82, 90];

  return (
    <div className="neoPanelAdv">
      <h2 className="neoTitle">Tendência de Probabilidade (mock)</h2>

      <svg height="160" width="100%" viewBox="0 0 320 100" className="lineChart">
        {points.map((p, i) => {
          if (i === 0) return null;
          return (
            <line
              key={i}
              x1={(i - 1) * 35}
              y1={100 - points[i - 1]}
              x2={i * 35}
              y2={100 - p}
              stroke="#00eaff"
              strokeWidth="3"
              className="chartLine"
            />
          );
        })}

        {points.map((p, i) => (
          <circle
            key={i}
            cx={i * 35}
            cy={100 - p}
            r="4"
            fill="#8affff"
            className="chartPoint"
          />
        ))}
      </svg>
    </div>
  );
}
