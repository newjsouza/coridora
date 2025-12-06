import React, { useState, ReactElement } from "react";
import "./neoglass.css";

interface TabChildProps {
  title?: string;
}

type TabChild = ReactElement<TabChildProps>;

interface Props {
  children: TabChild | TabChild[];
}

export default function MobileTabs({ children }: Props) {
  const tabs = React.Children.toArray(children) as TabChild[];
  const [active, setActive] = useState(0);

  if (!tabs.length) return null;

  return (
    <div className="mobileOnly">
      <div className="tabsHeader">
        {tabs.map((child, index) => (
          <button
            key={index}
            className={`tabButton ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {child.props.title ?? `Aba ${index + 1}`}
          </button>
        ))}
      </div>

      <div className="tabContent">{tabs[active]}</div>
    </div>
  );
}
