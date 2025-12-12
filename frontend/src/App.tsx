import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReportPage } from "./pages/ReportPage";
import { BetsPage } from "./pages/BetsPage";
import { WarningsPage } from "./pages/WarningsPage";
import { BetDetailPage } from "./pages/BetDetailPage";
import { BingoPage } from "./pages/BingoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReportPage />} />
        <Route path="/apostas" element={<BetsPage />} />
        <Route path="/aposta/:slug" element={<BetDetailPage />} />
        <Route path="/bingo" element={<BingoPage />} />
        <Route path="/avisos" element={<WarningsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
