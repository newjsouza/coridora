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
    badge: "HIGH",
    type: "Vitória + Over 2.5",
    match: "Bayern vs Mainz 05",
    market: "Bayern vitória + Over 2.5",
    odd: "1.62",
    meta: "14/12 · 13h30 · Allianz Arena",
    confidence: "85.6%",
    stake: "Stake 3.5% (máx)",
    risk: "Risco Baixo",
    slug: "bayern-mainz-combo",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "PL",
    type: "BTTS",
    match: "Sunderland vs Newcastle",
    market: "Ambos marcam (BTTS)",
    odd: "1.72",
    meta: "14/12 · 11h · Stadium of Light",
    confidence: "71%",
    stake: "Stake 3%",
    risk: "Risco Médio",
    slug: "sunderland-newcastle-btts",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "L1",
    type: "Moneyline",
    match: "Lyon vs Le Havre",
    market: "Vitória Lyon",
    odd: "1.50",
    meta: "14/12 · 11h · Groupama Stadium",
    confidence: "76%",
    stake: "Stake 3%",
    risk: "Risco Baixo",
    slug: "lyon-lehavre-ml",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "LA LIGA",
    type: "Combo ML + Faltas",
    match: "Real Madrid vs Alavés",
    market: "Madrid vitória + Alavés >15 faltas",
    odd: "1.90",
    meta: "14/12 · 17h · Mendizorroza",
    confidence: "72%",
    stake: "Stake 2%",
    risk: "Risco Médio",
    slug: "madrid-alaves-faltas",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "PL",
    type: "Moneyline",
    match: "Brentford vs Leeds",
    market: "Vitória Brentford",
    odd: "2.05",
    meta: "14/12 · 13h30 · Gtech Community Stadium",
    confidence: "68%",
    stake: "Stake 2%",
    risk: "Risco Médio",
    slug: "brentford-leeds-ml",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "LA LIGA",
    type: "Moneyline",
    match: "Levante vs Villarreal",
    market: "Vitória Villarreal",
    odd: "1.70",
    meta: "14/12 · 14h30 · Ciutat de Valencia",
    confidence: "74%",
    stake: "Stake 2.5%",
    risk: "Risco Baixo",
    slug: "villarreal-levante-ml",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "SERIE A",
    type: "Moneyline",
    match: "Udinese vs Napoli",
    market: "Vitória Napoli",
    odd: "1.82",
    meta: "14/12 · 14h · Bluenergy Stadium",
    confidence: "69%",
    stake: "Stake 2.5%",
    risk: "Risco Médio",
    slug: "napoli-udinese-ml",
    status: "Não iniciado",
    statusTone: "pending",
  },
  {
    badge: "COPA BR",
    type: "Under 2.5",
    match: "Corinthians vs Cruzeiro",
    market: "Under 2.5 gols",
    odd: "1.90",
    meta: "14/12 · 18h · Neo Química Arena",
    confidence: "66%",
    stake: "Stake 2%",
    risk: "Risco Médio",
    slug: "corinthians-cruzeiro-under25",
    status: "Não iniciado",
    statusTone: "pending",
  },
];

export const betCardsYesterday: BetCard[] = [];

export const tableRows: TableRow[] = [
  { id: 1, pick: "Bayern vs Mainz - Bayern vitória + Over 2.5", odd: "1.62", confidence: "85.6%", stake: "3.5%" },
  { id: 2, pick: "Sunderland vs Newcastle - BTTS Sim", odd: "1.72", confidence: "71%", stake: "3%" },
  { id: 3, pick: "Lyon vs Le Havre - Vitória Lyon", odd: "1.50", confidence: "76%", stake: "3%" },
  { id: 4, pick: "Real Madrid vs Alavés - Madrid + &gt;15 faltas Alavés", odd: "1.90", confidence: "72%", stake: "2%" },
  { id: 5, pick: "Brentford vs Leeds - Vitória Brentford", odd: "2.05", confidence: "68%", stake: "2%" },
  { id: 6, pick: "Levante vs Villarreal - Vitória Villarreal", odd: "1.70", confidence: "74%", stake: "2.5%" },
  { id: 7, pick: "Udinese vs Napoli - Vitória Napoli", odd: "1.82", confidence: "69%", stake: "2.5%" },
  { id: 8, pick: "Corinthians vs Cruzeiro - Under 2.5 gols", odd: "1.90", confidence: "66%", stake: "2%" },
];

