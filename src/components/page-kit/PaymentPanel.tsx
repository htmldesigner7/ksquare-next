"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  upi: { title: string; desc: string; qr: string; caption: string; holder: string; id: string };
  bank: { title: string; desc: string; rows: { label: string; value: string; copy?: boolean }[]; notice: string };
}

const CopyIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M10.5 3.2V3A1.5 1.5 0 0 0 9 1.5H3A1.5 1.5 0 0 0 1.5 3v6A1.5 1.5 0 0 0 3 10.5h.2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be unavailable (insecure context); the value is still visible to copy by hand.
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label || value}`}
      className="shrink-0 inline-flex items-center gap-[6px] border border-[#C6CCED] bg-[#EDF3FF] px-[10px] py-[5px] font-archivo text-[13px] leading-[18px] text-primary transition-colors hover:bg-primary hover:text-white cursor-pointer"
    >
      <CopyIcon />
      {copied ? "Copied" : label ? `Copy ${label}` : "Copy"}
    </button>
  );
}

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
    <rect x="3" y="7" width="10" height="7" rx="1.3" stroke="#2E338F" strokeWidth="1.3" />
    <path d="M5.2 7V5.2a2.8 2.8 0 0 1 5.6 0V7" stroke="#2E338F" strokeWidth="1.3" />
  </svg>
);

export default function PaymentPanel({ upi, bank }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-[24px] lg:gap-[64px] items-stretch">
      <div className="flex flex-col items-center gap-[24px] lg:gap-[30px] bg-white border border-[#E1E5F7] p-[24px] lg:p-[40px]">
        <div className="flex flex-col items-center gap-[8px] text-center">
          <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] leading-[30px] font-medium text-primary">{upi.title}</h3>
          <p className="m-0 font-archivo text-[14px] lg:text-[15px] leading-[22px] text-[#666666]">{upi.desc}</p>
        </div>
        <div className="flex h-[240px] w-[240px] lg:h-[280px] lg:w-[280px] items-center justify-center border border-[#E1E5F7] bg-white p-[20px] lg:p-[24px]">
          <div className="relative h-full w-full">
            <Image src={upi.qr} alt="UPI payment QR code for Ksquare Energy" fill sizes="232px" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[4px] text-center">
          <span className="font-archivo text-[13px] lg:text-[14px] font-semibold leading-[20px] text-[#333333]">{upi.caption}</span>
          <span className="font-archivo text-[13px] leading-[20px] text-[#9CA3AF]">{upi.holder}</span>
        </div>
        <div className="h-px w-full bg-[#E1E5F7]" />
        <div className="flex w-full flex-col gap-[10px]">
          <span className="font-archivo text-[13px] uppercase tracking-[0.02em] text-[#666666]">Official UPI ID</span>
          <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-[12px] border border-[#E1E5F7] bg-[#F5F8FF] p-[16px]">
            <span className="font-archivo text-[14px] lg:text-[15px] font-semibold text-primary break-all">{upi.id}</span>
            <CopyButton value={upi.id} label="UPI" />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col items-center justify-center gap-[24px]" aria-hidden="true">
        <span className="hidden lg:block w-px flex-1 bg-[#C6CCED]" />
        <span className="font-archivo text-[14px] font-medium text-primary border border-[#C6CCED] rounded-full h-[49px] w-[49px] flex items-center justify-center bg-[#EDF3FF]">OR</span>
        <span className="hidden lg:block w-px flex-1 bg-[#C6CCED]" />
      </div>

      <div className="flex flex-col justify-center gap-[28px] lg:gap-[32px] bg-white border border-[#E1E5F7] p-[24px] lg:p-[40px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className="m-0 font-archivo text-[20px] lg:text-[22px] leading-[30px] font-medium text-primary">{bank.title}</h3>
          <p className="m-0 font-archivo text-[14px] lg:text-[15px] leading-[22px] text-[#666666]">{bank.desc}</p>
        </div>
        <dl className="m-0 flex flex-col border border-[#E1E5F7]">
          {bank.rows.map((r, i) => (
            <div key={r.label} className={`flex items-center justify-between gap-[16px] px-[16px] py-[12px] lg:py-[22px] ${i > 0 ? "border-t border-[#E1E5F7]" : ""}`}>
              <dt className="font-archivo text-[14px] lg:text-[16px] leading-[24px] text-[#666666]">{r.label}</dt>
              <dd className="m-0 flex items-center gap-[10px] font-archivo text-[14px] lg:text-[16px] font-medium leading-[24px] text-[#333333] text-right break-all">
                {r.value}
                {r.copy && <CopyButton value={r.value} label="" />}
              </dd>
            </div>
          ))}
        </dl>
        <p className="m-0 flex items-center gap-[12px] font-archivo text-[14px] lg:text-[15px] leading-[22px] text-[#666666] bg-[#EDF3FF] p-[16px]">
          <LockIcon />
          {bank.notice}
        </p>
      </div>
    </div>
  );
}
