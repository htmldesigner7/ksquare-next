"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

export default function TocSidebar({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="flex flex-col gap-[12px]">
      {items.map((item, i) => (
        <a
          key={`${item.id}-${i}`}
          href={`#${item.id}`}
          onClick={() => setActiveId(item.id)}
          className={`font-archivo text-[24px] leading-[26px] pl-[16px] py-[4px] border-l-2 transition-colors ${
            activeId === item.id
              ? "border-primary text-primary font-normal"
              : "border-transparent text-[#666666] hover:text-primary hover:border-primary font-medium"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
