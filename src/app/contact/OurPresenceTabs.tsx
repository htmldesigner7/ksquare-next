"use client";

import React from "react";
import Link from "next/link";

const westZoneLocations = [
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    address: "B-403/404 Signature - 2 Sarkhej Sanand Road, Sarkhej, Ahmedabad - 382210.",
  },
  {
    id: "factory",
    name: "Ksqaure Factory",
    address: "Maha Gujarat Industrial Estate, Intas Pharma, 56, Sarkhej-Bavla Rd, B/h, Gujarat 382213",
  },
  {
    id: "pune",
    name: "Pune",
    address: "401-402, 4th floor, 45, Baner Rd, opposite Dmart , Veerbhadra Nagar, Baner, Pune , 411069",
  },
  {
    id: "surat",
    name: "Surat",
    address: "18th Floor The Junomoneta Tower, Opposite PAL RTO, Adajan, Surat, Gujarat 395009",
  },
];

export default function OurPresenceTabs() {
  const [zone, setZone] = React.useState<"west" | "east">("west");

  return (
    <div className="flex flex-col justify-center items-center gap-[40px] w-full max-w-[1600px]">
      {/* Tabs */}
      <div className="flex items-center gap-[18px]">
        <button
          type="button"
          onClick={() => setZone("west")}
          className={`font-archivo text-[20px] leading-[26px] px-[28px] py-[16px] rounded-t-[12px] transition-colors ${
            zone === "west" ? "text-primary border-b border-primary" : "text-[#333333]"
          }`}
        >
          West Zone
        </button>
        <button
          type="button"
          onClick={() => setZone("east")}
          className={`font-archivo text-[20px] leading-[26px] px-[28px] py-[16px] rounded-t-[12px] transition-colors ${
            zone === "east" ? "text-primary border-b border-primary" : "text-[#333333]"
          }`}
        >
          East Zone
        </button>
      </div>

      {/* Location List */}
      {zone === "west" ? (
        <div className="w-full flex flex-col gap-[12px]">
          {westZoneLocations.map((loc) => (
            <div
              key={loc.id}
              className="w-full bg-[#F0F5FE] p-[24px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[16px] lg:gap-[24px] border-b border-[#9DBCF3] min-h-[100px]"
            >
              <div className="w-full lg:w-[264px] shrink-0">
                <h3
                  className="text-[28px] md:text-[40px] leading-[1.1] text-primary font-semibold"
                  style={{ fontFamily: "Geist, var(--font-archivo), sans-serif" }}
                >
                  {loc.name}
                </h3>
              </div>
              <div className="hidden lg:block w-[1px] self-stretch bg-[#9DBCF3]"></div>
              <div className="w-full lg:max-w-[744px]">
                <p className="font-archivo text-[16px] lg:text-[18px] leading-[26px] text-[#666666]">
                  {loc.address}
                </p>
              </div>
              <div className="hidden lg:block w-[1px] self-stretch bg-[#9DBCF3]"></div>
              <div className="flex items-center gap-[10px] shrink-0">
                <Link
                  href="#"
                  className="flex items-center gap-[16px] font-archivo text-[16px] lg:text-[17px] leading-[26px] text-primary group"
                >
                  <span>Get Direction</span>
                  <span className="w-[8px] h-[8px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full bg-[#F0F5FE] p-[48px] flex items-center justify-center min-h-[200px]">
          <p className="font-archivo text-[17px] leading-[26px] text-[#666666] text-center">
            Our East Zone locations are coming soon. Please reach out to our corporate office for assistance in this region.
          </p>
        </div>
      )}
    </div>
  );
}
