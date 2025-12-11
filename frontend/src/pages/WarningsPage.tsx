import React from "react";
import { AppHeader } from "../components/AppHeader";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

const warnings = [
  {
    title: "Stake máxima",
    desc: "Não ultrapassar 5% em apostas marcadas como risco alto.",
  },
  {
    title: "Gestão de banca",
    desc: "Evite somar mais de 30% de exposição simultânea em jogos do mesmo horário.",
  },
  {
    title: "Linha em movimento",
    desc: "Recalcule tickets caso o odd caia abaixo de 1.40 para proteger valor esperado.",
  },
];

export const WarningsPage: React.FC = () => (
  <div className="report-root">
    <AppHeader />
    <TopTabs active="avisos" />

    <main className="page">
      <div className="section-title">
        <span>Avisos e risco</span>
        <span className="section-subtitle">Regras rápidas antes de apostar</span>
      </div>

      <details className="details" open>
        <summary>
          Alertas ativos <span>3</span>
        </summary>
        <ul>
          {warnings.map((item) => (
            <li key={item.title} style={{ marginBottom: "6px" }}>
              <strong>{item.title}:</strong> {item.desc}
            </li>
          ))}
        </ul>
      </details>
    </main>
  </div>
);
