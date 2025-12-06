import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBox.css";

export const NavBox: React.FC = () => {
  const nav = useNavigate();

  const items = [
    { label: "Insights", path: "/insights" },
    { label: "Análise Geral", path: "/analise" },
    { label: "Gráficos", path: "/graficos" },
    { label: "IA Explicada", path: "/ia" },
    { label: "Financeiro", path: "/financeiro" },
    { label: "Cenários", path: "/cenarios" },
  ];

  return (
    <div className="navbox">
      <h3 className="navbox-title">Explorar análise completa</h3>
      <div className="navbox-grid">
        {items.map((i) => (
          <button key={i.path} className="navbox-btn" onClick={() => nav(i.path)}>
            {i.label}
          </button>
        ))}
      </div>
    </div>
  );
};
