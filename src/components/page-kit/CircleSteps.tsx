import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";

interface Step {
  title: string;
  desc: string;
}

// Figma "six-step" timeline (same artwork as the Grievance and Infrastructure pages): 1600 x 530 design canvas.
const LABELS = [
  { left: 3.39, top: 0, w: 290.85 },
  { left: 521.49, top: 0, w: 332 },
  { left: 1053.13, top: 0, w: 290.85 },
  { left: 256, top: 420.87, w: 290.85 },
  { left: 789.82, top: 420.87, w: 290.85 },
  { left: 1309.16, top: 420.87, w: 290.85 },
];
const ICONS = [
  { src: "/assets/grievance/process_icon_1.svg", left: 71.6, top: 76.55 },
  { src: "/assets/grievance/process_icon_2.svg", left: 337.6, top: 105.55 },
  { src: "/assets/grievance/process_icon_3.svg", left: 602.6, top: 76.55 },
  { src: "/assets/grievance/process_icon_6.svg", left: 1401.6, top: 101.55 },
];

export default function CircleSteps({ steps }: { steps: Step[] }) {
  return (
    <>
      <div className="hidden canvas:flex justify-center">
        <div className="canvas-zoom relative shrink-0" style={{ width: 1600, height: 530 }}>
          {LABELS.map((l, i) => (
            <Reveal key={steps[i].title} delay={i * 0.07} y={16} className="absolute" >
              <div className="absolute flex flex-col items-center gap-[12px] text-center" style={{ left: l.left, top: l.top, width: l.w }}>
                <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-normal text-[#333333]">{steps[i].title}</h3>
                <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{steps[i].desc}</p>
              </div>
            </Reveal>
          ))}
          <div className="absolute left-0 w-[1600px] h-[302.82px]" style={{ top: 105 }}>
            <Image src="/assets/grievance/process_connectors.png" alt="" fill sizes="1600px" className="object-contain" aria-hidden="true" />
            {ICONS.map((ic) => (
              <div key={ic.src} className="absolute h-[128px] w-[128px]" style={{ left: ic.left, top: ic.top }}>
                <Image src={ic.src} alt="" fill />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ol className="canvas:hidden m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={(i % 2) * 0.08} className="flex flex-col items-center gap-[16px] text-center">
            <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#EFF0F6] font-archivo text-[24px] font-medium text-primary transition-transform duration-300 hover:scale-110">{i + 1}</span>
            <h3 className="m-0 font-archivo text-[22px] leading-[26px] font-medium text-[#333333]">{s.title}</h3>
            <p className="m-0 max-w-[300px] font-archivo text-[16px] leading-[24px] text-[#666666]">{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
