import React from "react";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

const warnings = [
  {
    title: "Stake e Kelly",
    desc: "Conservadoras 3-5%, arrojadas 1-2%; Kelly 0.25 aplicado e stake total do dia 31.5%.",
  },
  {
    title: "Stop-loss diário",
    desc: "Suspender operações ao atingir 12% de perda da banca do dia.",
  },
  {
    title: "Escalações e anti-chase",
    desc: "Confirmar lineups 1h antes (Betano/FlashScore); nada de perseguir perdas ou apostar sob influência.",
  },
  {
    title: "Mercados de apoio",
    desc: "Monitorar variação de odds em gols, escanteios e cartões; recalcular se odds caírem abaixo do intervalo sugerido.",
  },
];

export const WarningsPage: React.FC = () => (
  <div className="report-root">
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