export const betDetails: Record<string, BetDetail> = {
  "bayern-mainz-combo": {
    slug: "bayern-mainz-combo",
    match: "Bayern vs Mainz 05",
    title: "Bayern vence + Over 2.5",
    market: "Bayern vitória + Over 2.5 gols",
    type: "High confidence",
    odd: "1.62",
    confidence: "85.6%",
    stake: "3.5%",
    risk: "Baixo",
    time: "13h30 (Brasília)",
    location: "Allianz Arena, Munique",
    summary:
      "Bayern lidera campanha histórica (12V-1E-0D, 3.77 gols/jogo) e encara lanterna Mainz (1 vitória em 13, pior defesa/ataque). Projeção de goleada e linha de gols alta; combo vitória + Over 2.5 captura domínio sem expor stake a handicaps pesados.",
    keyPoints: [
      "Bayern marca 49 gols em 13 jogos e sofre apenas 9; Mainz cede 1.67 g/jogo e não marca há 6 partidas.",
      "Kane em série de hat-tricks, elenco completo; Mainz vem de troca de técnico e moral baixa.",
      "Últimos diretos têm 4+ gols; Allianz Arena entrega volume ofensivo constante (3-4 gols médios).",
    ],
    validation: [
      "Stake 3.5% (máx) com stop-loss 12%; manter combo em vez de handicap -2.5 para controlar variância.",
      "Cancelar apenas se Bayern poupar Kane/linha titular ou clima extremo travar ritmo.",
      "Loop de proteção: sem upgrades de confiança &gt; 85.6%, manter Kelly 0.25.",
    ],
    status: "Não iniciado",
  },
  "sunderland-newcastle-btts": {
    slug: "sunderland-newcastle-btts",
    match: "Sunderland vs Newcastle",
    title: "Ambos marcam (BTTS)",
    market: "BTTS Sim",
    type: "Conservadora",
    odd: "1.72",
    confidence: "71%",
    stake: "3%",
    risk: "Médio",
    time: "11h (Brasília)",
    location: "Stadium of Light, Sunderland",
    summary:
      "Derby Tyne-Wear com padrão claro de gols: Sunderland invicto em casa (14 gols em 7) e Newcastle marcou em 8 saídas seguidas mas nunca manteve clean sheet fora. BTTS aparece em 6/7 jogos de Sunderland em casa e em derbies recentes.",
    keyPoints: [
      "Sunderland sofre em 6/7 jogos em casa e marca 2.0 g/jogo; Newcastle sofre em 100% das saídas.",
      "Histórico do derby: 9 derbies sem vitória do Newcastle, mas com gols para ambos em 6/7.",
      "Newcastle chega cansado de Champions, aumenta chance de falha defensiva e jogo aberto.",
    ],
    validation: [
      "Executar BTTS com stake 3%; manter se escalações titulares forem confirmadas 1h antes.",
      "Cancelar se houver clima extremo ou bloco baixo declarado de Sunderland (proteção placar).",
      "Stop-loss 12% ativo; sem elevar confiança acima de 71%.",
    ],
    status: "Não iniciado",
  },
  "lyon-lehavre-ml": {
    slug: "lyon-lehavre-ml",
    match: "Lyon vs Le Havre",
    title: "Vitória Lyon",
    market: "Moneyline Lyon",
    type: "Segura",
    odd: "1.50",
    confidence: "76%",
    stake: "3%",
    risk: "Baixo",
    time: "11h (Brasília)",
    location: "Groupama Stadium, Lyon",
    summary:
      "Lyon é forte em casa (8 vitórias nas últimas 10) e enfrenta Le Havre em crise (5 jogos sem vencer, 0 gols nos últimos 3). Favoritismo alto, com histórico recente de goleadas (4-0, 4-2).",
    keyPoints: [
      "Lyon briga por Champions e produz 6.5 escanteios/jogo; mantém ataque ativo mesmo com rotação.",
      "Le Havre é 15º, sem vitória desde outubro e ataque zerado em 3 jogos seguidos.",
      "Histórico direto recente amplamente favorável ao Lyon; gap técnico evidente.",
    ],
    validation: [
      "Stake 3% com confiança 76%; cancelar apenas se Lyon poupar metade do time titular.",
      "Manter se odds >=1.45; evitar parlay com outros favoritos para não concentrar risco.",
      "Stop-loss 12% permanece e sem confiança acima de 80%.",
    ],
    status: "Não iniciado",
  },
  "madrid-alaves-faltas": {
    slug: "madrid-alaves-faltas",
    match: "Real Madrid vs Alavés",
    title: "Madrid ML + faltas Alavés",
    market: "Madrid vence + Alavés >15 faltas",
    type: "Especial",
    odd: "1.90",
    confidence: "72%",
    stake: "2%",
    risk: "Médio",
    time: "17h (Brasília)",
    location: "Estádio Mendizorroza, Vitória",
    summary:
      "Real Madrid precisa vencer para seguir na briga pelo topo; Alavés é hiper físico e comete 15+ faltas em confrontos diretos. Combo aproveita favoritismo do Madrid e padrão de faltas altas do Alavés em bloco baixo contra elite.",
    keyPoints: [
      "Alavés cometeu 20+ faltas no último duelo; média alta em jogos contra gigantes.",
      "Madrid domina histórico (7 vitórias seguidas) e cede poucos gols (0.94 g/jogo).",
      "Linha de faltas favorecida pelo 4-1-4-1 defensivo do Alavés e dribles de Vinícius/Rodrygo.",
    ],
    validation: [
      "Stake 2% para controle de risco; manter se árbitro confirmar média alta de faltas (perfil permissivo).",
      "Cancelar se Madrid entrar muito rotacionado ou se Alavés vier com bloco alto inesperado.",
      "Stop-loss 12%; confiança travada em 72%.",
    ],
    status: "Não iniciado",
  },
  "brentford-leeds-ml": {
    slug: "brentford-leeds-ml",
    match: "Brentford vs Leeds",
    title: "Vitória Brentford",
    market: "Moneyline Brentford",
    type: "Conservadora",
    odd: "2.05",
    confidence: "68%",
    stake: "2%",
    risk: "Médio",
    time: "13h30 (Brasília)",
    location: "Gtech Community Stadium, Londres",
    summary:
      "Brentford é forte em casa (5-1-1) e encara Leeds que é 1-0-6 fora e tem defesa vazada 29 vezes. Favoritismo moderado com valor pela discrepância casa/fora e momento instável do Leeds como visitante.",
    keyPoints: [
      "Brentford marca e sofre na medida, mas converte em vitórias em casa (6V-1E-8D geral).",
      "Leeds é frágil fora (1V em 7), sofre quase 2 gols/jogo e cede espaços em transições.",
      "Padrão BTTS alto existe, mas ML tem EV melhor com vantagem do mando.",
    ],
    validation: [
      "Stake 2% por risco médio; manter se Brentford alinhar ataque titular (Toney/wingers).",
      "Cancelar se Leeds vier com linha de 5 e bloco baixo declarado reduzindo volume ofensivo.",
      "Stop-loss 12%; não elevar stake acima de 2%.",
    ],
    status: "Não iniciado",
  },
  "villarreal-levante-ml": {
    slug: "villarreal-levante-ml",
    match: "Levante vs Villarreal",
    title: "Vitória Villarreal",
    market: "Moneyline Villarreal",
    type: "Segura",
    odd: "1.70",
    confidence: "74%",
    stake: "2.5%",
    risk: "Baixo",
    time: "14h30 (Brasília)",
    location: "Estádio Ciutat de Valencia, Valência",
    summary:
      "Villarreal vem de 6 vitórias seguidas e enfrenta Levante na zona de rebaixamento com defesa que sofre 1.9 g/jogo em casa. Gap técnico e momento formam aposta segura na vitória simples.",
    keyPoints: [
      "Villarreal marca 2.1 g/jogo e domina histórico recente (7 vitórias seguidas).",
      "Levante sem vitórias em casa e defesa colapsada, concede muitos gols cedo.",
      "Elenco do Villarreal completo e motivado pela disputa na liderança.",
    ],
    validation: [
      "Stake 2.5% com confiança 74%; manter se Villarreal vier titular e clima estável.",
      "Cancelar se houver rotação pesada ou campo muito pesado que reduza ritmo ofensivo.",
      "Stop-loss 12% ativo; sem parlay para não alavancar risco desnecessário.",
    ],
    status: "Não iniciado",
  },
  "napoli-udinese-ml": {
    slug: "napoli-udinese-ml",
    match: "Udinese vs Napoli",
    title: "Vitória Napoli",
    market: "Moneyline Napoli",
    type: "Conservadora",
    odd: "1.82",
    confidence: "69%",
    stake: "2.5%",
    risk: "Médio",
    time: "14h (Brasília)",
    location: "Bluenergy Stadium, Udine",
    summary:
      "Napoli briga pelo topo (2º) com defesa sólida (7+ clean sheets) e visita Udinese irregular (11º) que oscila e tem ataque limitado. Vitória simples captura superioridade técnica e necessidade de pontos.",
    keyPoints: [
      "Napoli consistente fora, concede pouco e mantém produção ofensiva estável.",
      "Udinese é mediano em casa, sem pressão, mas com irregularidade ofensiva e poucas clean sheets.",
      "Gap técnico favorece Napoli mesmo fora; linha de gols projetada baixa-média.",
    ],
    validation: [
      "Stake 2.5% com confiança 69%; cancelar se Napoli poupar ataque titular ou acumular desfalques.",
      "Manter se odds ≥1.75; sem aumentar confiança além do planejado.",
      "Stop-loss 12% válido; evitar parlay com outros favoritos de odds baixas.",
    ],
    status: "Não iniciado",
  },
  "corinthians-cruzeiro-under25": {
    slug: "corinthians-cruzeiro-under25",
    match: "Corinthians vs Cruzeiro",
    title: "Under 2.5 gols",
    market: "Menos de 2.5 gols",
    type: "Conservadora",
    odd: "1.90",
    confidence: "66%",
    stake: "2%",
    risk: "Médio",
    time: "18h (Brasília)",
    location: "Neo Química Arena, São Paulo",
    summary:
      "Jogo de volta da semifinal da Copa do Brasil com Corinthians em vantagem 1-0. Mandante tende a controlar e proteger resultado; Cruzeiro precisa atacar mas tem ataque instável e defesa vulnerável. Cenário favorece partida truncada e de poucos gols.",
    keyPoints: [
      "Corinthians não foi vazado na Copa e joga pelo empate; tendência de bloco baixo e controle.",
      "Cruzeiro vem de 3V-7D nas últimas 10 e marcou em apenas 4; ataque pouco confiável.",
      "Histórico de mata-mata entre equilibrados costuma ser under; nervosismo reduz criação.",
    ],
    validation: [
      "Stake 2% (mercado under); manter se Corinthians vier com postura conservadora confirmada.",
      "Cancelar se houver notícia de escalação ultra ofensiva ou gol cedo que quebre script.",
      "Stop-loss 12% e sem elevar confiança além de 66%.",
    ],
    status: "Não iniciado",
  },
};
