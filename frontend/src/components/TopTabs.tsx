import React from "react";
import { useNavigate } from "react-router-dom";

type NavTarget = "home" | "apostas" | "tabelas" | "graficos" | "avisos";

type Tab = {
  key: NavTarget;
  label: string;
  icon: string;
  path: string;
};

const tabs: Tab[] = [
  { key: "home", label: "Destaque", icon: "⭐", path: "/" },
  { key: "apostas", label: "Apostas", icon: "⚽", path: "/apostas" },
  { key: "tabelas", label: "Tabelas", icon: "📊", path: "/tabelas" },
  { key: "graficos", label: "Gráficos", icon: "📈", path: "/graficos" },
  { key: "avisos", label: "Avisos", icon: "⚠️", path: "/avisos" },
];

export const TopTabs: React.FC<{ active: NavTarget }> = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="top-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`top-tab ${active === tab.key ? "active" : ""}`}
          onClick={() => navigate(tab.path)}
        >
          <span className="top-tab-icon" aria-hidden>
            {tab.icon}
          </span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
