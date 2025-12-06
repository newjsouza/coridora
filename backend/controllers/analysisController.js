const { analyzeMatch } = require("../services/analysisService");

async function analyze(req, res) {
  const matchId = req.params.matchId;

  if (!matchId) {
    return res.status(400).json({ error: "Parâmetro 'matchId' é obrigatório." });
  }

  const result = await analyzeMatch(matchId);

  if (!result) {
    return res.status(404).json({ error: "Partida não encontrada." });
  }

  return res.json({ analysis: result });
}

module.exports = { analyze };
