import React from "react";
import type { FactCheckStatus } from "types/types";

interface Props {
  status: FactCheckStatus;
}

export default function StatusBadge({ status }: Props) {
  return (
    <div className={`status-badge status-${status.level}`}>
      <span className="status-dot" />
      <span>{status.message}</span>
    </div>
  );
}
