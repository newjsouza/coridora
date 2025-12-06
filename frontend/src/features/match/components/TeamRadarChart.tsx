import React from "react";
import "./neoglass.css";

export default function TeamRadarChart() {
  return (
    <div className="neoGlassPanel">
      <h3 className="neoGlassTitleSm">Radar de atributos (mock)</h3>

      <div className="radarMock">
        <div className="radarCircle circle1"></div>
        <div className="radarCircle circle2"></div>
        <div className="radarCircle circle3"></div>

        <div className="radarLine line1"></div>
        <div className="radarLine line2"></div>
        <div className="radarLine line3"></div>

        <div className="radarPoint p1"></div>
        <div className="radarPoint p2"></div>
        <div className="radarPoint p3"></div>
        <div className="radarPoint p4"></div>
        <div className="radarPoint p5"></div>
      </div>
    </div>
  );
}
