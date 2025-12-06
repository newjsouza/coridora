const matches = [
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
  }
];

function getMatchesByLeague(code) {
  return matches.filter((m) => m.league === code);
}

function getMatchById(id) {
  return matches.find((m) => m.id === id) || null;
}

module.exports = { matches, getMatchesByLeague, getMatchById };
