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
    match: "Vasco vs Fluminense",
    market: "Vitória Vasco – mandante em São Januário",
    odd: "2.15 - 2.50",
    meta: "20h00 · São Januário",
    confidence: "83% confiança",
    stake: "Stake 4% banca",
    risk: "Risco Baixo-Médio",
  },
  {
    badge: "OK",
    type: "Contexto",
    match: "Basel vs Aston Villa",
    market: "Basel mandante no St. Jakob-Park",
    odd: "Em monitoramento",
    meta: "17h00 Brasília",
    confidence: "Contexto validado",
    stake: "Stake em revisão",
    risk: "Risco Baixo",
  },
  {
    badge: "OK",
    type: "Visitor favorito",
    match: "Nottingham Forest vs Utrecht",
    market: "Forest favorito mesmo visitante (Galgenwaard)",
    odd: "Em monitoramento",
    meta: "Local correto: Utrecht",
    confidence: "Confiança mantida",
    stake: "Stake em revisão",
    risk: "Risco Médio",
  },
  {
    badge: "OK",
    type: "1X2",
    match: "Celtic vs Roma",
    market: "Celtic mandante em Celtic Park",
    odd: "Em monitoramento",
    meta: "Glasgow",
    confidence: "Contexto correto",
    stake: "Stake em revisão",
    risk: "Risco Baixo",
  },
  {
    badge: "ALERTA",
    type: "Visitor",
    match: "Dinamo Zagreb vs Real Betis",
    market: "Betis é visitante no Maksimir",
    odd: "Em monitoramento",
    meta: "Zagreb",
    confidence: "Favoritismo mantido",
    stake: "Stake em revisão",
    risk: "Risco Médio",
  },
  {
    badge: "OK",
    type: "Neutro",
    match: "Flamengo vs Pyramids",
    market: "Ahmad Bin Ali Stadium (campo neutro)",
    odd: "Em monitoramento",
    meta: "Catar",
    confidence: "Contexto correto",
    stake: "Stake em revisão",
    risk: "Risco Baixo",
  },
];

export const tableRows: TableRow[] = [
  {
    id: 1,
    pick: "Vasco vs Fluminense (Moneyline Vasco)",
    odd: "2.15 - 2.50",
    confidence: "83%",
    stake: "4% banca",
  },
  {
    id: 2,
    pick: "Basel vs Aston Villa (Basel mandante St. Jakob-Park)",
    odd: "Em monitoramento",
    confidence: "Validado",
    stake: "Revisão",
  },
  {
    id: 3,
    pick: "Nottingham Forest vs Utrecht (Forest favorito visitante)",
    odd: "Em monitoramento",
    confidence: "Mantida",
    stake: "Revisão",
  },
  {
    id: 4,
    pick: "Celtic vs Roma (Celtic Park)",
    odd: "Em monitoramento",
    confidence: "Contexto OK",
    stake: "Revisão",
  },
  {
    id: 5,
    pick: "Dinamo Zagreb vs Betis (Betis visitante)",
    odd: "Em monitoramento",
    confidence: "Favorito",
    stake: "Revisão",
  },
  {
    id: 6,
    pick: "Flamengo vs Pyramids (Neutro no Catar)",
    odd: "Em monitoramento",
    confidence: "Contexto OK",
    stake: "Revisão",
  },
];
