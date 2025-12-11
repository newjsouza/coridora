import React from "react";
import { AppHeader } from "../components/AppHeader";
import { TopTabs } from "../components/TopTabs";
import { tableRows } from "./sharedData";
import "./ReportPage.css";

export const TablePage: React.FC = () => (
  <div className="report-root">
    <AppHeader />
    <TopTabs active="tabelas" />

    <main className="page">
      <div className="section-title">
        <span>Tabela de indicações</span>
        <span className="section-subtitle">Odds, confiança e stake</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Palpite</th>
              <th>Odd</th>
              <th>Confiança</th>
              <th>Stake</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.pick}</td>
                <td>{row.odd}</td>
                <td>
                  <span className={`pill-status ${row.confidence === "82%" ? "red" : ""}`}>
                    {row.confidence}
                  </span>
                </td>
                <td>{row.stake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  </div>
);
