import React from "react";
import type { Match } from "types/types";

interface Props {
  match: Match;
  active: boolean;
  onSelect: () => void;
  loading: boolean;
}

export default function MatchCard({ match, active, onSelect, loading }: Props) {
  return (
    <button
      className={`match-card ${active ? "active" : ""}`}
      onClick={onSelect}
      disabled={loading}
    >
      <div className="match-card-row">
        <span className="match-team">{match.home}</span>
        <span className="match-vs">vs</span>
        <span className="match-team">{match.away}</span>
      </div>
      <div className="match-card-meta">
        <span>
          {match.date} · {match.time}
        </span>
        {loading && <span className="match-loading">Carregando...</span>}
      </div>
    </button>
  );
}
