import React from "react";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

const bingoLink = "https://www.betano.bet.br/mybets/8904970985?bet_ids=7XqAfuAVY4U5xzUIte9etqI25tQIabSnhTsuz_ke858&btag=a_6321b_619c_";

export const BingoPage: React.FC = () => {
  return (
    <div className="report-root">
      <TopTabs active="bingo" />

      <main className="page">
        <div className="section-title">
          <span>Bingo • múltipla Betano</span>
          <span className="section-subtitle">Ticket visual + acesso rápido</span>
        </div>

        <div className="hero-card bingo-card">
          <img src="/bingo-2025-12-13.jpg" alt="Slip do bingo na Betano" className="bingo-image" />
        </div>

        <div className="bingo-link-card">
          <div>
            <div className="bingo-link-title">Link da aposta</div>
            <div className="bingo-link-sub">Acesso direto à múltipla</div>
          </div>
          <a className="bingo-link-btn" href={bingoLink} target="_blank" rel="noreferrer">
            Link da Aposta
          </a>
        </div>
      </main>
    </div>
  );
};
