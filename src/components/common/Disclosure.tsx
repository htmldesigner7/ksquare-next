"use client";

import React, { useEffect, useId, useState } from "react";
import Collapse from "@/components/common/Collapse";

/**
 * Smooth replacement for the native <details>/<summary> (which opens instantly).
 * - Same open/close motion as every other dropdown (see Collapse).
 * - Style the open state from the summary with `group-data-[open=true]:` utilities.
 * - `group` makes it exclusive: opening one closes the others in the same group (like <details name>).
 */
export default function Disclosure({
  summary,
  children,
  defaultOpen = false,
  group,
  className = "",
  summaryClassName = "",
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  group?: string;
  className?: string;
  summaryClassName?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  useEffect(() => {
    if (!group) return;
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<{ group: string; id: string }>).detail;
      if (d.group === group && d.id !== uid) setOpen(false);
    };
    window.addEventListener("disclosure-open", onOpen);
    return () => window.removeEventListener("disclosure-open", onOpen);
  }, [group, uid]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && group) window.dispatchEvent(new CustomEvent("disclosure-open", { detail: { group, id: uid } }));
  };

  return (
    <div className={`group ${className}`} data-open={open}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${uid}-panel`}
        onClick={toggle}
        className={`w-full cursor-pointer text-left ${summaryClassName}`}
      >
        {summary}
      </button>
      <Collapse open={open} id={`${uid}-panel`}>
        {children}
      </Collapse>
    </div>
  );
}
