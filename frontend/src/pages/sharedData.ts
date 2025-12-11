export type BetCard = {
  badge: string;
  type: string;
  match: string;
  market: string;
  odd: string;
  meta: string;
  confidence: string;
  stake: string;
  risk: string;
  riskTone?: "red";
};

export type TableRow = {
  id: number;
  pick: string;
  odd: string;
  confidence: string;
  stake: string;
};

export const betCards: BetCard[] = [
  {
    badge: "HOT",
    type: "Moneyline",
    match: "Fluminense vs Vasco",
    market: "Vitória Fluminense (Moneyline)",
    odd: "1.80 - 2.10",
    meta: "20h00 · Maracanã",
    confidence: "83% confiança",
    stake: "Stake 4% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "HOT",
    type: "1 + Over 1.5",
    match: "Aston Villa vs Basel",
    market: "Vitória Aston Villa + Over 1.5",
    odd: "1.50 - 1.70",
    meta: "17h00 · St. Jakob Park",
    confidence: "86% confiança",
    stake: "Stake 5% banca",
    risk: "Risco Muito Baixo",
  },
  {
    badge: "OK",
    type: "Moneyline",
    match: "Nottingham Forest vs Utrecht",
    market: "Vitória Nottingham Forest",
    odd: "1.65 - 1.90",
    meta: "14h45 · Galgenwaard",
    confidence: "79% confiança",
    stake: "Stake 3.5% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "ARROJADA",
    type: "BTTS + Over 2.5",
    match: "Celtic vs Roma",
    market: "Ambos marcam + Over 2.5",
    odd: "1.85 - 2.15",
    meta: "17h00 · Celtic Park",
    confidence: "81% confiança",
    stake: "Stake 2% banca",
    risk: "Risco Médio",
  },
  {
    badge: "HOT",
    type: "Moneyline",
    match: "Real Betis vs Dinamo Zagreb",
    market: "Vitória Betis",
    odd: "1.70 - 1.95",
    meta: "14h45 · Estádio Maksimir",
    confidence: "85% confiança",
    stake: "Stake 4% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "OK",
    type: "1 + Over 2.5",
    match: "Flamengo vs Pyramids",
    market: "Vitória Flamengo + Over 2.5",
    odd: "1.45 - 1.65",
    meta: "14h00 · Ahmad Bin Ali (Neutro)",
    confidence: "78% confiança",
    stake: "Stake 3.5% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "PARLAY",
    type: "Cartões + Moneyline",
    match: "Dinamo Zagreb vs Betis",
    market: "Over 4.5 cartões + Vitória Betis",
    odd: "1.90 - 2.25",
    meta: "Árbitro Marko Gurglič · 14h45",
    confidence: "80% confiança",
    stake: "Stake 2% banca",
    risk: "Risco Médio",
    riskTone: "red",
  },
  {
    badge: "OK",
    type: "Marcador 1T",
    match: "Roma marca no 1º tempo",
    market: "Primeira meta da Roma",
    odd: "1.55 - 1.75",
    meta: "17h00 · Celtic Park",
    confidence: "76% confiança",
    stake: "Stake 3% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "ARROJADA",
    type: "Marcador",
    match: "Giovani Lo Celso (Roma)",
    market: "Marcar a qualquer momento",
    odd: "2.50 - 3.20",
    meta: "17h00 · Celtic Park",
    confidence: "84% confiança",
    stake: "Stake 1% banca",
    risk: "Risco Médio-Alto",
    riskTone: "red",
  },
  {
    badge: "OK",
    type: "Escanteios",
    match: "Celtic vs Roma",
    market: "Over 9.5 escanteios",
    odd: "1.65 - 1.85",
    meta: "17h00 · Celtic Park",
    confidence: "77% confiança",
    stake: "Stake 3% banca",
    risk: "Risco Baixo-Médio",
  },
];

export const tableRows: TableRow[] = [
  {
    id: 1,
    pick: "Fluminense vs Vasco - Vitória Fluminense",
    odd: "1.80 - 2.10",
    confidence: "83%",
    stake: "4%",
  },
  {
    id: 2,
    pick: "Aston Villa vs Basel - Villa + Over 1.5",
    odd: "1.50 - 1.70",
    confidence: "86%",
    stake: "5%",
  },
  {
    id: 3,
    pick: "Nottingham vs Utrecht - Vitória Nottingham",
    odd: "1.65 - 1.90",
    confidence: "79%",
    stake: "3.5%",
  },
  {
    id: 4,
    pick: "Celtic vs Roma - BTTS + Over 2.5",
    odd: "1.85 - 2.15",
    confidence: "81%",
    stake: "2%",
  },
  {
    id: 5,
    pick: "Betis vs Zagreb - Vitória Betis",
    odd: "1.70 - 1.95",
    confidence: "85%",
    stake: "4%",
  },
  {
    id: 6,
    pick: "Flamengo vs Pyramids - 1 + Over 2.5",
    odd: "1.45 - 1.65",
    confidence: "78%",
    stake: "3.5%",
  },
  {
    id: 7,
    pick: "Zagreb + Betis - Over 4.5 cartões + Betis",
    odd: "1.90 - 2.25",
    confidence: "80%",
    stake: "2%",
  },
  {
    id: 8,
    pick: "Roma marca 1º tempo",
    odd: "1.55 - 1.75",
    confidence: "76%",
    stake: "3%",
  },
  {
    id: 9,
    pick: "Giovani Lo Celso marcar (Roma)",
    odd: "2.50 - 3.20",
    confidence: "84%",
    stake: "1%",
  },
  {
    id: 10,
    pick: "Celtic vs Roma - Over 9.5 escanteios",
    odd: "1.65 - 1.85",
    confidence: "77%",
    stake: "3%",
  },
];
