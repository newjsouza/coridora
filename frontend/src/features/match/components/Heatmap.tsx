import React from "react";
import "./neoglass.css";

export default function Heatmap() {
  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Heatmap ofensivo (mock)</h3>
      <div className="heatmapGrid">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="heatCell"></div>
        ))}
      </div>
    </div>
  );
}
