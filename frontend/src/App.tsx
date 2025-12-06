import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigationStore } from "@store/useNavigationStore";
import { NavBar } from "@components/NavBar";

import { Dashboard } from "@app/pages/Dashboard";
import { Methodology } from "@app/pages/Methodology";
import { Disclaimer } from "@app/pages/Disclaimer";
import { Insights } from "./pages/subpages/Insights";
import { Analise } from "./pages/subpages/Analise";
import { Graficos } from "./pages/subpages/Graficos";
import { IA } from "./pages/subpages/IA";
import { Financeiro } from "./pages/subpages/Financeiro";
import { Cenarios } from "./pages/subpages/Cenarios";

import "./styles.css";

export default function App() {
  const { currentPage } = useNavigationStore();

  function renderPage() {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "methodology":
        return <Methodology />;
      case "disclaimer":
        return <Disclaimer />;
      default:
        return <Dashboard />;
    }
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={renderPage()} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/analise" element={<Analise />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/cenarios" element={<Cenarios />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
