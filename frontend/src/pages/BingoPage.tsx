import React from "react";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

const bingoLink = "https://br.betano.com/";

const analyses: { title: string; text: string }[] = [
  {
    title: "Union Berlin x RB Leipzig",
    text: "Mais de 1.5 gols (1.25–1.45). Bundesliga tem média alta e Leipzig joga para frente.",
  },
  {
    title: "Angers x Nantes",
    text: "Under 3.5 gols (1.30–1.60). Ligue 1 média baixa, confronto tende a ser travado.",
  },
  {
    title: "Lecce x Pisa",
    text: "Dupla chance 1X (1.30–1.60). Lecce sólido em casa; Pisa não domina fora.",
  },
  {
    title: "West Brom x Sheffield United",
    text: "Mais de 0.5 gol no 2º tempo (1.30–1.60). Championship costuma decidir na reta final.",
  },
  {
    title: "Dynamo Dresden x Eintracht Braunschweig",
    text: "Dupla chance Dresden ou empate (1X <1.80). Proteção com mandante forte.",
  },
  {
    title: "Cluj x Csikszereda",
    text: "Cluj vence ou empate anula (1.25–1.70). Favoritismo claro em casa.",
  },
  {
    title: "Coleraine x Bangor",
    text: "Coleraine vence ou 1X (<1.80). Mandante amplo favorito na Irlanda do Norte.",
  },
  {
    title: "TOP Oss x Den Haag",
    text: "Den Haag empate anula / X2 (<1.80). Time visitante muito superior, com proteção.",
  },
  {
    title: "Pau x Amiens",
    text: "Pau empate anula / 1X (<1.80). Pau vem forte em casa na Ligue 2.",
  },
];

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
          <img src="/bingo-slip.svg" alt="Slip do bingo na Betano" className="bingo-image" />
        </div>

        <div className="bingo-link-card">
          <div>
            <div className="bingo-link-title">Abrir o bingo na Betano</div>
            <div className="bingo-link-sub">Link direto para montar a múltipla</div>
          </div>
          <a className="bingo-link-btn" href={bingoLink} target="_blank" rel="noreferrer">
            Abrir Betano
          </a>
        </div>

        <div className="bingo-analyses">
          {analyses.map((item) => (
            <div key={item.title} className="bingo-line">
              <div className="bingo-line-title">{item.title}</div>
              <div className="bingo-line-text">{item.text}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
