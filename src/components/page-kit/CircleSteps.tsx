import React from "react";
import Reveal from "@/components/common/Reveal";
import ProcessTimelineArt from "./ProcessTimelineArt";
import ConsultTimelineArt from "./ConsultTimelineArt";

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

// Figma four-step variant (Solar Consultation): 1600 x 536 canvas, label centres zig-zag between two rows.
const FOUR = {
  labels: [
    { cx: 322, top: 0 },
    { cx: 635, top: 440 },
    { cx: 940, top: 0 },
    { cx: 1290, top: 440 },
  ],
  w: 308,
};

function FourSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="hidden canvas:flex justify-center">
      <div className="canvas-zoom relative shrink-0" style={{ width: 1600, height: 536 }}>
        {FOUR.labels.map((l, i) => (
          <Reveal key={steps[i].title} delay={i * 0.07} y={16} className="absolute">
            <div className="absolute flex flex-col items-center gap-[12px] text-center" style={{ left: l.cx - FOUR.w / 2, top: l.top, width: FOUR.w }}>
              <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-normal text-[#333333]">{steps[i].title}</h3>
              <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{steps[i].desc}</p>
            </div>
          </Reveal>
        ))}
        <div className="absolute" style={{ left: 165, top: 90, width: 1256, height: 334 }}>
          <ConsultTimelineArt />
        </div>
      </div>
    </div>
  );
}

export default function CircleSteps({ steps, zigzag = false }: { steps: Step[]; zigzag?: boolean }) {
  // `zigzag`: step order alternates top / bottom along the timeline instead of filling the top row first.
  const order = zigzag ? [0, 3, 1, 4, 2, 5] : [0, 1, 2, 3, 4, 5];
  const mobile = (
    <ol className="canvas:hidden m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={(i % 2) * 0.08} className="flex flex-col items-center gap-[16px] text-center">
          <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#EFF0F6] font-archivo text-[24px] font-medium text-primary transition-transform duration-300 hover:scale-110">{i + 1}</span>
          <h3 className="m-0 font-archivo text-[22px] leading-[26px] font-medium text-[#333333]">{s.title}</h3>
          <p className="m-0 max-w-[300px] font-archivo text-[16px] leading-[24px] text-[#666666]">{s.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
  if (steps.length === 4) {
    return (
      <>
        <FourSteps steps={steps} />
        {mobile}
      </>
    );
  }
  return (
    <>
      <div className="hidden canvas:flex justify-center">
        <div className="canvas-zoom relative shrink-0" style={{ width: 1600, height: 530 }}>
          {LABELS.map((l, pos) => {
            const i = order.indexOf(pos);
            return (
            <Reveal key={steps[i].title} delay={i * 0.07} y={16} className="absolute" >
              <div className="absolute flex flex-col items-center gap-[12px] text-center" style={{ left: l.left, top: l.top, width: l.w }}>
                <h3 className="m-0 font-archivo text-[24px] leading-[26px] font-normal text-[#333333]">{steps[i].title}</h3>
                <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{steps[i].desc}</p>
              </div>
            </Reveal>
            );
          })}
          <div className="absolute left-0 w-[1600px] h-[302.82px]" style={{ top: 105 }}>
            <ProcessTimelineArt />
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
