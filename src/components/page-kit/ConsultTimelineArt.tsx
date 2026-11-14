import React from "react";
import StepArt, { type StepIcon } from "./StepArt";
import { CONSULT_ARCS } from "./processArcs";

/** Default icon files (public/assets/process), left to right. */
export const CONSULT_ICON_SRC = [1, 2, 3, 4].map((n) => `/assets/process/consult-${n}.svg`);

/**
 * Four-circle process artwork built from code (same approach as ProcessTimelineArt): CSS discs, computed arcs,
 * chevron arrowheads and inline SVG icons. Design px on a 1256 x 334 canvas.
 */
const STEPS = [
  // disc centre, ring (big arc) centre/radius/angles, arrow arc centre/radius/angles, chevron [start, tip, end], icon box
  { disc: [160.7, 153.0], low: false, ring: [159.9, 142.8, 158, -2.0, 178.0], arrow: [159.0, 139.0, 193.4, 131.9, 55.9], head: [[233.4, 293.35], [267.45, 299.35], [258.6, 330.85]], icon: [95, 92, 128, 128] },
  { disc: [463.85, 187.06], low: true, ring: [472.1, 191.2, 158, -7.8, -172.2], arrow: [471.7, 195.7, 193.4, -126, -48.1], head: [[599.2, 20.25], [604.3, 52.45], [569.85, 54.95]], icon: [395, 115, 128, 128] },
  { disc: [775.35, 147.04], low: false, ring: [783.9, 143.1, 158, -2.1, 177.9], arrow: [783.5, 140.0, 192.4, 131.9, 55.9], head: [[857.65, 293.35], [891.6, 299.35], [882.75, 330.85]], icon: [711.35, 83.04, 128, 128] },
  { disc: [1095.55, 187.06], low: true, ring: [1096.0, 190.3, 158, -7.8, -172.2], arrow: [1095.7, 195.7, 193.4, -126, -48.1], head: [[1193.4, 50.35], [1227.8, 53.5], [1228.65, 20.95]], icon: [1037.45, 136.27, 127.5, 112] },
] as const;

export default function ConsultTimelineArt({ icons }: { icons?: (StepIcon | undefined)[] }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {STEPS.map((s, i) => (
        <StepArt key={i} disc={s.disc} fills={CONSULT_ARCS[i]} delay={i * 0.16} iconRect={s.icon} icon={icons?.[i] ?? CONSULT_ICON_SRC[i]} />
      ))}
    </div>
  );
}
