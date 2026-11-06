import React from "react";
import { CONSULT_ICONS } from "./ConsultIcons";
import { ARC_COLOR, DISC_R, HALO_R, STROKE, arc } from "./ProcessTimelineArt";

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

export default function ConsultTimelineArt() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {STEPS.map((s, i) => {
        const Icon = CONSULT_ICONS[i];
        const [dx, dy] = s.disc;
        const [rx, ry, rr, ra, rb] = s.ring;
        const [ax, ay, ar, aa, ab] = s.arrow;
        const [ix, iy, iw, ih] = s.icon;
        return (
          <React.Fragment key={i}>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1256 334" fill="none">
              <path d={arc(rx, ry, rr, ra, rb)} stroke={ARC_COLOR} strokeWidth={STROKE} />
              <path d={arc(ax, ay, ar, aa, ab)} stroke={ARC_COLOR} strokeWidth={STROKE} />
              <polyline points={s.head.map((p) => p.join(",")).join(" ")} stroke={ARC_COLOR} strokeWidth={STROKE} strokeLinejoin="miter" />
            </svg>
            <span
              className="absolute rounded-full"
              style={{
                left: dx - HALO_R,
                top: dy - HALO_R,
                width: HALO_R * 2,
                height: HALO_R * 2,
                background:
                  "radial-gradient(closest-side, transparent 0 85%, rgba(60,60,60,0.15) 86%, rgba(110,110,110,0.09) 90.5%, rgba(160,160,160,0.045) 95%, transparent 100%)",
              }}
            />
            <span className="absolute rounded-full bg-white" style={{ left: dx - DISC_R, top: dy - DISC_R, width: DISC_R * 2, height: DISC_R * 2 }} />
            <Icon className="absolute block" style={{ left: ix, top: iy, width: iw, height: ih }} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
