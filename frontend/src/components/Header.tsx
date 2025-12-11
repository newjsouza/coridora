import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header: React.FC = () => {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    nav(path);
    setOpen(false);
  };

  return (
    <>
      <header className="top-header">
        <div className="logo" onClick={() => go("/")}>
          APEX-ML
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <button onClick={() => go("/")}>Dashboard</button>
          <button onClick={() => go("/insights")}>Insights</button>
          <button onClick={() => go("/analise")}>Análise</button>
          <button onClick={() => go("/graficos")}>Gráficos</button>
          <button onClick={() => go("/ia")}>IA</button>
          <button onClick={() => go("/financeiro")}>Financeiro</button>
          <button onClick={() => go("/cenarios")}>Cenários</button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰ Menu
        </button>
      </header>

      {/* Mobile Slide Panel */}
      {open && (
        <div className="mobile-menu">
          <button onClick={() => go("/")}>Dashboard</button>
          <button onClick={() => go("/insights")}>Insights</button>
          <button onClick={() => go("/analise")}>Análise</button>
          <button onClick={() => go("/graficos")}>Gráficos</button>
          <button onClick={() => go("/ia")}>IA</button>
          <button onClick={() => go("/financeiro")}>Financeiro</button>
          <button onClick={() => go("/cenarios")}>Cenários</button>
        </div>
      )}
    </>
  );
};

export default Header;
