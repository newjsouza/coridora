import React from "react";
import "./StatusBadge.css";

interface Props {
  text: string;
  type?: "ok" | "warn" | "danger";
}

export const StatusBadge: React.FC<Props> = ({ text, type = "ok" }) => {
  return <span className={`status-badge status-${type}`}>{text}</span>;
};
