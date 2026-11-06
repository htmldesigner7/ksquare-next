import React from "react";
import { PROCESS_ICONS } from "./ProcessIcons";

/**
 * The six-circle process artwork, built entirely from code (no raster or exported artwork):
 * CSS discs with a soft halo, SVG arcs + chevron arrowheads computed from a few numbers, and inline SVG icons.
 * Design px on a 1600 x 303 canvas, matching the Figma timeline.
 */
const STEP = 265.8; // horizontal pitch between discs
const X0 = 135.6; // first disc centre x
export const DISC_R = 115.6; // white disc
export const HALO_R = 133.7; // soft grey halo around it
export const STROKE = 5.4;
export const ARC_COLOR = "#C0C5E5";
const RING_R = 132.7; // the large arc wrapped around each disc
const ARROW_R = 157; // the arrowed arc outside it

export const rad = (deg: number) => (deg * Math.PI) / 180;
export const pt = (cx: number, cy: number, r: number, deg: number) => `${(cx + r * Math.cos(rad(deg))).toFixed(2)} ${(cy + r * Math.sin(rad(deg))).toFixed(2)}`;
/** SVG arc path along a circle from angle a to angle b (degrees, 0 = right, 90 = down). */
export const arc = (cx: number, cy: number, r: number, a: number, b: number) => {
  const sweep = b > a ? 1 : 0;
  const large = Math.abs(b - a) > 180 ? 1 : 0;
  return `M ${pt(cx, cy, r, a)} A ${r} ${r} 0 ${large} ${sweep} ${pt(cx, cy, r, b)}`;
};

/** Steps alternate: odd steps sit high with their arcs underneath, even steps sit low with arcs above. */
const steps = Array.from({ length: 6 }, (_, i) => {
  const cx = X0 + STEP * i;
  const low = i % 2 === 1;
  const discY = low ? 169.55 : 140.55;
  return { cx, low, discY, ringY: low ? 164.9 : 137.1, arrowY: low ? 159.6 : 143.5, last: i === 5, iconY: low ? 105.55 : 76.55 };
});
// Last disc sits a little higher than the pattern and has no arrow arc.
steps[5].discY = 165.55;
steps[5].iconY = 101.55;

/** Chevron arrowheads as three points: [arm start, tip, arm end]. */
const HEADS: Record<number, [number, number][]> = {
  0: [[198.34, 265.05], [227.27, 270.47], [219.76, 298.93]],
  1: [[509.75, 18.29], [514.1, 47.4], [484.75, 49.59]],
  2: [[729.83, 265.05], [758.77, 270.47], [751.25, 298.93]],
  3: [[1015.89, 45.5], [1045.2, 48.3], [1045.9, 18.9]],
  4: [[1261.39, 265.05], [1290.32, 270.47], [1282.81, 298.93]],
};

export default function ProcessTimelineArt() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {steps.map((s, i) => {
        const Icon = PROCESS_ICONS[i];
        return (
          <React.Fragment key={i}>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 303" fill="none" strokeLinecap="butt">
              {/* large ring hugging the disc: bottom half for high steps, top half for low steps */}
              <path d={s.low ? arc(s.cx, s.ringY, RING_R, -5.2, -174.8) : arc(s.cx, s.ringY, RING_R, -5.6, 174.4)} stroke={ARC_COLOR} strokeWidth={STROKE} />
              {!s.last && (
                <>
                  <path d={s.low ? arc(s.cx, s.arrowY, ARROW_R, -124.8, -45.8) : arc(s.cx, s.arrowY, ARROW_R, 134.4, 54.7)} stroke={ARC_COLOR} strokeWidth={STROKE} />
                  <polyline points={HEADS[i].map((p) => p.join(",")).join(" ")} stroke={ARC_COLOR} strokeWidth={STROKE} strokeLinejoin="miter" />
                </>
              )}
            </svg>
            {/* halo, then white disc */}
            <span
              className="absolute rounded-full"
              style={{
                left: s.cx - HALO_R,
                top: s.discY - HALO_R,
                width: HALO_R * 2,
                height: HALO_R * 2,
                background:
                  "radial-gradient(closest-side, transparent 0 85%, rgba(60,60,60,0.15) 86%, rgba(110,110,110,0.09) 90.5%, rgba(160,160,160,0.045) 95%, transparent 100%)",
              }}
            />
            <span className="absolute rounded-full bg-white" style={{ left: s.cx - DISC_R, top: s.discY - DISC_R, width: DISC_R * 2, height: DISC_R * 2 }} />
            <Icon className="absolute block" style={{ left: s.cx - 64, top: s.iconY, width: 128, height: 128 }} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
