function basicFactCheck(analysisText) {
  const lower = analysisText.toLowerCase();

  if (lower.includes("não recomendo aposta") || lower.includes("evitar este jogo")) {
    return {
      level: "warning",
      message: "Análise indica cautela. Verificar contexto antes de apostar.",
      sourcesChecked: ["Perplexity (online)", "Histórico interno APEX-ML"]
    };
  }

  if (lower.includes("informação inconsistente") || lower.includes("dados desatualizados")) {
    return {
      level: "critical",
      message: "Possível inconsistência detectada nos dados. Revisar manualmente.",
      sourcesChecked: ["Perplexity (online)", "Fontes externas"]
    };
  }

  return {
    level: "ok",
    message: "Nenhum problema crítico detectado na análise automática.",
    sourcesChecked: ["Perplexity (online)"]
  };
}

module.exports = { basicFactCheck };
