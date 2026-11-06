import React from "react";

/**
 * The ONE open/close motion used by every accordion and dropdown on the site.
 * Height animates 0fr -> 1fr (so it works for any content height, no JS measuring) with a soft fade,
 * on a single shared duration + easing so every dropdown feels identical.
 */
export const COLLAPSE_MOTION =
  "transition-[grid-template-rows,opacity] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function Collapse({
  open,
  children,
  id,
  className = "",
}: {
  open: boolean;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div
      id={id}
      aria-hidden={!open}
      inert={!open}
      className={`grid ${COLLAPSE_MOTION} ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} ${className}`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
