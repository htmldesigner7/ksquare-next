"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/common/Reveal";
import RichTitle from "@/components/common/RichTitle";
import { ROUTES } from "@/content/routes";

// Indicative assumptions, stated to the visitor under the results.
const TARIFF_PER_UNIT = 8; // ₹ per kWh
const UNITS_PER_KW_MONTH = 120; // average monthly generation per kW
const PANEL_WATT = 550;
const SQFT_PER_KW = 90;
const COST_PER_KW: [number, number] = [50000, 65000];

const STATES: { name: string; factor: number; note: string }[] = [
  { name: "Gujarat", factor: 1.05, note: "High irradiation zone" },
  { name: "Rajasthan", factor: 1.1, note: "Very high irradiation zone" },
  { name: "Maharashtra", factor: 1.0, note: "High irradiation zone" },
  { name: "Madhya Pradesh", factor: 1.02, note: "High irradiation zone" },
  { name: "Uttar Pradesh", factor: 0.95, note: "Moderate irradiation zone" },
  { name: "Karnataka", factor: 1.0, note: "High irradiation zone" },
  { name: "Tamil Nadu", factor: 1.0, note: "High irradiation zone" },
  { name: "Other", factor: 0.95, note: "Moderate irradiation zone" },
];
const INVERTER_SIZES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 80, 100];
const WIRE_SIZES = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
const RESISTIVITY = { copper: 0.0175, aluminium: 0.0282 } as const;

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const field =
  "w-full border border-[#DDDDDD] bg-white rounded-[6px] px-[16px] py-[12px] font-archivo text-[16px] text-[#333333] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all";

const NOTE = "We recommend Ksquare Smart-Inverters with built-in remote monitoring cards for instant performance insights on your smartphone.";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="font-archivo text-[14px] lg:text-[15px] text-[#333333]">
      {children}
    </label>
  );
}

function Suffix({ children }: { children: React.ReactNode }) {
  return <span className="pointer-events-none absolute right-[16px] top-1/2 -translate-y-1/2 font-archivo text-[14px] text-[#666666]">{children}</span>;
}

