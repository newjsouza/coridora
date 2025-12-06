import React from "react";
import { useNavigationStore } from "@store/useNavigationStore";
import { NavBar } from "@components/NavBar";

import { Dashboard } from "@app/pages/Dashboard";
import { Methodology } from "@app/pages/Methodology";
import { Disclaimer } from "@app/pages/Disclaimer";

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
    <div className="app-container">
      <NavBar />
      {renderPage()}
    </div>
  );
}
