import React from "react";

export const AppHeader: React.FC = () => (
  <header className="app-header">
    <div className="app-header-left">
      <div className="logo-circle">B</div>
      <div className="app-title">
        <span>Betano</span>
        <span>Coridora especial</span>
      </div>
    </div>
    <div className="app-header-right">
      <button className="btn-outline">Nova conta</button>
      <button className="btn-solid">Entrar</button>
    </div>
  </header>
);
