import React from "react";
import { useNavigate } from "react-router-dom";
import "./subpages.css";

export const SubPageBase: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const nav = useNavigate();

  return (
    <div className="subpage">
      <button className="sub-back" onClick={() => nav(-1)}>
        ← Voltar
      </button>

      <h2 className="sub-title">{title}</h2>

      <div className="sub-content">{children}</div>
    </div>
  );
};
