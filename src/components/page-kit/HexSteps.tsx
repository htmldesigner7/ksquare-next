import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { HEX_ICONS } from "./illustrations";

interface Step {
  title: string;
  desc: string;
}

// Figma geometry (design px). Canvas is 1460 wide for 5 steps: hexes zig-zag between two rows.
const HEX = 318.78;
const STEP_X = 285.7;
const ROW_TOP = 118.56;
const ROW_BOTTOM = 335.33;
const INNER = 235.9;
const HEIGHT = 773;
const LABEL_W = 300;
const RING = 177;

const HEX_PATH = "M150 1.5L278.605 75.75V224.25L150 298.5L21.3949 224.25V75.75L150 1.5Z";

/**
 * Zig-zag hexagon process. At >=1440px it renders the Figma canvas scaled to fit (canvas-zoom);
 * below that it falls back to a clean stacked list of the same steps.
 */
export default function HexSteps({ steps }: { steps: Step[] }) {
  const n = steps.length;
  const width = HEX + (n - 1) * STEP_X;
  const hexes = steps.map((_, i) => ({
    x: i * STEP_X,
    y: i % 2 === 0 ? ROW_TOP : ROW_BOTTOM,
    top: i % 2 === 0,
  }));

  return (
    <>
      {/* Desktop canvas */}
      <div className="hidden canvas:flex justify-center">
        <div className="canvas-zoom relative shrink-0" style={{ width, height: HEIGHT }}>
          {/* connecting rings (behind hexes) */}
          {hexes.slice(0, -1).map((h, i) => (
            <span
              key={`ring-${i}`}
              aria-hidden="true"
              className="absolute rounded-full border-[4px] border-[#DDDDDD]"
              style={{
                width: RING,
                height: RING,
                left: h.x + HEX / 2 + (h.top ? 178 : 187) - RING / 2,
                top: h.y + HEX / 2 + (h.top ? 54 : -49) - RING / 2,
              }}
            />
          ))}

          {hexes.map((h, i) => (
            <Reveal key={steps[i].title} delay={i * 0.08} y={18} className="absolute inset-0 pointer-events-none">
              <div className="group absolute pointer-events-auto" style={{ left: h.x, top: h.y, width: HEX, height: HEX }}>
                <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]" aria-hidden="true">
                  <path d={HEX_PATH} fill="#fff" stroke="#8E8E8E" strokeWidth="2" />
                </svg>
                <span
                  className="absolute flex items-center justify-center transition-colors duration-300"
                  style={{ left: (HEX - INNER) / 2, top: (HEX - INNER) / 2, width: INNER, height: INNER }}
                >
                  <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
                    <path d="M150 0L279.904 75V225L150 300L20.0962 225V75L150 0Z" className="fill-[#EFF0F6] transition-colors duration-300 group-hover:fill-[#E1E5F7]" />
                  </svg>
                  <Image src={HEX_ICONS[i % HEX_ICONS.length]} alt="" width={80} height={80} className="relative h-[80px] w-[80px] object-contain transition-transform duration-500 group-hover:scale-110" />
                </span>
              </div>
              <div
                className="absolute flex flex-col items-center gap-[16px] text-center"
                style={{ left: h.x + HEX / 2 - LABEL_W / 2, top: h.top ? 0 : 673, width: LABEL_W }}
              >
                <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-normal text-[#333333]">{steps[i].title}</h3>
                <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{steps[i].desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tablet / mobile fallback */}
      <ol className="canvas:hidden m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-[32px] gap-y-[40px]">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 2) * 0.08} className="group flex flex-col items-center gap-[16px] text-center">
            <span className="relative flex h-[120px] w-[120px] items-center justify-center">
              <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" aria-hidden="true">
                <path d={HEX_PATH} fill="#fff" stroke="#8E8E8E" strokeWidth="3" />
                <path d="M150 40L240 92V208L150 260L60 208V92Z" fill="#EFF0F6" />
              </svg>
              <Image src={HEX_ICONS[i % HEX_ICONS.length]} alt="" width={44} height={44} className="relative h-[44px] w-[44px] object-contain" />
            </span>
            <h3 className="m-0 font-archivo text-[20px] text-[#333333]">{s.title}</h3>
            <p className="m-0 max-w-[340px] font-archivo text-[15px] leading-[24px] text-[#666666]">{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
