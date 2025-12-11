import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReportPage } from "./pages/ReportPage";
import { BetsPage } from "./pages/BetsPage";
import { TablePage } from "./pages/TablePage";
import { ChartsPage } from "./pages/ChartsPage";
import { WarningsPage } from "./pages/WarningsPage";
import { BetDetailPage } from "./pages/BetDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReportPage />} />
        <Route path="/apostas" element={<BetsPage />} />
        <Route path="/aposta/:slug" element={<BetDetailPage />} />
        <Route path="/tabelas" element={<TablePage />} />
        <Route path="/graficos" element={<ChartsPage />} />
        <Route path="/avisos" element={<WarningsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
