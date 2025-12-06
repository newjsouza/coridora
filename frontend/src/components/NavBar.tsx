import React from "react";
import { useNavigationStore } from "@store/useNavigationStore";

export function NavBar() {
  const { currentPage, setPage } = useNavigationStore();

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "methodology", label: "Metodologia APEX-ML" },
    { id: "disclaimer", label: "Responsabilidade" }
  ];

  return (
    <nav className="navbar">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`navbar-tab ${currentPage === t.id ? "active" : ""}`}
          onClick={() => setPage(t.id)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
