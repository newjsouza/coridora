import React from "react";
import { TopTabs } from "../components/TopTabs";
import "./ReportPage.css";

type Row = (string | number)[];

type HistoryTable = {
  title: string;
  columns: string[];
  rows: Row[];
};

const championsGroup1: HistoryTable = {
  title: "Champions League · Grupo 1 · Moneyline",
  columns: ["#", "Data", "Time A", "Time B", "Tipo", "Odd", "Stake", "Confiança", "Status"],
  rows: [
    [1, "11/12", "Inter de Milão", "Liverpool", "Conservadora", "1.85-2.10", "4%", "87%", "✅"],
    [6, "11/12", "Bayern", "Sporting", "Conservadora", "1.45-1.65", "5%", "89%", "✅"],
    [3, "11/12", "Atalanta", "Chelsea", "Arrojada", "2.40-2.70", "2%", "76%", "🔴"],
    [11, "12/12", "PSG", "Borussia Dortmund", "Conservadora", "1.75-1.95", "4%", "85%", "🔴"],
    [13, "12/12", "Real Madrid", "Manchester City", "Conservadora", "1.90-2.15", "4.5%", "88%", "🔴"],
    [14, "12/12", "Juventus", "VfB Stuttgart", "Arrojada", "2.30-2.70", "2%", "75%", "🔴"],
    [15, "12/12", "Bayern", "PSV Eindhoven", "Conservadora", "1.55-1.75", "3.5%", "81%", "🔴"],
    [18, "12/12", "Atlético Madrid", "Inter", "Conservadora", "1.80-2.05", "3.5%", "82%", "🔴"],
  ],
};

const championsGroup2: HistoryTable = {
  title: "Champions League · Grupo 2 · Over/Under Gols",
  columns: ["#", "Data", "Time A", "Time B", "Mercado", "Odd", "Stake", "Confiança", "Status"],
  rows: [
    [2, "11/12", "Barcelona", "Eintracht Frankfurt", "Over 2.5 Gols", "1.70-1.90", "3.5%", "82%", "✅"],
    [10, "11/12", "Inter", "Liverpool", "Over 2.5 Gols (Parlay)", "2.85-3.35", "2%", "78%", "🔴"],
    [12, "12/12", "Arsenal", "Shakhtar Donetsk", "Over 2.5 Gols", "1.60-1.80", "3.5%", "83%", "🔴"],
    [19, "12/12", "Napoli", "Eintracht Frankfurt", "Over 2.5 Gols (Parlay)", "2.10-2.50", "2%", "74%", "🔴"],
  ],
};

const championsGroup3: HistoryTable = {
  title: "Champions League · Grupo 3 · Mercados Específicos",
  columns: ["#", "Data", "Time A", "Time B", "Mercado", "Odd", "Stake", "Confiança", "Status"],
  rows: [
    [5, "11/12", "Monaco", "Galatasaray", "Over 4.5 Cartões", "1.75-1.95", "3.5%", "79%", "✅"],
    [8, "11/12", "Kairat Almaty", "Olympiacos", "Over 9.5 Escanteios", "1.85-2.05", "3.5%", "77%", "✅"],
    [16, "12/12", "Liverpool", "AS Roma", "Over 3.5 Cartões", "1.70-1.90", "3%", "80%", "🔴"],
    [18, "12/12", "Atlético Madrid", "Inter", "Ambos Marcam", "1.80-2.05", "3.5%", "82%", "🔴"],
    [20, "12/12", "Benfica", "AEK Atenas", "Under 4.5 Escanteios (1T)", "1.65-1.85", "3%", "79%", "🔴"],
  ],
};

