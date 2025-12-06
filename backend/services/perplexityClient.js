const axios = require("axios");

const PERPLEXITY_API_URL = "https://api.perplexity.ai/chat/completions";

/**
 * Chama a API da Perplexity para obter uma análise APEX-ML do confronto.
 * IMPORTANTE: a chave NUNCA deve ser exposta no frontend.
 */
async function callPerplexityForMatch(match) {
  const apiKey = process.env.PPLX_API_KEY_1 || process.env.PPLX_API_KEY_2;

  if (!apiKey) {
    console.warn("[Perplexity] Nenhuma API key configurada. Retornando análise mock.");
    return {
      content:
        "Análise mock (sem Perplexity): este é um texto de exemplo de recomendação para testes locais.",
      model: "mock-local",
      usage: { input_tokens: 0, output_tokens: 0 }
    };
  }

  const systemPrompt =
    "Você é o APEX-ML, um analista profissional de apostas esportivas. " +
    "Responda de forma objetiva, em português, com foco em probabilidades, valor esperado e gestão de banca.";

  const userPrompt = `
Confronto: ${match.home} vs ${match.away}
Liga: ${match.league}
Data: ${match.date} ${match.time}

Quero:
1. Análise do confronto (força ofensiva, defensiva, momento recente).
2. 1 a 3 sugestões de mercados de aposta com foco em valor esperado (escanteios, gols, resultado etc.).
3. Risco estimado (baixo/médio/alto).
4. Aviso se NÃO houver valor em apostar.
`;

  try {
    const response = await axios.post(
      PERPLEXITY_API_URL,
      {
        model: "sonar-medium-online",
        max_tokens: 600,
        temperature: 0.2,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        timeout: 60000
      }
    );

    const choice = response.data.choices?.[0];
    const content = choice?.message?.content || "Não foi possível obter análise detalhada.";

    return {
      content,
      model: response.data.model || "perplexity",
      usage: response.data.usage || {}
    };
  } catch (error) {
    console.error("[Perplexity] Erro ao chamar API:", error?.response?.data || error.message);

    return {
      content:
        "Falha ao conectar com a Perplexity. Use esta análise apenas como exemplo e tente novamente em alguns minutos.",
      model: "perplexity-error",
      usage: {}
    };
  }
}

module.exports = { callPerplexityForMatch };
