import React from "react";
import "./neoglass.css";
import type { Match } from "types/types";

interface Props {
  match: Match | null;
}

export default function ExtendedAnalysis({ match }: Props) {
  if (!match) return null;

  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Análise estendida (modo mock)</h3>

      <div className="analysisGrid">
        <div className="gridBox">
          <span>Forma recente</span>
          <strong>3V • 1E • 1D</strong>
        </div>

        <div className="gridBox">
          <span>Força ofensiva</span>
          <strong>Alta</strong>
        </div>

        <div className="gridBox">
          <span>Força defensiva</span>
          <strong>Média</strong>
        </div>

        <div className="gridBox">
          <span>Moral da equipe</span>
          <strong>Positiva</strong>
        </div>

        <div className="gridBox">
          <span>Pressão da torcida</span>
          <strong>Alta (jogo em casa)</strong>
        </div>

        <div className="gridBox">
          <span>Estilo de jogo</span>
          <strong>Ofensivo e vertical</strong>
        </div>
      </div>
    </div>
  );
}
