import React from "react";
import AnimatedCounter from "@/components/common/AnimatedCounter";

/** A stat like "8+", "18k" or "500000+": counts up when it scrolls into view; anything non-numeric ("In-House") renders as is. */
export default function StatValue({ value, className = "" }: { value: string; className?: string }) {
  const m = value.trim().match(/^(\d+)(\D*)$/);
  if (!m) return <span className={className}>{value}</span>;
  return <AnimatedCounter end={Number(m[1])} suffix={m[2]} className={className} />;
}
