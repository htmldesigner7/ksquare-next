"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/** Geometry shared by the circle-step timelines (design px, Figma). */
export const DISC_R = 115.6; // white disc
export const HALO_R = 133.7; // soft grey halo around it
export const STROKE = 5.4;
const REACH = 440; // side of the square drawing area around one disc (arcs may overflow it)

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) => `${(cx + r * Math.cos(rad(deg))).toFixed(2)} ${(cy + r * Math.sin(rad(deg))).toFixed(2)}`;
/** SVG arc along a circle from angle a to angle b (degrees, 0 = right, 90 = down). */
export const arc = (cx: number, cy: number, r: number, a: number, b: number) => {
  const sweep = b > a ? 1 : 0;
  const large = Math.abs(b - a) > 180 ? 1 : 0;
  return `M ${pt(cx, cy, r, a)} A ${r} ${r} 0 ${large} ${sweep} ${pt(cx, cy, r, b)}`;
};

/** [centre x, centre y, radius, start angle, end angle] in canvas px. */
export type ArcSpec = readonly [number, number, number, number, number];
/** An icon is an image file path (.svg / .png / .webp), e.g. "/assets/process/step-1.svg". */
export type StepIcon = string;

/**
 * One step of the circle timeline, fully self-contained: its own small SVG (the ring + the arrowed arc), the halo + white disc,
 * and an icon slot. The icon is a prop, so any page can pass its own artwork; by default it is centred in the disc.
 * `disc` / arcs / `head` use the canvas coordinate system of the timeline they sit in.
 */
export default function StepArt({
  disc,
  ring,
  arrow,
  head,
  fills,
  icon,
  iconRect,
  delay = 0,
}: {
  disc: readonly [number, number];
  ring?: ArcSpec;
  arrow?: ArcSpec;
  head?: readonly (readonly [number, number])[];
  /** Filled outlines for the arcs (exported Figma paths); used instead of ring / arrow / head when given. */
  fills?: readonly string[];
  icon: StepIcon;
  /** Optional [x, y, w, h] of the icon in canvas px; defaults to a 128px icon centred in the disc. */
  iconRect?: readonly [number, number, number, number];
  /** Seconds before this step animates in on scroll (stagger left to right). */
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const view = { once: true, margin: "0px 0px -80px 0px" } as const;
  const t = (d: number, dur = 0.6) => (reduce ? { duration: 0 } : { duration: dur, delay: delay + d, ease });
  const [cx, cy] = disc;
  const [ix, iy, iw, ih] = iconRect ?? [cx - 64, cy - 64, 128, 128];
  const box = HALO_R * 2;
  return (
    <div className="ks-step absolute inset-0 pointer-events-none">
      {/* arcs: a small SVG of its own around this disc, drawn in canvas coordinates */}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={view}
        transition={t(0.2, 0.8)}
        className="ks-arcs absolute overflow-visible"
        style={{ left: cx - REACH / 2, top: cy - REACH / 2, width: REACH, height: REACH }}
        viewBox={`${cx - REACH / 2} ${cy - REACH / 2} ${REACH} ${REACH}`}
        fill="none"
        strokeLinecap="butt"
      >
        {fills?.map((d, k) => <path key={k} d={d} fill="currentColor" />)}
        {ring && <path d={arc(...ring)} stroke="currentColor" strokeWidth={STROKE} />}
        {arrow && <path d={arc(...arrow)} stroke="currentColor" strokeWidth={STROKE} />}
        {head && <polyline points={head.map((p) => p.join(",")).join(" ")} stroke="currentColor" strokeWidth={STROKE} strokeLinejoin="miter" />}
      </motion.svg>
      {/* halo, white disc and icon move together on hover */}
      <motion.div initial={{ opacity: 0, scale: 0.82 }} whileInView={{ opacity: 1, scale: 1 }} viewport={view} transition={t(0)} className="ks-disc absolute rounded-full pointer-events-auto" style={{ left: cx - HALO_R, top: cy - HALO_R, width: box, height: box }}>
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, transparent 0 85%, rgba(60,60,60,0.15) 86%, rgba(110,110,110,0.09) 90.5%, rgba(160,160,160,0.045) 95%, transparent 100%)",
          }}
        />
        <span className="absolute rounded-full bg-white" style={{ left: HALO_R - DISC_R, top: HALO_R - DISC_R, width: DISC_R * 2, height: DISC_R * 2 }} />
        <span className="ks-icon absolute block" style={{ left: ix - (cx - HALO_R), top: iy - (cy - HALO_R), width: iw, height: ih }}>
          <motion.span initial={{ opacity: 0, scale: 0.5, rotate: -14 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={view} transition={t(0.25, 0.55)} className="absolute inset-0 block">
            <Image src={icon} alt="" fill sizes="140px" unoptimized className="object-contain" />
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}