function Block({ id, title, subtitle, input, result }: { id: string; title: string; subtitle: string; input: React.ReactNode; result: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-[110px] flex flex-col gap-[40px]">
      <Reveal className="flex flex-col items-center gap-[8px] text-center">
        <RichTitle text={title} className="m-0 font-jost text-[34px] sm:text-[44px] lg:text-[60px] leading-[1.15] font-normal text-primary" />
        <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[24px] text-[#666666]">{subtitle}</p>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:gap-[40px] items-stretch">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-[22px] rounded-[16px] border border-[#C6CCED] bg-white p-[24px] lg:p-[40px]">{input}</div>
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col gap-[16px] rounded-[16px] border border-[#C6CCED] bg-[#EFF0F6] p-[24px] lg:p-[40px]" aria-live="polite">
            {result}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Result({ title, headline, sub, rows, actions, links }: { title: string; headline: string; sub?: string; rows: { label: string; value: string }[]; actions: { label: string; href: string }[]; links: { label: string; href: string }[] }) {
  return (
    <>
      <h3 className="m-0 font-archivo text-[22px] lg:text-[28px] leading-[1.2] font-normal text-primary">{title}</h3>
      <motion.span key={headline} initial={{ opacity: 0.3, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="font-archivo text-[44px] lg:text-[56px] leading-[1.1] font-medium text-primary">
        {headline}
      </motion.span>
      {sub && <p className="m-0 font-archivo text-[14px] text-[#666666]">{sub}</p>}
      <div className="mt-[8px] flex flex-col border-t border-[#D9DCEB]">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-[16px] py-[10px]">
            <span className="font-archivo text-[14px] text-[#666666]">{r.label}</span>
            <span className="font-archivo text-[14px] lg:text-[15px] text-[#333333] text-right">{r.value}</span>
          </div>
        ))}
      </div>
      <p className="m-0 flex items-start gap-[10px] bg-[#FFF9C4] px-[16px] py-[12px] font-archivo text-[13px] leading-[20px] text-[#5F5200]">
        <span aria-hidden="true" className="mt-[1px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border border-[#C9A400] text-[11px] leading-none">i</span>
        {NOTE}
      </p>
      <div className="flex flex-wrap gap-[12px]">
        {actions.map((a) => (
          <Link key={a.label} href={a.href} className="group inline-flex items-center gap-[12px] border border-primary px-[16px] py-[10px] font-archivo text-[14px] text-primary transition-colors hover:bg-primary hover:text-white">
            {a.label}
            <span className="h-[6px] w-[6px] rounded-full bg-current" />
          </Link>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap justify-between gap-[12px] pt-[8px]">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="font-archivo text-[14px] font-semibold text-primary underline-offset-4 hover:underline">
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}

function CalcButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="group mt-[4px] inline-flex w-fit items-center gap-[12px] border border-primary px-[16px] py-[10px] font-archivo text-[14px] text-primary transition-colors hover:bg-primary hover:text-white cursor-pointer">
      {children}
      <span className="h-[6px] w-[6px] rounded-full bg-current" />
    </button>
  );
}

function Radio({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onChange}
      className={`flex flex-1 items-center gap-[10px] border px-[14px] py-[10px] font-archivo text-[14px] text-left transition-colors cursor-pointer ${checked ? "border-primary bg-[#EDF3FF] text-primary" : "border-[#DDDDDD] text-[#666666] hover:border-primary"}`}
    >
      <span className={`flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border ${checked ? "border-primary" : "border-[#999999]"}`}>
        {checked && <span className="h-[8px] w-[8px] rounded-full bg-primary" />}
      </span>
      {children}
    </button>
  );
}

function PanelCalc() {
  const [bill, setBill] = useState(8500);
  const [state, setState] = useState("Maharashtra");
  const [roof, setRoof] = useState("");
  const [pulse, setPulse] = useState(0);

  const out = useMemo(() => {
    const st = STATES.find((x) => x.name === state) ?? STATES[0];
    const units = bill / TARIFF_PER_UNIT;
    const kw = Math.max(1, Math.round((units / (UNITS_PER_KW_MONTH * st.factor)) * 10) / 10);
    const panels = Math.ceil((kw * 1000) / PANEL_WATT);
    const area = kw * SQFT_PER_KW;
    const roofNum = Number(roof);
    return { units, kw, panels, area, fits: !roof || roofNum >= area };
  }, [bill, state, roof]);

  return (
    <Block
      id="panel-calculator"
      title="Solar Panel *Size Calculator*"
      subtitle="Estimate the total solar capacity and roof area required to offset your power costs."
      input={
        <>
          <h3 className="m-0 font-archivo text-[18px] lg:text-[20px] font-normal text-[#333333]">Input Your Usage Details</h3>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="bill">Average Monthly Electricity Bill</Label>
            <div className="relative">
              <input id="bill" inputMode="numeric" value={bill.toLocaleString("en-IN")} onChange={(e) => setBill(Math.min(50000, Math.max(1000, Number(e.target.value.replace(/\D/g, "")) || 1000)))} className={field} />
              <Suffix>₹</Suffix>
            </div>
            <input aria-label="Monthly bill slider" type="range" min={1000} max={50000} step={500} value={bill} onChange={(e) => setBill(+e.target.value)} className="w-full accent-[#2B398B] cursor-pointer" />
            <div className="flex justify-between font-archivo text-[13px] text-[#666666]">
              <span>₹ 1,000</span>
              <span>₹ 50,000+</span>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="usage">Estimated Monthly Consumption</Label>
            <div className="relative">
              <input id="usage" readOnly value={Math.round(out.units).toLocaleString("en-IN")} className={`${field} bg-[#F8F8F8]`} />
              <Suffix>kWh</Suffix>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="state">Installation State / Location</Label>
            <select id="state" value={state} onChange={(e) => setState(e.target.value)} className={`${field} cursor-pointer`}>
              {STATES.map((x) => (
                <option key={x.name} value={x.name}>
                  {x.name} ({x.note})
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="roof">Available Unshaded Roof Area</Label>
            <div className="relative">
              <input id="roof" inputMode="numeric" placeholder="Optional" value={roof} onChange={(e) => setRoof(e.target.value.replace(/\D/g, ""))} className={field} />
              <Suffix>sq ft</Suffix>
            </div>
            {!out.fits && <span className="font-archivo text-[13px] text-[#B45309]">This system needs about {Math.round(out.area)} sq ft. Ask our engineers about a compact layout.</span>}
          </div>
          <CalcButton onClick={() => setPulse((n) => n + 1)}>Calculate System Size</CalcButton>
        </>
      }
      result={
        <Result
          key={pulse}
          title="Recommended System Size"
          headline={`${out.kw} kW`}
          sub={`Based on ${inr(bill)} monthly bill with standard mono-PERC panels.`}
          rows={[
            { label: "Estimated Panels", value: `${out.panels} Panels` },
            { label: "Approx. Roof Surface", value: `${Math.round(out.area * 0.9)} - ${Math.round(out.area * 1.1)} sq ft` },
            { label: "Indicative Cost range (Before Subsidy)", value: `${inr(out.kw * COST_PER_KW[0])} - ${inr(out.kw * COST_PER_KW[1])}` },
          ]}
          actions={[{ label: "Get Accurate Feasibility Report", href: ROUTES.consultation }]}
          links={[
            { label: "Explore Residential Panels", href: ROUTES.residential },
            { label: "Explore Commercial Range", href: ROUTES.rooftop },
          ]}
        />
      }
    />
  );
}

function InverterCalc() {
  const [kw, setKw] = useState(5.2);
  const [load, setLoad] = useState(4);
  const [type, setType] = useState<"on" | "off" | "hybrid">("on");
  const [pulse, setPulse] = useState(0);

  const out = useMemo(() => {
    const forArray = kw / 1.1;
    const needed = type === "on" ? forArray : Math.max(forArray, load * 1.25);
    const size = INVERTER_SIZES.find((x) => x >= needed) ?? Math.ceil(needed);
    return { size, ratio: kw / size };
  }, [kw, load, type]);

  return (
    <Block
      id="inverter-calculator"
      title="Solar Inverter *Size Calculator*"
      subtitle="Find the right inverter capacity for your panel size and connection type."
      input={
        <>
          <h3 className="m-0 font-archivo text-[18px] lg:text-[20px] font-normal text-[#333333]">Inverter String Parameters</h3>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="sys">Calculated System Size</Label>
            <div className="relative">
              <input id="sys" type="number" min={0.5} step={0.1} value={kw} onChange={(e) => setKw(Math.max(0.5, +e.target.value || 0.5))} className={field} />
              <Suffix>kW</Suffix>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="load">Total Connected Home Load</Label>
            <div className="relative">
              <input id="load" type="number" min={0} step={0.5} value={load} onChange={(e) => setLoad(Math.max(0, +e.target.value || 0))} className={field} />
              <Suffix>kW</Suffix>
            </div>
          </div>
          <div role="radiogroup" aria-label="Inverter technology" className="flex flex-col gap-[8px]">
            <Label>Inverter Technology / Connection Type</Label>
            <div className="flex flex-col sm:flex-row gap-[10px]">
              <Radio checked={type === "on"} onChange={() => setType("on")}>On-Grid (Grid-Tied)</Radio>
              <Radio checked={type === "off"} onChange={() => setType("off")}>Off-Grid</Radio>
              <Radio checked={type === "hybrid"} onChange={() => setType("hybrid")}>Hybrid Smart-Grid</Radio>
            </div>
          </div>
          <CalcButton onClick={() => setPulse((n) => n + 1)}>Calculate System Size</CalcButton>
        </>
      }
      result={
        <Result
          key={pulse}
          title="Recommended Inverter Capacity"
          headline={`${out.size.toFixed(1)} kW Inverter`}
          sub={`Safely accommodates your ${kw} kW panels at a DC:AC ratio of ${out.ratio.toFixed(2)}.`}
          rows={[
            { label: "Suggested DC:AC Ratio Range", value: "1.05 - 1.15" },
            { label: "Continuous AC Power Output", value: `${(out.size * 1000).toLocaleString("en-IN")} VA` },
            { label: "MPPT Input Voltage Range", value: "120V - 500V DC" },
          ]}
          actions={[{ label: "Book a Solar Expert", href: ROUTES.consultation }]}
          links={[
            { label: "View Ksquare Smart Inverters", href: ROUTES.inverter },
            { label: "View Solar ACDB Products", href: ROUTES.dcdb },
          ]}
        />
      }
    />
  );
}

function WireCalc() {
  const [amps, setAmps] = useState(15);
  const [volts, setVolts] = useState(48);
  const [length, setLength] = useState(45);
  const [drop, setDrop] = useState(3);
  const [metal, setMetal] = useState<"copper" | "aluminium">("copper");
  const [pulse, setPulse] = useState(0);

  const out = useMemo(() => {
    const rho = RESISTIVITY[metal];
    const allowedV = (drop / 100) * volts;
    const minArea = allowedV > 0 ? (2 * rho * length * amps) / allowedV : Infinity;
    const area = WIRE_SIZES.find((x) => x >= minArea) ?? WIRE_SIZES[WIRE_SIZES.length - 1];
    const lossV = (2 * rho * length * amps) / area;
    return { area, lossV, lossPct: (lossV / volts) * 100 };
  }, [amps, volts, length, drop, metal]);

  const num = (set: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => set(Math.max(0, +e.target.value || 0));

  return (
    <Block
      id="wire-calculator"
      title="Solar Wire *Size Calculator*"
      subtitle="Work out the right cable cross-section for your current, voltage and cable run."
      input={
        <>
          <h3 className="m-0 font-archivo text-[18px] lg:text-[20px] font-normal text-[#333333]">System Parameter</h3>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="amps">Current/Amperage</Label>
            <div className="relative">
              <input id="amps" type="number" min={1} value={amps} onChange={num(setAmps)} className={field} />
              <Suffix>Amps (A)</Suffix>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="volts">System Voltage</Label>
            <div className="relative">
              <input id="volts" type="number" min={1} value={volts} onChange={num(setVolts)} className={field} />
              <Suffix>Volts (V)</Suffix>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="len">Cable Run Length (One-Way)</Label>
            <div className="relative">
              <input id="len" type="number" min={1} value={length} onChange={num(setLength)} className={field} />
              <Suffix>Meters (m)</Suffix>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Label htmlFor="drop">Acceptable Voltage Drop</Label>
            <select id="drop" value={drop} onChange={(e) => setDrop(+e.target.value)} className={`${field} cursor-pointer`}>
              {[1, 2, 3, 5].map((d) => (
                <option key={d} value={d}>
                  {d}%
                </option>
              ))}
            </select>
          </div>
          <div role="radiogroup" aria-label="Conductor material" className="flex flex-col gap-[8px]">
            <Label>Conductor Material</Label>
            <div className="flex gap-[10px]">
              <Radio checked={metal === "copper"} onChange={() => setMetal("copper")}>Copper</Radio>
              <Radio checked={metal === "aluminium"} onChange={() => setMetal("aluminium")}>Aluminium</Radio>
            </div>
          </div>
          <CalcButton onClick={() => setPulse((n) => n + 1)}>Calculate Wire Size</CalcButton>
        </>
      }
      result={
        <Result
          key={pulse}
          title="Recommended Sizing"
          headline={`${out.area.toFixed(1)} sq mm`}
          rows={[
            { label: "Recommended Cross-Sectional Area", value: `${out.area.toFixed(1)} sq mm` },
            { label: "Calculated Voltage Drop (%)", value: `${out.lossPct.toFixed(2)}%` },
            { label: "Calculated Voltage Loss (V)", value: `${out.lossV.toFixed(2)} V` },
          ]}
          actions={[
            { label: "Book a Consultation", href: ROUTES.consultation },
            { label: "View Solar Cables", href: ROUTES.dcdb },
          ]}
          links={[]}
        />
      }
    />
  );
}

const CARDS = [
  { id: "panel-calculator", title: "Solar Panel Calculator", desc: "Find out how many panels and what system size you need, based on your electricity bill or monthly usage.", icon: "/assets/about/serve_epc.svg" },
  { id: "inverter-calculator", title: "Solar Inverter Calculator", desc: "Calculate the right inverter capacity for your system size and connection type to ensure maximum energy harvest.", icon: "/assets/about/serve_installers.svg" },
  { id: "wire-calculator", title: "Solar Wire Size Calculator", desc: "Determine the correct cable cross-section for safe, efficient solar wiring to minimize system drop losses.", icon: "/assets/about/serve_integrators.svg" },
];

export default function SolarCalculators() {
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="flex flex-col gap-[80px] lg:gap-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[24px]">
        {CARDS.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.08} className="h-full">
            <div className="card-lift group flex h-full flex-col gap-[20px] bg-[#EFF0F6] p-[28px] lg:p-[40px]">
              <div className="flex items-center gap-[24px]">
                <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] bg-white p-[10px] transition-transform duration-300 group-hover:scale-105">
                  <Image src={c.icon} alt="" width={50} height={50} className="h-full w-full object-contain" />
                </span>
                <h3 className="m-0 font-archivo text-[20px] leading-[28px] font-normal text-[#333333]">{c.title}</h3>
              </div>
              <p className="m-0 font-archivo text-[15px] leading-[24px] text-[#666666]">{c.desc}</p>
              <button type="button" onClick={() => jump(c.id)} className="mt-auto inline-flex w-fit items-center gap-[12px] border border-primary px-[16px] py-[10px] font-archivo text-[14px] text-primary transition-colors hover:bg-primary hover:text-white cursor-pointer">
                Open Calculator
                <span className="h-[6px] w-[6px] rounded-full bg-current" />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <PanelCalc />
      <InverterCalc />
      <WireCalc />

      <p className="m-0 font-archivo text-[14px] leading-[22px] text-[#666666] text-center max-w-[900px] mx-auto">
        Estimates are indicative and use average tariff ({inr(TARIFF_PER_UNIT)}/unit), generation ({UNITS_PER_KW_MONTH} units per kW per month) and {PANEL_WATT} W panels. Final design depends on your roof, shading, sanctioned load and DISCOM rules.
      </p>
    </div>
  );
}
