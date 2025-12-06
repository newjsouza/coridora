import React from "react";
import "./neoglass.css";

type TeamStats = {
  form: string;
  goalsFor: number;
  goalsAgainst: number;
  attack: number;
  defense: number;
  trend: string;
};

interface Props {
  title: string;
  stats: TeamStats | null;
}

export default function TeamCard({ title, stats }: Props) {
  if (!stats) return null;

  return (
    <div className="neoGlassPanel teamCard">
      <h3 className="teamCardTitle">{title}</h3>

      <div className="teamCardGrid">
        <div>
          <span className="teamLabel">Forma</span>
          <strong>{stats.form}</strong>
        </div>
        <div>
          <span className="teamLabel">Gols marcados</span>
          <strong>{stats.goalsFor}</strong>
        </div>
        <div>
          <span className="teamLabel">Gols sofridos</span>
          <strong>{stats.goalsAgainst}</strong>
        </div>
        <div>
          <span className="teamLabel">Ataque</span>
          <strong>{stats.attack}%</strong>
        </div>
        <div>
          <span className="teamLabel">Defesa</span>
          <strong>{stats.defense}%</strong>
        </div>
        <div>
          <span className="teamLabel">Tendência</span>
          <strong>{stats.trend}</strong>
        </div>
      </div>
    </div>
  );
}
