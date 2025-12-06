const { getMatchById } = require("../data/matches");
const { basicFactCheck } = require("../factchecker/factCheckService");
const { callPerplexityForMatch } = require("./perplexityClient");

/**
 * Gera objeto de análise no formato esperado pelo frontend.
 */
async function analyzeMatch(matchId) {
  const match = getMatchById(matchId);

  if (!match) {
    return null;
  }

  const perplexityResult = await callPerplexityForMatch(match);
  const factCheck = basicFactCheck(perplexityResult.content);

  // Simulação de cálculo de confiança e odds
  const confidence = 75;
  const fairOdd = 1.85;
  const marketOdd = 1.95;

  return {
    matchId: match.id,
    confidence,
    recommendation: "Exemplo: over 9.5 escanteios pode ter valor, dependendo da linha de mercado.",
    reasoning: perplexityResult.content,
    odds: {
      fair: fairOdd,
      market: marketOdd
    },
    factCheck
  };
}

module.exports = { analyzeMatch };
