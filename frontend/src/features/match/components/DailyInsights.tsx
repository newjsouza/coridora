import React from "react";
import "./neoglass.css";

export default function DailyInsights() {
  const insights = [
    {
      id: 1,
      label: "🔥 Jogo quente do dia",
      desc: "Flamengo vem em forte tendência ofensiva.",
      badge: "Alta intensidade",
    },
    {
      id: 2,
      label: "🎯 Odd com valor",
      desc: "Mercado +2.5 gols acima da média nas casas.",
      badge: "Valor detectado",
    },
    {
      id: 3,
      label: "⚠️ Risco aumentado",
      desc: "Defesa do Botafogo instável nos últimos jogos.",
      badge: "Atenção",
    },
  ];

  return (
    <div className="neoGlassContainer">
      <h2 className="neoGlassTitle">APEX Daily Insights</h2>

      <div className="insightsRow">
        {insights.map((i) => (
          <div key={i.id} className="insightCard">
            <span className="insightLabel">{i.label}</span>
            <p className="insightDesc">{i.desc}</p>
            <span className="insightBadge">{i.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
