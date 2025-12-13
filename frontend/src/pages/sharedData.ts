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
  slug: string;
  riskTone?: "red";
  status?: string;
  statusTone?: "win" | "loss" | "pending";
  score?: string;
};

export type TableRow = {
  id: number;
  pick: string;
  odd: string;
  confidence: string;
  stake: string;
};

export type BetDetail = {
  slug: string;
  match: string;
  title: string;
  market: string;
  type: string;
  odd: string;
  confidence: string;
  stake: string;
  risk: string;
  time: string;
  location: string;
  summary: string;
  keyPoints: string[];
  validation: string[];
  status?: string;
  finalScore?: string;
  outcomeNotes?: string[];
};

export const betCardsToday: BetCard[] = [
  {
    badge: "DESTAQUE",
    type: "Qualificação",
    match: "Flamengo vs Pyramids",
    market: "Flamengo qualifica para a final",
    odd: "1.45 - 1.65",
    meta: "13/12 · 14h · Ahmad Bin Ali (Qatar)",
    confidence: "76% confiança",
    stake: "Stake 3.5% (máx)",
    risk: "Risco Baixo-Médio",
    slug: "flamengo-pyramids-qualifica",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "PL",
    type: "Moneyline",
    match: "Liverpool vs Brighton",
    market: "Vitória Liverpool",
    odd: "1.65 - 1.85",
    meta: "13/12 · 12h · Anfield",
    confidence: "73% confiança",
    stake: "Stake 2.5%",
    risk: "Risco Conservador",
    slug: "liverpool-brighton-moneyline",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "SERIE A",
    type: "Over 2.5",
    match: "Atalanta vs Cagliari",
    market: "Over 2.5 gols",
    odd: "1.78 - 1.98",
    meta: "13/12 · 16h45 · Gewiss Stadium",
    confidence: "76% confiança",
    stake: "Stake 3%",
    risk: "Risco Conservador",
    slug: "atalanta-cagliari-over25",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "PL",
    type: "BTTS",
    match: "Chelsea vs Everton",
    market: "Ambos marcam (BTTS)",
    odd: "1.85 - 2.05",
    meta: "13/12 · 12h · Stamford Bridge",
    confidence: "72% confiança",
    stake: "Stake 2.5%",
    risk: "Risco Médio",
    slug: "chelsea-everton-btts",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "PORTUGAL",
    type: "Gol 1º tempo",
    match: "Porto vs Estrela Amadora",
    market: "Porto marca no 1º tempo",
    odd: "1.80 - 2.00",
    meta: "13/12 · 21h · Estádio do Dragão",
    confidence: "71% confiança",
    stake: "Stake 2%",
    risk: "Risco Especulativo",
    slug: "porto-estrela-primeiro-tempo",
    status: "Não iniciado",
    statusTone: "pending",
  },
];

export const betCardsYesterday: BetCard[] = [];

export const tableRows: TableRow[] = [
  { id: 1, pick: "Flamengo vs Pyramids - Flamengo qualifica", odd: "1.45 - 1.65", confidence: "76%", stake: "3.5%" },
  { id: 2, pick: "Liverpool vs Brighton - Vitória Liverpool", odd: "1.65 - 1.85", confidence: "73%", stake: "2.5%" },
  { id: 3, pick: "Atalanta vs Cagliari - Over 2.5 gols", odd: "1.78 - 1.98", confidence: "76%", stake: "3%" },
  { id: 4, pick: "Chelsea vs Everton - Ambos marcam", odd: "1.85 - 2.05", confidence: "72%", stake: "2.5%" },
  { id: 5, pick: "Porto - Gol 1º tempo", odd: "1.80 - 2.00", confidence: "71%", stake: "2%" },
];

