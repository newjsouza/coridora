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
    slug: "fluminense-vasco",
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
    slug: "aston-villa-basel",
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
    slug: "nottingham-utrecht",
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
    slug: "celtic-roma-btts",
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
    slug: "betis-zagreb",
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
    slug: "flamengo-pyramids",
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
    slug: "zagreb-betis-parlay",
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
    slug: "roma-primeiro-tempo",
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
    slug: "lo-celso-marcador",
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
    slug: "celtic-roma-escanteios",
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

export const betDetails: Record<string, BetDetail> = {
  "fluminense-vasco": {
    slug: "fluminense-vasco",
    match: "Fluminense vs Vasco",
    title: "Vitória Fluminense",
    market: "Moneyline Fluminense",
    type: "Conservadora",
    odd: "1.80 - 2.10",
    confidence: "83%",
    stake: "4%",
    risk: "Baixo-Médio",
    time: "20h00",
    location: "Maracanã, Rio de Janeiro",
    summary: "Fluminense invicto (7/8) enfrenta Vasco em colapso psicológico (1/8 vitórias) com desfalque de Piton e trauma de 5-0.",
    keyPoints: [
      "Flu 30+ dias sem perder; 5V2E.",
      "Vasco 1/8 vitórias; goleada 5-0 recente; Piton fora.",
      "Zubeldía especialista em mata-mata; Diniz sob pressão extrema.",
      "Laterais Renê e Samuel Xavier somam 17 cruzamentos recentes (efeito Viña).",
    ],
    validation: [
      "Escalações confirmadas 1h antes.",
      "Piton ausente na esquerda; fator casa Maracanã.",
      "Stop-loss 12% e Kelly 0.25 aplicados.",
    ],
  },
  "aston-villa-basel": {
    slug: "aston-villa-basel",
    match: "Aston Villa vs Basel",
    title: "Villa + Over 1.5",
    market: "Vitória Aston Villa + Over 1.5 gols",
    type: "Conservadora",
    odd: "1.50 - 1.70",
    confidence: "86%",
    stake: "5%",
    risk: "Muito Baixo",
    time: "17h00",
    location: "St. Jakob Park, Basel",
    summary: "Villa dominante (7 vitórias seguidas) enfrenta Basel em defesa vazada (14 gols sofridos em 5).",
    keyPoints: [
      "Villa 4V/5 na UEL; invicto fora; 8 gols em 5 jogos.",
      "Basel 3 derrotas em 5 na UEL; 14 gols sofridos; precisa vencer.",
      "Disparidade de elenco 500M vs 50M; odds sub-2.0 ainda com valor.",
      "Parlay 1 + Over 1.5 com prob. ~73%.",
    ],
    validation: [
      "Checar escalações 1h antes; Villa vem de 2-0 recente.",
      "Basel desesperado abre espaços defensivos.",
      "Kelly 0.25 e stake máximo permitido (5%).",
    ],
  },
  "nottingham-utrecht": {
    slug: "nottingham-utrecht",
    match: "Nottingham Forest vs Utrecht",
    title: "Vitória Nottingham",
    market: "Moneyline Nottingham Forest",
    type: "Conservadora",
    odd: "1.65 - 1.90",
    confidence: "79%",
    stake: "3.5%",
    risk: "Baixo-Médio",
    time: "14h45",
    location: "Galgenwaard, Utrecht",
    summary: "Forest superior tecnicamente (500M vs 100M) pega Utrecht sem vitórias e ataque inoperante.",
    keyPoints: [
      "Forest 2V1E nos últimos 3 na UEL; recuperação pós-derrota doméstica.",
      "Utrecht 0 vitórias em 5; só 2 gols marcados; defesa 32ª colocação.",
      "Solanke em forma (8 gols); Dyche sólido defensivamente.",
      "Vitória garante qualificação direta; visitante compensa com disparidade técnica.",
    ],
    validation: [
      "Lineups 1h antes; manter stake 3.5%.",
      "Controlar exposição simultânea; stop-loss 12%.",
    ],
  },
  "celtic-roma-btts": {
    slug: "celtic-roma-btts",
    match: "Celtic vs Roma",
    title: "BTTS + Over 2.5",
    market: "Ambos marcam + Over 2.5 gols",
    type: "Arrojada",
    odd: "1.85 - 2.15",
    confidence: "81%",
    stake: "2%",
    risk: "Médio",
    time: "17h00",
    location: "Celtic Park, Glasgow",
    summary: "Celtic precisa vencer em casa (+12pp) e expõe defesa; Roma contra-ataca com ataque ativo e defesa vulnerável.",
    keyPoints: [
      "Celtic em casa com 60k torcedores; obrigação de vitória.",
      "Roma irregular, mas marcou 3-1 no Feyenoord; 9 gols sofridos em 5.",
      "Expectativa combinada de ~3 gols; ambas defesas vazam.",
      "Histórico: 7/8 vs italianos com ambos marcam.",
    ],
    validation: [
      "Checar desfalques (Johnston, Jota) 1h antes.",
      "Stake 2% (Kelly 0.25) por ser arrojada.",
    ],
  },
  "betis-zagreb": {
    slug: "betis-zagreb",
    match: "Real Betis vs Dinamo Zagreb",
    title: "Vitória Betis",
    market: "Moneyline Betis",
    type: "Conservadora",
    odd: "1.70 - 1.95",
    confidence: "85%",
    stake: "4%",
    risk: "Baixo-Médio",
    time: "14h45",
    location: "Estádio Maksimir, Zagreb",
    summary: "Betis quase classificado, com ataque em forma (Isco/Fornals); Zagreb sob pressão defensiva (1.4 gol sofrido/jogo).",
    keyPoints: [
      "Betis 3V2E em 5; 8 gols marcados.",
      "Zagreb precisa vencer e se expõe; 7 pontos e defesa permeável.",
      "Pellegrini experiente vs Jakirović; histórico favorece Betis.",
      "Elenco Betis superior e em confiança após 3-1.",
    ],
    validation: [
      "Checar suspensões/lesões (Rodríguez, Firpo, Bellerín, Isco).",
      "Manter stake 4% com stop-loss 12%.",
    ],
  },
  "flamengo-pyramids": {
    slug: "flamengo-pyramids",
    match: "Flamengo vs Pyramids",
    title: "Flamengo + Over 2.5",
    market: "Vitória Flamengo + Over 2.5 gols",
    type: "Conservadora",
    odd: "1.45 - 1.65",
    confidence: "78%",
    stake: "3.5%",
    risk: "Baixo-Médio",
    time: "14h00",
    location: "Ahmad Bin Ali Stadium, Catar (neutro)",
    summary: "Flamengo campeão da Libertadores com ataque em forma encara Pyramids após goleada 6-1 e defesa frágil.",
    keyPoints: [
      "Arrascaeta 2 gols vs Cruz Azul; ataque com BH, Lino, Carrascal.",
      "Pyramids sofreu 6-1; nível técnico abaixo; moral baixa.",
      "Over 2.5 em 70% dos cenários; disparidade ofensiva clara.",
      "Campo neutro reduz fator casa, mas favorece superioridade técnica.",
    ],
    validation: [
      "Confirmar escalação 1h antes; foco de Filipe Luís na final.",
      "Controlar stake 3.5% e gestão de variância.",
    ],
  },
  "zagreb-betis-parlay": {
    slug: "zagreb-betis-parlay",
    match: "Dinamo Zagreb vs Betis",
    title: "Parlay cartões + Betis",
    market: "Over 4.5 cartões + Vitória Betis",
    type: "Arrojada",
    odd: "1.90 - 2.25",
    confidence: "80%",
    stake: "2%",
    risk: "Médio",
    time: "14h45",
    location: "Maksimir, Zagreb",
    summary: "Jogo de pressão extrema com árbitro propenso a cartões e Betis favorito técnico.",
    keyPoints: [
      "Árbitro Marko Gurglič tem histórico alto de cartões.",
      "Zagreb agressivo (3 cartões no jogo anterior); Betis causa faltas.",
      "Últimos 5 confrontos geraram 6-8 cartões.",
      "Parlay combina favoritismo Betis (85%) com linha de cartões (75%).",
    ],
    validation: [
      "Stake 2% (Kelly 0.25) por risco combinado.",
      "Monitorar linha de cartões pré-jogo; ajustar se cair abaixo de 4.5.",
    ],
  },
  "roma-primeiro-tempo": {
    slug: "roma-primeiro-tempo",
    match: "Celtic vs Roma",
    title: "Roma marca no 1º tempo",
    market: "Primeira meta da Roma",
    type: "Conservadora",
    odd: "1.55 - 1.75",
    confidence: "76%",
    stake: "3%",
    risk: "Baixo-Médio",
    time: "17h00",
    location: "Celtic Park, Glasgow",
    summary: "Roma de Gasperini inicia forte em transições; 80% dos jogos na UEL com gol, maioria no 1º tempo.",
    keyPoints: [
      "Pellegrini e Soulé costumam marcar cedo (3/4 gols no 1T).",
      "Celtic pressiona desde o início e abre espaços.",
      "Roma já marcou antes dos 35 minutos em histórico recente.",
      "Jogo com torcida intensa favorece contra-ataque romano.",
    ],
    validation: [
      "Lineups 1h antes; checar Pellegrini/Soulé titulares.",
      "Stake 3% com stop-loss 12%.",
    ],
  },
  "lo-celso-marcador": {
    slug: "lo-celso-marcador",
    match: "Celtic vs Roma",
    title: "Lo Celso marcar a qualquer tempo",
    market: "Marcador (Lo Celso)",
    type: "Arrojada",
    odd: "2.50 - 3.20",
    confidence: "84%",
    stake: "1%",
    risk: "Médio-Alto",
    time: "17h00",
    location: "Celtic Park, Glasgow",
    summary: "Lo Celso vive fase artilheira (5 gols em 8 na UEL) e encontra defesa aberta do Celtic.",
    keyPoints: [
      "Média 0.625 gol/jogo na UEL.",
      "Defesa do Celtic vulnerável (21ª colocação defensiva).",
      "Odds 2.5-3.2 subestimam probabilidade >40%.",
      "Forma recente: gol vs Feyenoord.",
    ],
    validation: [
      "Stake 1% (Kelly 0.25) por ser mercado de goleador.",
      "Confirmar titularidade 1h antes.",
    ],
  },
  "celtic-roma-escanteios": {
    slug: "celtic-roma-escanteios",
    match: "Celtic vs Roma",
    title: "Over 9.5 escanteios",
    market: "Mais de 9.5 escanteios",
    type: "Conservadora",
    odd: "1.65 - 1.85",
    confidence: "77%",
    stake: "3%",
    risk: "Baixo-Médio",
    time: "17h00",
    location: "Celtic Park, Glasgow",
    summary: "Pressão ofensiva do Celtic (média 6.2 cantos) e bloqueios da Roma elevam contagem para 11-12 cantos esperados.",
    keyPoints: [
      "Celtic em casa força >5 escanteios (média 6.2).",
      "Roma fora gera ~4.8 cantos e muitos bloqueios.",
      "Histórico 9/10 confrontos acima de 9.5.",
      "Jogo aberto com ambos marcando favorece cantos.",
    ],
    validation: [
      "Monitorar linha se cair abaixo de 9.5; ajustar stake.",
      "Manter stake 3% com stop-loss diário 12%.",
    ],
  },
};
