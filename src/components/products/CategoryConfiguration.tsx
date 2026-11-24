import Image from "next/image";
import Container from "@/components/common/Container";

export type ConfigItem = { title: string; description: string; icon: string | null };

// Positions of the six honeycomb cells (percent of the 1651 x 764 canvas): text block, large hexagon.
const SLOTS = [
  { text: { left: "0%", top: "0%", width: "19.26%" }, hex: { left: "0.54%", top: "17.01%" } },
  { text: { left: "32.46%", top: "0%", width: "19.5%" }, hex: { left: "33.13%", top: "17.01%" } },
  { text: { left: "65.59%", top: "0%", width: "17.08%" }, hex: { left: "65.59%", top: "17.01%" } },
  { text: { left: "14.71%", top: "86.91%", width: "22.53%" }, hex: { left: "16.89%", top: "43.71%" } },
  { text: { left: "49.9%", top: "86.91%", width: "17.08%" }, hex: { left: "49.36%", top: "43.71%" } },
  { text: { left: "82.37%", top: "86.91%", width: "17.08%" }, hex: { left: "81.82%", top: "43.71%" } },
];
const CIRCLES = [
  { left: "15.32%", top: "32.72%" },
  { left: "47.66%", top: "32.72%" },
  { left: "80.31%", top: "32.72%" },
  { left: "31.49%", top: "45.94%" },
  { left: "63.84%", top: "45.94%" },
];

/** Config icons are served by the API (another origin), so they are not optimised by next/image. */
const Icon = ({ src, alt, size }: { src: string | null; alt: string; size: number }) =>
  src ? <Image src={src} width={size} height={size} unoptimized alt={alt} className="w-full h-full object-contain" /> : null;

/** "<Name> Configuration": six-step honeycomb on large screens, a simple list below that (same design as the original DCDB page). */
export default function CategoryConfiguration({ name, shortLine, items }: { name: string; shortLine: string | null; items: ConfigItem[] }) {
  // The honeycomb has six cells; a longer list is shown as the plain grid on every screen size.
  const honeycomb = items.length <= SLOTS.length;
  const description = "font-archivo text-[15px] sm:text-[17px] leading-[24px] sm:leading-[26px] text-[#666666] [&_p]:m-0";

  return (
    <Container maxWidth="1600" className="lg:-mt-[26px]">
      {/* Mobile / tablet layout */}
      <div className={`${honeycomb ? "canvas:hidden" : ""} flex flex-col gap-[28px] sm:gap-[40px]`}>
        <div className="flex flex-col gap-[8px] text-center items-center sm:mb-[20px]">
          <h2 className="font-archivo text-[34px] sm:text-[40px] leading-[1.2] lg:leading-[48px] text-primary font-normal">
            {name} <span className="font-recia italic font-medium">Configuration</span>
          </h2>
          {shortLine && <p className="font-archivo text-[16px] leading-[24px] text-[#666666]">{shortLine}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[24px] sm:gap-y-[40px]">
          {items.map((config, index) => (
            <div key={index} className="flex flex-row items-start sm:flex-col gap-[16px]">
              <div className="w-[64px] h-[64px] sm:w-[100px] sm:h-[100px] shrink-0 bg-[#EFF0F6] rounded-full flex items-center justify-center p-[14px] sm:p-[20px]">
                <Icon src={config.icon} alt={config.title} size={50} />
              </div>
              <div className="flex flex-col gap-[6px] sm:gap-[16px] min-w-0">
                <h3 className="font-archivo text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#333333] font-normal">{config.title}</h3>
                <div className={description} dangerouslySetInnerHTML={{ __html: config.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop honeycomb */}
      {honeycomb && (
        <div className="hidden canvas:flex flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="font-archivo text-[34px] sm:text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[57px] text-primary font-normal mb-[8px]">
              {name} <span className="font-recia italic font-medium">Configuration</span>
            </h2>
            {shortLine && <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{shortLine}</p>}
          </div>

          <div className="canvas-zoom relative w-[1651px] shrink-0 aspect-[1651/764] overflow-visible">
            {CIRCLES.slice(0, Math.max(items.length - 1, 0)).map((circle, i) => (
              <div
                key={`circle-${i}`}
                className="absolute rounded-full border-[4px] border-[#DDDDDD]"
                style={{ left: circle.left, top: circle.top, width: "10.11%", height: "21.85%", zIndex: 0 }}
              />
            ))}

            {items.map((item, i) => (
              <div key={`hex-group-${i}`}>
                <div className="absolute flex flex-col items-center text-center gap-[12px]" style={{ ...SLOTS[i].text, zIndex: 10 }}>
                  <h3 className="font-archivo text-[20px] xl:text-[24px] leading-[28px] xl:leading-[32px] text-[#333333] font-medium">{item.title}</h3>
                  <div
                    className="font-archivo text-[15px] xl:text-[17px] leading-[22px] xl:leading-[26px] text-[#666666] [&_p]:m-0"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                <div className="absolute z-10" style={{ ...SLOTS[i].hex, width: "18.17%", height: "39.26%" }}>
                  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full preserve-3d">
                    <path d="M150 1.5L278.605 75.75V224.25L150 298.5L21.3949 224.25V75.75L150 1.5Z" fill="#FFFFFF" stroke="#E8E8E8" strokeWidth="3" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-[74%] h-[74%]">
                      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                        <path d="M150 0L279.904 75V225L150 300L20.0962 225V75L150 0Z" fill="#EFF0F6" />
                      </svg>
                      <div className="relative z-10 flex items-center justify-center w-[40%] h-[40%]">
                        <Icon src={item.icon} alt={item.title} size={90} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