const leagueBlocks: HistoryTable[] = [
  championsGroup1,
  championsGroup2,
  championsGroup3,
  {
    title: "Premier League",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [4, "11/12", "Tottenham", "Slavia Praga", "Conservadora", "Win + Under 10.5", "2.15-2.45", "3%", "84%", "✅"],
      [12, "12/12", "Arsenal", "Shakhtar Donetsk", "Conservadora", "Over 2.5 Gols", "1.60-1.80", "3.5%", "83%", "🔴"],
    ],
  },
  {
    title: "La Liga",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[13, "12/12", "Real Madrid", "Manchester City", "Conservadora", "Vitória", "1.90-2.15", "4.5%", "88%", "🔴"]],
  },
  {
    title: "Serie A",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [1, "11/12", "Inter de Milão", "Liverpool", "Conservadora", "Vitória", "1.85-2.10", "4%", "87%", "✅"],
      [18, "12/12", "Atlético Madrid", "Inter", "Conservadora", "Ambos Marcam", "1.80-2.05", "3.5%", "82%", "🔴"],
    ],
  },
  {
    title: "Ligue 1",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[11, "12/12", "PSG", "Borussia Dortmund", "Conservadora", "Vitória", "1.75-1.95", "4%", "85%", "🔴"]],
  },
  {
    title: "Ekstraklasa / Liga Dinamarquesa",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [7, "11/12", "Union Saint-Gilloise", "Marseille", "Conservadora", "Under 3.5 Gols", "1.60-1.80", "3%", "81%", "✅"],
      [8, "11/12", "Kairat Almaty", "Olympiacos", "Conservadora", "Over 9.5 Escanteios", "1.85-2.05", "3.5%", "77%", "✅"],
    ],
  },
  {
    title: "Campeonato Brasileiro Sub-20",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[9, "11/12", "América-MG", "São Paulo", "Arrojada", "Vitória (Final)", "2.20-2.60", "2%", "73%", "🔴"]],
  },
  {
    title: "Super Lig Turca",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[17, "12/12", "Galatasaray", "Fenerbahçe", "Arrojada", "Vitória (Derby)", "2.40-2.80", "2%", "72%", "🔴"]],
  },
  {
    title: "Bundesliga",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [6, "11/12", "Bayern", "Sporting", "Conservadora", "Vitória", "1.45-1.65", "5%", "89%", "✅"],
      [14, "12/12", "Juventus", "VfB Stuttgart", "Arrojada", "Vitória", "2.30-2.70", "2%", "75%", "🔴"],
    ],
  },
  {
    title: "Liga Portuguesa",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [6, "11/12", "Bayern", "Sporting", "Conservadora", "Vitória", "1.45-1.65", "5%", "89%", "✅"],
      [20, "12/12", "Benfica", "AEK Atenas", "Conservadora", "Under 4.5 Esc (1T)", "1.65-1.85", "3%", "79%", "🔴"],
    ],
  },
  {
    title: "Super League Grega",
    columns: ["#", "Data", "Time A", "Time B", "Tipo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[8, "11/12", "Kairat Almaty", "Olympiacos", "Conservadora", "Over 9.5 Escanteios", "1.85-2.05", "3.5%", "77%", "✅"]],
  },
];

