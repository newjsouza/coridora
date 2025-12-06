import type { Match, AnalysisResult } from "types/types";

export const leagues = [
	{ id: "br", name: "Brasileirão", code: "BR" },
	{ id: "ucl", name: "Champions League", code: "UCL" },
	{ id: "pl", name: "Premier League", code: "PL" },
	{ id: "bund", name: "Bundesliga", code: "BUND" },
	{ id: "laliga", name: "La Liga", code: "LL" }
];

export const mockMatches: Match[] = [
	{
		id: "001",
		league: "BR",
		home: "Flamengo",
		away: "Botafogo",
		date: "2025-12-10",
		time: "20:00"
	},
	{
		id: "002",
		league: "PL",
		home: "Manchester City",
		away: "Chelsea",
		date: "2025-12-10",
		time: "16:00"
	},
	{
		id: "003",
		league: "UCL",
		home: "Real Madrid",
		away: "Barcelona",
		date: "2025-12-12",
		time: "17:00"
	},
	{
		id: "004",
		league: "LL",
		home: "Atlético de Madrid",
		away: "Sevilla",
		date: "2025-12-09",
		time: "19:00"
	}
];

export const mockAnalysis: AnalysisResult[] = [
	{
		matchId: "001",
		confidence: 86,
		recommendation: "Mercado sugerido: +2.5 gols ou ambas marcam.",
		reasoning:
			"Flamengo e Botafogo vêm de jogos com alta produção ofensiva. Linhas de ataque fortes, defesas expostas e tendência de jogos abertos em clássico carioca.",
		odds: { fair: 1.72, market: 1.85 },
		factCheck: {
			level: "ok",
			message: "Dados recentes de desempenho ofensivo confirmados em múltiplas fontes.",
			sourcesChecked: ["Sofascore (mock)", "Transfermarkt (mock)", "ESPN (mock)"]
		}
	},
	{
		matchId: "002",
		confidence: 79,
		recommendation: "Mercado sugerido: vitória do Manchester City + under 4.5 gols.",
		reasoning:
			"City é favorito claro em casa, com controle de posse e criação de chances acima da média. Chelsea em fase de reconstrução, devendo adotar postura mais reativa.",
		odds: { fair: 1.55, market: 1.60 },
		factCheck: {
			level: "ok",
			message: "Favoritismo consistente em casas e modelos estatísticos.",
			sourcesChecked: ["Sofascore (mock)", "Modelos internos APEX-ML (mock)"]
		}
	},
	{
		matchId: "003",
		confidence: 68,
		recommendation:
			"Mercado sugerido: over 9.5 escanteios, mas evitar mercado de resultado final.",
		reasoning:
			"Clássico de altíssima variância entre Real Madrid e Barcelona. Linha de escanteios costuma ser alta devido ao volume ofensivo de ambos, mas resultado é imprevisível.",
		odds: { fair: 1.90, market: 2.00 },
		factCheck: {
			level: "warning",
			message: "Histórico recente mostra grandes oscilações de desempenho entre as equipes.",
			sourcesChecked: ["Histórico UCL (mock)", "La Liga (mock)"]
		}
	},
	{
		matchId: "004",
		confidence: 72,
		recommendation: "Mercado sugerido: under 3.5 gols e dupla chance para o mandante.",
		reasoning:
			"Atlético tende a jogos controlados em casa, com defesa sólida. Sevilla oscila bastante ofensivamente, o que sugere partida mais travada.",
		odds: { fair: 1.80, market: 1.88 },
		factCheck: {
			level: "ok",
			message: "Tendências defensivas confirmadas nos últimos 10 jogos oficiais.",
			sourcesChecked: ["Estatísticas internas APEX-ML (mock)"]
		}
	}
];
