import React from "react";
import StepArt, { type StepIcon } from "./StepArt";
import { PROCESS_ARCS } from "./processArcs";

/** Default icon files (public/assets/process), left to right. Replace a file, or pass `icons`, to change them. */
export const PROCESS_ICON_SRC = [1, 2, 3, 4, 5, 6].map((n) => `/assets/process/step-${n}.svg`);

/**
 * The six-circle process timeline, built from one self-contained <StepArt> per step (disc + its own arcs + an icon slot).
 * Design px on a 1600 x 303 canvas, matching the Figma timeline. Pass `icons` to give a page its own icon set;
 * missing entries fall back to the default Figma icons.
 */
const STEP = 265.8; // horizontal pitch between discs
const X0 = 135.6; // first disc centre x
const RING_R = 132.7; // the large arc wrapped around each disc
const ARROW_R = 157; // the arrowed arc outside it

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

export default function ProcessTimelineArt({ icons }: { icons?: (StepIcon | undefined)[] }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {steps.map((s, i) => (
        <StepArt
          key={i}
          disc={[s.cx, s.discY]}
          fills={PROCESS_ARCS[i]}
          delay={i * 0.14}
          icon={icons?.[i] ?? PROCESS_ICON_SRC[i]}
        />
      ))}
    </div>
  );
}
