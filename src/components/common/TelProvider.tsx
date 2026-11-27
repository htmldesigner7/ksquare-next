"use client";

import { createContext, useContext, type ReactNode } from "react";

const TelContext = createContext<string | null>(null);

/** Supplies the Admin > Settings "Tel number" to every button below it. */
export function TelProvider({ tel, children }: { tel: string | null; children: ReactNode }) {
  return <TelContext.Provider value={tel}>{children}</TelContext.Provider>;
}

const EXPERT_LABEL = /^\s*talk to (our |an )?(experts?|team)\s*$/i;

/** "Talk to Our Experts" / "Talk to Our Team" buttons dial the settings number (`tel:` link); every other link is returned unchanged. */
export function useCtaHref(label: unknown, href: string | undefined): string | undefined {
  const tel = useContext(TelContext);
  const digits = tel?.replace(/[^\d+]/g, "");
  return digits && typeof label === "string" && EXPERT_LABEL.test(label) ? `tel:${digits}` : href;
}

/** The raw Settings tel number (as typed), or null when none is set. */
export const useTel = () => useContext(TelContext);