export const betDetails: Record<string, BetDetail> = {
  "flamengo-pyramids-qualifica": {
    slug: "flamengo-pyramids-qualifica",
    match: "Flamengo vs Pyramids",
    title: "Flamengo qualifica (destaque)",
    market: "Flamengo qualifica para a final",
    type: "Conservadora",
    odd: "1.45 - 1.65",
    confidence: "76%",
    stake: "3.5%",
    risk: "Baixo-Médio",
    time: "14h (Brasília)",
    location: "Estádio Ahmad Bin Ali, Catar",
    summary:
      "Semifinal Intercontinental com disparidade extrema: Libertadores 2025 vs CAF 2024. Mercado qualificação capta vitória, prorrogação ou pênaltis e entrega probabilidade combinada de 83.5%, muito acima dos 55% da vitória simples.",
    keyPoints: [
      "Sistema de qualificação protege: vitória em 90', empate leva à prorrogação/pênaltis e ainda qualifica Flamengo (~83.5% total).",
      "Disparidade técnica: Libertadores domina 80%+ dos confrontos Intercontinentais; Flamengo mantém núcleo titular e moral alta.",
      "Pyramids chega de goleada 6-1 e moral quebrada; defesa sofre 1.2-1.5 g/jogo fora e enfrenta pressão psicológica total.",
      "Histórico: 8/10 cruzamentos Libertadores vs não-Libertadores vencidos; semifinais Libertadores nunca perderam nessa fase.",
    ],
    validation: [
      "Executar mercado 'Qualifica', não vitória simples; EV 1.6+ estimado.",
      "Stake 3.5% (máx), stop-loss 12%, Kelly 0.25; confiança ajustada para 76% por volatilidade Intercontinental (anomalia 41).",
      "Confirmar XI 1h antes (Arrascaeta, Bruno Henrique/Éverton, dupla Léo Ortiz/Léo Pereira).",
      "Cancelar se queda física extrema ou mudança de gramado/condições comprometer ritmo.",
    ],
    status: "Não iniciado",
  },
  "liverpool-brighton-moneyline": {
    slug: "liverpool-brighton-moneyline",
    match: "Liverpool vs Brighton",
    title: "Vitória Liverpool",
    market: "Moneyline Liverpool",
    type: "Conservadora",
    odd: "1.65 - 1.85",
    confidence: "73%",
    stake: "2.5%",
    risk: "Baixo",
    time: "12h (Brasília)",
    location: "Anfield, Liverpool",
    summary:
      "Anfield segue forte (62% vitórias em casa) mesmo com Bradley/Szoboszlai fora. Brighton é visitante frágil (33% vitórias) e costuma sofrer 1.4 g/jogo; Moneyline captura vantagem de mando e histórico (1V em 8 visitas de Brighton).",
    keyPoints: [
      "Fator Anfield: 1.8 gols marcados e 0.8 sofridos em casa; pressão psicológica alta sobre Brighton.",
      "Desfalques (Bradley, Szoboszlai, dúvida Gakpo/Endo) reduzem ~0.3 gol esperado, mas Salah/Neto/Wirtz mantêm volume ofensivo.",
      "Brighton fora vence 33%, defesa concede 1.4 g/jogo e histórico em Anfield é negativo; padrão BTTS alto, porém Liverpool marca mais.",
    ],
    validation: [
      "Stake 2.5% com stop-loss 12%; manter confiança limitada a 73% devido ausências.",
      "Confirmar Kerkez/Gomez na linha e status de Gakpo/Endo 1h antes; evitar upgrades de stake/confiança.",
      "Não transformar em parlay; mercado simples ML é o foco.",
    ],
    status: "Não iniciado",
  },
  "atalanta-cagliari-over25": {
    slug: "atalanta-cagliari-over25",
    match: "Atalanta vs Cagliari",
    title: "Over 2.5 gols",
    market: "Mais de 2.5 gols",
    type: "Conservadora",
    odd: "1.78 - 1.98",
    confidence: "76%",
    stake: "3%",
    risk: "Baixo-Médio",
    time: "16h45 (Brasília)",
    location: "Gewiss Stadium, Bergamo",
    summary:
      "Atalanta em casa é máquina ofensiva (2.4 g/jogo, 75% over 2.5 nas últimas 8). Cagliari chega com defesa destruída (sem Mina e Zé Pedro) e concede 1.8 g/jogo fora; linha 2.5 projeta 2.6-3.2 gols.",
    keyPoints: [
      "Histórico casa Atalanta: 6/8 últimos jogos over 2.5; 18 finalizações/jogo e média 2.4 gols marcados.",
      "Cagliari visitante sofre 1.8 g/jogo e perde dupla de zaga titular, elevando variância defensiva.",
      "Matchup favorece ritmo alto: projeção 2.6-3.2 gols, com Atalanta em vantagem técnica ampla.",
    ],
    validation: [
      "Executar somente com linha principal 2.5; stake 3% (aposta forte).",
      "Monitorar Bellanova e clima/gramado; cancelar se cair para under ritmo evidente.",
      "Respeitar stop-loss 12%; confiança travada em 76% (sem upgrades).",
    ],
    status: "Não iniciado",
  },
  "chelsea-everton-btts": {
    slug: "chelsea-everton-btts",
    match: "Chelsea vs Everton",
    title: "Ambos marcam",
    market: "BTTS",
    type: "Conservadora",
    odd: "1.85 - 2.05",
    confidence: "72%",
    stake: "2.5%",
    risk: "Médio",
    time: "12h (Brasília)",
    location: "Stamford Bridge, Londres",
    summary:
      "Chelsea sem Caicedo abre meio (defesa +0.4 gol sofrido); mantém 1.8 g/jogo marcado. Everton tem McNeil/Ndiaye e histórico BTTS alto; confronto direto trouxe BTTS em 4/5. Mercado BTTS captura vulnerabilidade mútua.",
    keyPoints: [
      "Suspensão Caicedo e lesões (Colwill, Lavia) deixam Chelsea exposto, mas ataque segue produzindo.",
      "Histórico recente Chelsea x Everton: BTTS em 80% (4/5); Stamford Bridge costuma ter gols para ambos.",
      "Everton marca em 70% dos jogos; McNeil com 3 gols e 4 assists mantém criação para contra-ataque.",
    ],
    validation: [
      "Stake 2.5% por ser mercado de gols; confirmação de Caicedo fora já precificada.",
      "Evitar se Chelsea alinhar meio ultra defensivo ou bloco baixo que mude padrão BTTS.",
      "Stop-loss 12%; confiança fixa em 72% sem upgrades.",
    ],
    status: "Não iniciado",
  },
  "porto-estrela-primeiro-tempo": {
    slug: "porto-estrela-primeiro-tempo",
    match: "Porto vs Estrela Amadora",
    title: "Gol do Porto no 1º tempo",
    market: "Porto marca no 1º tempo",
    type: "Especulativa",
    odd: "1.80 - 2.00",
    confidence: "71%",
    stake: "2%",
    risk: "Médio",
    time: "21h (Brasília)",
    location: "Estádio do Dragão, Porto",
    summary:
      "Porto marca no 1º tempo em 80% dos últimos 10 jogos no Dragão (1.1 gol/1T, 67% posse). Estrela é visitante frágil, concede cedo e nunca venceu Porto; mercado 1T gol captura pressão inicial antes de qualquer rotação.",
    keyPoints: [
      "Padrão 1T Dragão: 8/10 jogos com gol; Evanilson/Pepê/Vieira entregam volume cedo.",
      "Estrela sem vitórias fora; concede ~0.95 xG no 1T e costuma ceder espaços nos 20 minutos iniciais.",
      "Fator psicológico Dragão + posse 70% inicial favorecem gol rápido; histórico direto 0V-0E-5D do Estrela.",
    ],
    validation: [
      "Stake 2% (especulativa temporal); cancelar se Porto rotacionar pesado ou clima derrubar ritmo.",
      "Preservar stop-loss 12%; não executar se odd cair <1.75.",
      "Revisar XI 1h antes para confirmar linha ofensiva titular.",
    ],
    status: "Não iniciado",
  },
};
