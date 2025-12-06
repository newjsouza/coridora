import React from "react";
import "./factcheck.css";

type FactStatus = "ok" | "warning" | "error";

interface FactCheckBadgeProps {
  status?: FactStatus;
}

export function FactCheckBadge({ status = "ok" }: FactCheckBadgeProps) {
  const map = {
    ok: {
      label: "Dados checados em múltiplas fontes",
      className: "factBadge fact-ok",
    },
    warning: {
      label: "Algumas informações ainda em revisão",
      className: "factBadge fact-warning",
    },
    error: {
      label: "Inconsistências detectadas – revisar antes de apostar",
      className: "factBadge fact-error",
    },
  } as const;

  const cfg = map[status];

  return (
    <div className={cfg.className}>
      <span className="factDot" />
      <span className="factText">{cfg.label}</span>
    </div>
  );
}
