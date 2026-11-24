import React from "react";

/** Arrow shown on CTA buttons (replaces the old dot). Follows the text colour; set colours with text-* / group-hover:text-* classes. */
export default function ButtonArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden className={`shrink-0 transition-colors ${className}`}>
      <path d="M0.000239918 0.000142582L9.3432 4.8189L0.740279 10.0002L3.45619 5.22508L0.000239918 0.000142582Z" fill="currentColor" />
    </svg>
  );
}
