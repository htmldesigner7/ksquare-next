"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FormKind } from "./types";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  full?: boolean;
}

const BASE: Field[] = [
  { name: "name", label: "Full Name", placeholder: "Enter your full name", required: true },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
  { name: "email", label: "Email Address", type: "email", placeholder: "name@domain.com", required: true },
  { name: "city", label: "City", placeholder: "Enter city", required: true },
];

const FORMS: Record<FormKind, { fields: Field[]; submit: string; success: string }> = {
  partner: {
    fields: [
      ...BASE,
      { name: "company", label: "Company Name", placeholder: "Registered business name", required: true },
      {
        name: "track",
        label: "Partnership Track",
        type: "select",
        options: ["Distributor / Dealer", "EPC Company", "Installer", "System Integrator", "OEM / White-Label", "Export Partner"],
        required: true,
      },
      { name: "message", label: "Tell us about your business", type: "textarea", placeholder: "Current volumes, regions served, product interests…", full: true },
    ],
    submit: "Submit Partnership Request",
    success: "Thank you! Our partnerships team will review your details and reach out within 2 business days.",
  },
  consultation: {
    fields: [
      ...BASE,
      { name: "type", label: "Property Type", type: "select", options: ["Home / Bungalow", "Apartment / Society", "Commercial", "Industrial", "Government / Institutional"], required: true },
      { name: "bill", label: "Average Monthly Bill", type: "select", options: ["Below ₹3,000", "₹3,000 – ₹6,000", "₹6,000 – ₹10,000", "₹10,000 – ₹25,000", "Above ₹25,000"] },
      { name: "message", label: "Anything we should know?", type: "textarea", placeholder: "Roof type, available area, existing connection…", full: true },
    ],
    submit: "Book Free Consultation",
    success: "Thank you! A solar expert will call you shortly to schedule your consultation.",
  },
  track: {
    fields: [
      { name: "ref", label: "Application / Reference Number", placeholder: "e.g. KS-2026-00123", required: true, full: true },
      { name: "phone", label: "Registered Mobile Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true, full: true },
    ],
    submit: "Track Status",
    success: "We've received your request. Our support team will share the latest status of your installation on your registered mobile number shortly.",
  },
  export: {
    fields: [
      ...BASE.slice(0, 3),
      { name: "country", label: "Country", placeholder: "Destination country", required: true },
      { name: "company", label: "Company Name", placeholder: "Registered business name", required: true },
      { name: "products", label: "Products of Interest", placeholder: "e.g. DCDB, ACDB, MC4", required: true },
      { name: "message", label: "Requirement Details", type: "textarea", placeholder: "Quantities, certifications required, delivery timeline…", full: true },
    ],
    submit: "Request Export Quote",
    success: "Thank you! Our export desk will share a detailed quotation within 2 business days.",
  },
  oem: {
    fields: [
      ...BASE.slice(0, 3),
      { name: "company", label: "Brand / Company Name", placeholder: "Your brand name", required: true },
      { name: "products", label: "Product Category", type: "select", options: ["DCDB", "ACDB", "Combiner Box", "Earthing Kit", "Enclosures", "Custom Product"], required: true },
      { name: "volume", label: "Estimated Order Volume", placeholder: "e.g. 500 units / month" },
      { name: "message", label: "Specifications", type: "textarea", placeholder: "Share specs, branding requirements and timelines…", full: true },
    ],
    submit: "Start OEM Enquiry",
    success: "Thank you! Our OEM team will get back to you with feasibility and pricing within 2 business days.",
  },
  quote: {
    fields: [
      ...BASE,
      { name: "message", label: "Requirement", type: "textarea", placeholder: "Tell us what you need…", full: true },
    ],
    submit: "Request a Quote",
    success: "Thank you! Our team will get back to you within 2 hours.",
  },
};

const inputCls =
  "w-full border border-[#DDDDDD] bg-white rounded-[8px] px-[16px] py-[12px] font-archivo text-[16px] lg:text-[17px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all";

export default function LeadForm({ kind }: { kind: FormKind }) {
  const cfg = FORMS[kind];
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of cfg.fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = "This field is required";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) next[f.name] = "Enter a valid email address";
      else if (f.type === "tel" && v && v.replace(/\D/g, "").length < 10) next[f.name] = "Enter a valid phone number";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center gap-[16px] py-[48px] px-[24px] bg-[#EFF0F6] rounded-[12px]"
          role="status"
        >
          <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-primary text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <p className="m-0 font-archivo text-[18px] leading-[28px] text-[#333333] max-w-[520px]">{cfg.success}</p>
          <button type="button" onClick={() => setSent(false)} className="font-archivo text-[16px] text-primary underline underline-offset-4 hover:text-primary-dark cursor-pointer">
            Submit another request
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[20px]">
          {cfg.fields.map((f) => {
            const err = errors[f.name];
            return (
              <div key={f.name} className={`flex flex-col gap-[8px] ${f.full || f.type === "textarea" ? "sm:col-span-2" : ""}`}>
                <label htmlFor={`${kind}-${f.name}`} className="font-archivo text-[15px] lg:text-[16px] text-[#333333]">
                  {f.label}
                  {f.required && <span className="text-[#D93025]"> *</span>}
                </label>
                {f.type === "select" ? (
                  <select id={`${kind}-${f.name}`} name={f.name} defaultValue="" aria-invalid={!!err} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {f.options?.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea id={`${kind}-${f.name}`} name={f.name} rows={4} placeholder={f.placeholder} className={`${inputCls} resize-y`} />
                ) : (
                  <input id={`${kind}-${f.name}`} name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} aria-invalid={!!err} className={inputCls} />
                )}
                {err && <span className="font-archivo text-[14px] text-[#D93025]">{err}</span>}
              </div>
            );
          })}
          <div className="sm:col-span-2 pt-[8px]">
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-[16px] px-[28px] py-[16px] bg-primary text-white font-archivo text-[17px] hover:bg-primary-dark transition-colors cursor-pointer w-full sm:w-auto"
            >
              {cfg.submit}
              <span className="w-[8px] h-[8px] rounded-full bg-white transition-transform group-hover:scale-125" />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
