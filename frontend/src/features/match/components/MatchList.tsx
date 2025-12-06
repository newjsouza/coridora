import React, { useEffect } from "react";
import { useAppStore } from "@store/useAppStore";
import { mockMatches } from "@features/match/mock/mockData";
import { fetchAnalysis } from "@features/match/api/analysisClient";
import type { Match } from "types/types";
import MatchCard from "./MatchCard";

export default function MatchList() {
  const {
    selectedLeague,
    selectedMatch,
    setMatch,
    setAnalysis,
    loading,
    setLoading
  } = useAppStore();

  const matchesFiltered = mockMatches.filter((m) => m.league === selectedLeague);

  // Auto-seleciona a primeira partida da liga, se nenhuma estiver selecionada
  useEffect(() => {
    if (!selectedMatch && matchesFiltered.length > 0) {
      handleSelect(matchesFiltered[0], false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLeague]);

  async function handleSelect(match: Match, forceLoad = true) {
    setMatch(match);

    if (!forceLoad) {
      const currentAnalysis = await fetchAnalysis(match.id);
      setAnalysis(currentAnalysis);
      return;
    }

    setLoading(true);
    const analysis = await fetchAnalysis(match.id);
    setAnalysis(analysis);
    setLoading(false);
  }

  return (
    <section className="matches-panel">
      <div className="panel-header">
        <h2>Partidas</h2>
        <p>Selecione um confronto para ver a recomendação APEX-ML.</p>
      </div>

      <div className="match-list">
        {matchesFiltered.map((m) => (
          <MatchCard
            key={m.id}
            match={m}
            active={selectedMatch?.id === m.id}
            onSelect={() => handleSelect(m)}
            loading={loading && selectedMatch?.id === m.id}
          />
        ))}

        {matchesFiltered.length === 0 && (
          <p className="empty">Nenhuma partida mock disponível para esta liga ainda.</p>
        )}
      </div>
    </section>
  );
}