const marketBlocks: HistoryTable[] = [
  {
    title: "Moneyline / Vitória · 9 apostas",
    columns: ["#", "Data", "Time 1", "Time 2", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [1, "11/12", "Inter de Milão", "Liverpool", "1.85-2.10", "4%", "87%", "✅"],
      [3, "11/12", "Atalanta", "Chelsea", "2.40-2.70", "2%", "76%", "🔴"],
      [6, "11/12", "Bayern", "Sporting", "1.45-1.65", "5%", "89%", "✅"],
      [9, "11/12", "América-MG", "São Paulo", "2.20-2.60", "2%", "73%", "🔴"],
      [11, "12/12", "PSG", "Borussia Dortmund", "1.75-1.95", "4%", "85%", "🔴"],
      [13, "12/12", "Real Madrid", "Manchester City", "1.90-2.15", "4.5%", "88%", "🔴"],
      [14, "12/12", "Juventus", "VfB Stuttgart", "2.30-2.70", "2%", "75%", "🔴"],
      [17, "12/12", "Galatasaray", "Fenerbahçe", "2.40-2.80", "2%", "72%", "🔴"],
    ],
  },
  {
    title: "Over/Under Gols · 4 apostas",
    columns: ["#", "Data", "Jogo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [2, "11/12", "Barcelona vs Frankfurt", "Over 2.5", "1.70-1.90", "3.5%", "82%", "✅"],
      [10, "11/12", "Inter + Barcelona", "Over 2.5 (Parlay)", "2.85-3.35", "2%", "78%", "🔴"],
      [12, "12/12", "Arsenal vs Shakhtar", "Over 2.5", "1.60-1.80", "3.5%", "83%", "🔴"],
      [19, "12/12", "Napoli vs Frankfurt", "Over 2.5 (Parlay)", "2.10-2.50", "2%", "74%", "🔴"],
    ],
  },
  {
    title: "Cartões · 2 apostas",
    columns: ["#", "Data", "Jogo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [5, "11/12", "Monaco vs Galatasaray", "Over 4.5", "1.75-1.95", "3.5%", "79%", "✅"],
      [16, "12/12", "Liverpool vs Roma", "Over 3.5", "1.70-1.90", "3%", "80%", "🔴"],
    ],
  },
  {
    title: "Escanteios · 2 apostas",
    columns: ["#", "Data", "Jogo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [8, "11/12", "Kairat vs Olympiacos", "Over 9.5", "1.85-2.05", "3.5%", "77%", "✅"],
      [20, "12/12", "Benfica vs AEK", "Under 4.5 (1T)", "1.65-1.85", "3%", "79%", "🔴"],
    ],
  },
  {
    title: "Ambos marcam · 1 aposta",
    columns: ["#", "Data", "Jogo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [[18, "12/12", "Atlético Madrid vs Inter", "Ambos Marcam", "1.80-2.05", "3.5%", "82%", "🔴"]],
  },
  {
    title: "Parlays · 2 apostas",
    columns: ["#", "Data", "Jogo", "Mercado", "Odd", "Stake", "Confiança", "Status"],
    rows: [
      [4, "11/12", "Tottenham vs Slavia", "Win + Under 10.5", "2.15-2.45", "3%", "84%", "✅"],
      [15, "12/12", "Bayern vs PSV", "Win + Under 10.5", "1.55-1.75", "3.5%", "81%", "🔴"],
    ],
  },
];

const teamFocus: HistoryTable = {
  title: "Apostas concentradas por time",
  columns: ["Time", "Participações", "Apostas", "Confiança Média", "Taxa Sucesso"],
  rows: [
    ["Bayern", 3, "#6 (Vitória), #15 (Parlay) + Histórico", "85%", "66.7%"],
    ["Inter de Milão", 3, "#1 (Vitória), #10 (Over), #18 (Ambos)", "82.3%", "33.3%"],
    ["Arsenal", 1, "#12 (Over 2.5)", "83%", "0%"],
    ["PSG", 1, "#11 (Vitória)", "85%", "0%"],
    ["Real Madrid", 1, "#13 (Vitória)", "88%", "0%"],
    ["Barcelona", 1, "#2 (Over 2.5)", "82%", "100%"],
    ["Liverpool", 2, "#1 (Oponente), #16 (Cartões)", "83.5%", "0%"],
    ["Atalanta", 1, "#3 (Vitória)", "76%", "0%"],
    ["Tottenham", 1, "#4 (Parlay)", "84%", "100%"],
  ],
};

const statsSummary = [
  { label: "Total de Apostas", value: "20" },
  { label: "Conservadoras", value: "14 (70%)" },
  { label: "Arrojadas", value: "6 (30%)" },
  { label: "Confiança Média Geral", value: "80.6%" },
  { label: "Confiança Conservadoras", value: "81.7%" },
  { label: "Confiança Arrojadas", value: "73.3%" },
  { label: "Stake Total", value: "65%" },
  { label: "Apostas ✅", value: "6 (30%)" },
  { label: "Apostas 🔴", value: "14 (70%)" },
];

const oddsSummary = [
  { label: "Apostas Conservadoras", value: "Min 1.45 · Máx 2.45 · Média 1.81" },
  { label: "Apostas Arrojadas", value: "Min 2.10 · Máx 2.80 · Média 2.47" },
  { label: "Geral", value: "Min 1.45 · Máx 3.35 · Média 2.04" },
];

const distributionMarket = [
  { label: "Vitória/Moneyline", value: "9 (45%) · Conf. 81.0%" },
  { label: "Over/Under Gols", value: "4 (20%) · Conf. 79.3%" },
  { label: "Parlay/Combinadas", value: "2 (10%) · Conf. 82.5%" },
  { label: "Cartões Amarelos", value: "2 (10%) · Conf. 79.5%" },
  { label: "Escanteios", value: "2 (10%) · Conf. 78.0%" },
  { label: "Ambos Marcam", value: "1 (5%) · Conf. 82.0%" },
];

const distributionLeague = [
  { label: "Champions League", value: "14 (70%) · Conf. 81.6%" },
  { label: "Premier League", value: "2 (10%) · Conf. 83.5%" },
  { label: "La Liga", value: "1 (5%) · Conf. 88%" },
  { label: "Serie A", value: "2 (10%) · Conf. 84.5%" },
  { label: "Ligue 1", value: "1 (5%) · Conf. 85%" },
  { label: "Bundesliga", value: "2 (10%) · Conf. 82%" },
  { label: "Brasileiro Sub-20", value: "1 (5%) · Conf. 73%" },
  { label: "Super Lig Turca", value: "1 (5%) · Conf. 72%" },
];

const vinaTable: HistoryTable = {
  title: "Efeito Viña - Laterais analisados",
  columns: ["Jogador", "Time", "Data", "Análise", "Status"],
  rows: [
    ["Federico Dimarco", "Inter", "11/12", "7 assistências/34J, 43 cruzamentos (27.74%), Percentil 98", "✅ Confirmado"],
    ["Matteo Bellanova", "Atalanta", "11/12", "1.67 assists/jogo, 12 cruzamentos/jogo", "✅ Confirmado"],
    ["Achraf Hakimi", "PSG", "12/12", "6 assists/28J, 38 cruzamentos (31.7%), Percentil 97", "🔴 Pendente"],
    ["Vinícius Jr", "Real Madrid", "12/12", "7 gols/8J, 1.2 assists/jogo, Percentil 99 (ofensivo)", "🔴 Pendente"],
    ["Éder Militão", "Real Madrid", "12/12", "2.3 interceptações/jogo, defesa elite", "🔴 Pendente"],
  ],
};

const dailyChrono: HistoryTable[] = [
  {
    title: "Cronologia 11/12/2025 (10 apostas)",
    columns: ["Tipo", "Qtd", "Conf. média", "Sucesso", "Stake"],
    rows: [
      ["Conservadoras", "7", "81%", "6/10 ✅", "32.5%"],
      ["Arrojadas", "3", "72%", "-", "-"],
    ],
  },
  {
    title: "Cronologia 12/12/2025 (10 apostas)",
    columns: ["Tipo", "Qtd", "Conf. média", "Status", "Stake"],
    rows: [
      ["Conservadoras", "7", "82.4%", "🔴 Em andamento", "32.5%"],
      ["Arrojadas", "3", "73.7%", "🔴 Em andamento", "-"],
    ],
  },
];

const topConfidence: HistoryTable = {
  title: "Apostas com maior confiança",
  columns: ["Ranking", "Aposta", "Confiança", "Data"],
  rows: [
    ["🥇 1º", "Bayern vs Sporting (Vitória)", "89%", "11/12"],
    ["🥈 2º", "Real Madrid vs Manchester City", "88%", "12/12"],
    ["🥉 3º", "Atalanta vs Chelsea + Inter Over + Barcelona Over", "87% / 85% / 82%", "11/12"],
    ["4º", "PSG vs Borussia Dortmund", "85%", "12/12"],
    ["5º", "Tottenham vs Slavia (Parlay)", "84%", "11/12"],
  ],
};

const resumeList = [
  "Total 4 dias (09/12 - 12/12): 20 apostas registradas",
  "70% Conservadoras (14 apostas, 81.7% confiança média)",
  "30% Arrojadas (6 apostas, 73.3% confiança média)",
  "Capital Total Alocado: 65% da banca",
  "Odds Média: 2.04",
  "Champions League domina: 70% das apostas (14/20)",
  "Status: ✅ 6 apostas confirmadas (11/12) · 🔴 14 em andamento (12/12)",
  "Compliance: 100% escalações FlashScore; Efeito Viña validado para 2 laterais; Kelly 0.25; Stop-loss 12%",
];

function renderTable(block: HistoryTable) {
  return (
    <div className="table-wrapper" key={block.title} style={{ marginTop: 10 }}>
      <div className="section-title" style={{ margin: "10px 8px 4px" }}>
        <span>{block.title}</span>
      </div>
      <table>
        <thead>
          <tr>
            {block.columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, idx) => (
            <tr key={`${block.title}-${idx}`}>
              {row.map((cell, cidx) => (
                <td key={cidx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const HistoricoPage: React.FC = () => {
  return (
    <div className="report-root">
      <TopTabs active="home" />

      <main className="page">
        <div className="section-title">
          <span>Histórico completo · 09/12/2025 - 12/12/2025</span>
          <span className="section-subtitle">Apex Sports Analytics</span>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Resumo executivo</span>
            <span className="section-subtitle">Performance e compliance</span>
          </div>
          <ul className="detail-list">
            {resumeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Performance geral</span>
            <span className="section-subtitle">Distribuição de apostas</span>
          </div>
          <div className="history-metrics">
            {statsSummary.map((item) => (
              <div className="metric-card" key={item.label}>
                <span className="metric-label">{item.label}</span>
                <span className="metric-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="detail-list" style={{ marginTop: 8 }}>
            <div><strong>Odds:</strong> {oddsSummary.map((o) => o.value).join(" · ")}</div>
          </div>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Distribuição por mercado</span>
            <span className="section-subtitle">Participação e confiança média</span>
          </div>
          <ul className="detail-list">
            {distributionMarket.map((item) => (
              <li key={item.label}>{item.label}: {item.value}</li>
            ))}
          </ul>
          <div className="section-title" style={{ marginTop: 8 }}>
            <span>Distribuição por liga</span>
            <span className="section-subtitle">Amostra 20 apostas</span>
          </div>
          <ul className="detail-list">
            {distributionLeague.map((item) => (
              <li key={item.label}>{item.label}: {item.value}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Organização por ligas</span>
            <span className="section-subtitle">Champions e demais</span>
          </div>
          {leagueBlocks.map((block) => renderTable(block))}
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Organização por mercado</span>
            <span className="section-subtitle">Moneyline, gols, cartões</span>
          </div>
          {marketBlocks.map((block) => renderTable(block))}
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Concentração por times</span>
            <span className="section-subtitle">Top 3 e demais</span>
          </div>
          {renderTable(teamFocus)}
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Efeito Viña</span>
            <span className="section-subtitle">Laterais analisados</span>
          </div>
          {renderTable(vinaTable)}
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Cronologia diária</span>
            <span className="section-subtitle">Dia 11/12 e 12/12</span>
          </div>
          {dailyChrono.map((block) => renderTable(block))}
        </div>

        <div className="detail-block">
          <div className="section-title">
            <span>Top confiança</span>
            <span className="section-subtitle">Ranking de confiança</span>
          </div>
          {renderTable(topConfidence)}
        </div>
      </main>
    </div>
  );
};
