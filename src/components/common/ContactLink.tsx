import React from "react";

/** Turns a phone number / email / postal address string into the right link. */
export function contactHref(text: string): string {
  const t = text.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return `mailto:${t}`;
  const digits = t.replace(/\D/g, "");
  if (digits.length >= 8 && !/[a-z]/i.test(t)) return `tel:+${digits}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t)}`;
}

/**
 * Phone, email or address as a link that opens in a new tab (tel:/mailto:/Google Maps).
 * Inherits the surrounding text style; only adds a hover colour so it reads as a link.
 */
export default function ContactLink({ text, className = "" }: { text: string; className?: string }) {
  return (
    <a
      href={contactHref(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors duration-300 hover:text-primary hover:underline underline-offset-4 decoration-1 ${className}`}
    >
      {text}
    </a>
  );
}
