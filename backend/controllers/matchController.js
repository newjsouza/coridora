const { getMatchesByLeague } = require("../data/matches");

function getMatches(req, res) {
  const league = req.query.league;

  if (!league) {
    return res.status(400).json({ error: "Parâmetro 'league' é obrigatório." });
  }

  const data = getMatchesByLeague(league);

  return res.json({ matches: data });
}

module.exports = { getMatches };
