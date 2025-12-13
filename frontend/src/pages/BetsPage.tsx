import React from "react";
import { useNavigate } from "react-router-dom";
import { TopTabs } from "../components/TopTabs";
import { betCardsToday, betCardsYesterday } from "./sharedData";
import "./ReportPage.css";

export const BetsPage: React.FC = () => {
  const navigate = useNavigate();
  const hasYesterday = betCardsYesterday.length > 0;

  return (
    <div className="report-root">
      <TopTabs active="apostas" />

      <main className="page">
        <div className="section-title heading-strong">
          <span>Apostas de hoje</span>
          <span className="section-subtitle">Sábado · 13/12/2025 · APEX v2.0</span>
        </div>

        <div className="bets-list">
          {betCardsToday.map((bet) => (
            <div className="bet-card" key={bet.match}>
              <div className="bet-header">
                <span className="bet-badge">{bet.badge}</span>
                <span className="bet-type">{bet.type}</span>
              </div>
              <div className="bet-match">{bet.match}</div>
              <div className="bet-market">{bet.market}</div>
              {bet.status && (
                <div className="status-row">
                  <span className={`status-pill ${bet.statusTone || "pending"}`}>
                    {bet.status}
                  </span>
                  {bet.score && <span className="status-score">{bet.score}</span>}
                </div>
              )}
              <div className="bet-odd-row">
                <div>
                  <div className="bet-odd">{bet.odd}</div>
                  <div className="bet-market">{bet.meta}</div>
                </div>
                <div className="bet-badges-row">
                  <span className="tag-risk">{bet.confidence}</span>
                  <span className={`tag-risk ${bet.riskTone === "red" ? "red" : ""}`}>
                    {bet.risk}
                  </span>
                  <span className="tag-stake">{bet.stake}</span>
                </div>
              </div>
              <div className="bet-footer">
                <span>Proteção on</span>
                <button className="btn-bet" onClick={() => navigate(`/aposta/${bet.slug}`)}>
                  MAIS DETALHES
                </button>
              </div>
            </div>
          ))}
        </div>

        {hasYesterday && (
          <>
            <div className="section-title heading-strong" style={{ marginTop: 16 }}>
              <span>Apostas anteriores</span>
              <span className="section-subtitle">Referência rápida</span>
            </div>

            <div className="bets-list">
              {betCardsYesterday.map((bet) => (
                <div className="bet-card" key={bet.match}>
                  <div className="bet-header">
                    <span className="bet-badge">{bet.badge}</span>
                    <span className="bet-type">{bet.type}</span>
                  </div>
                  <div className="bet-match">{bet.match}</div>
                  <div className="bet-market">{bet.market}</div>
                  {bet.status && (
                    <div className="status-row">
                      <span className={`status-pill ${bet.statusTone || "pending"}`}>
                        {bet.status}
                      </span>
                      {bet.score && <span className="status-score">{bet.score}</span>}
                    </div>
                  )}
                  <div className="bet-odd-row">
                    <div>
                      <div className="bet-odd">{bet.odd}</div>
                      <div className="bet-market">{bet.meta}</div>
                    </div>
                    <div className="bet-badges-row">
                      <span className="tag-risk">{bet.confidence}</span>
                      <span className={`tag-risk ${bet.riskTone === "red" ? "red" : ""}`}>
                        {bet.risk}
                      </span>
                      <span className="tag-stake">{bet.stake}</span>
                    </div>
                  </div>
                  <div className="bet-footer">
                    <span>Proteção on</span>
                    <button className="btn-bet" onClick={() => navigate(`/aposta/${bet.slug}`)}>
                      MAIS DETALHES
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
