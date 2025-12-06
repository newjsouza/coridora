import React, { useState, ReactElement } from "react";
import "./neoglass.css";

interface TabChildProps {
  title?: string;
}

type TabChild = ReactElement<TabChildProps>;

interface TabItem {
  id: string;
  label: string;
  content: ReactElement;
}

interface Props {
  children?: TabChild | TabChild[];
  items?: TabItem[];
}

export default function MobileTabs({ children, items }: Props) {
  const tabsFromChildren = React.Children.toArray(children ?? []) as TabChild[];
  const tabsFromItems = (items ?? []).map((item) => ({
    key: item.id,
    label: item.label,
    node: item.content,
  }));

  const normalized =
    tabsFromItems.length > 0
      ? tabsFromItems
      : tabsFromChildren.map((child, idx) => ({
          key: child.key?.toString() ?? `tab-${idx}`,
          label: child.props.title ?? `Aba ${idx + 1}`,
          node: child,
        }));

  const [active, setActive] = useState(0);

  if (!normalized.length) return null;

  return (
    <div className="mobileOnly">
      <div className="tabsHeader">
        {normalized.map((tab, index) => (
          <button
            key={tab.key}
            className={`tabButton ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabContent">{normalized[active].node}</div>
    </div>
  );
}
