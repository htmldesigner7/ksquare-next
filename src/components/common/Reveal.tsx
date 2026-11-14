"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li";
}

/** Fades + lifts content into view once as it scrolls onto the screen. */
export default function Reveal({ children, className, style, delay = 0, y = 28, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      // Same initial markup on server and client (no hydration mismatch); reduced motion just shows it instantly.
      transition={reduce ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
