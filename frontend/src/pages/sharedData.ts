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
    type: "Booster",
    match: "Itália x Austrália",
    market: "Alternativas - Dupla Hipótese: Itália / Empate",
    odd: "1.70",
    meta: "13h45 hoje",
    confidence: "89% confiança",
    stake: "Stake R$50",
    risk: "Risco Alto",
    riskTone: "red",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Dinamarca x Holanda",
    market: "Total de gols - Mais de 1.5",
    odd: "1.53",
    meta: "19h15 hoje",
    confidence: "88% confiança",
    stake: "Stake R$30",
    risk: "Risco Baixo",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "França x Suécia",
    market: "Resultado final - 1X2: França",
    odd: "1.50",
    meta: "16h30 hoje",
    confidence: "84% confiança",
    stake: "Stake R$40",
    risk: "Risco Médio",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Noruega x Portugal",
    market: "Total de escanteios: Mais de 10.5",
    odd: "1.37",
    meta: "18h00 hoje",
    confidence: "82% confiança",
    stake: "Stake R$60",
    risk: "Risco Médio",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Alemanha x Bélgica",
    market: "Total de gols - Mais de 1.5",
    odd: "1.25",
    meta: "21h15 hoje",
    confidence: "82% confiança",
    stake: "Stake R$70",
    risk: "Risco Baixo",
  },
  {
    badge: "HOT",
    type: "Booster",
    match: "Argentina x Uruguai",
    market: "Alternativas - Dupla hipótese: Argentina / Empate",
    odd: "1.30",
    meta: "14h45 amanhã",
    confidence: "86% confiança",
    stake: "Stake R$60",
    risk: "Risco Baixo",
  },
];

export const tableRows: TableRow[] = [
  {
    id: 1,
    pick: "Espanha x Inglaterra (Moneyline Espanha)",
    odd: "1.70",
    confidence: "89%",
    stake: "R$70",
  },
  {
    id: 2,
    pick: "Itália x Austrália (Dupla Hipótese Itália/Empate)",
    odd: "1.70",
    confidence: "88%",
    stake: "R$50",
  },
  {
    id: 3,
    pick: "França x Suécia (França)",
    odd: "1.50",
    confidence: "84%",
    stake: "R$40",
  },
  {
    id: 4,
    pick: "Alemanha x Bélgica (Mais de 1.5 gols)",
    odd: "1.25",
    confidence: "82%",
    stake: "R$70",
  },
];
