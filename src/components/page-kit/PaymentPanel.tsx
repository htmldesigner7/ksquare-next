"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  upi: { title: string; desc: string; qr: string; caption: string; holder: string; id: string };
  bank: { title: string; desc: string; rows: { label: string; value: string; copy?: boolean }[]; notice: string };
}

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
      aria-label={`Copy ${label}`}
      className="shrink-0 inline-flex items-center gap-[8px] border border-primary px-[14px] py-[8px] font-archivo text-[14px] text-primary transition-colors hover:bg-primary hover:text-white cursor-pointer"
    >
      {copied ? "Copied" : `Copy ${label}`}
    </button>
  );
}

export default function PaymentPanel({ upi, bank }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-[24px] lg:gap-[32px] items-stretch">
      <div className="flex flex-col items-center text-center gap-[20px] bg-white p-[28px] lg:p-[44px] shadow-[0_10px_40px_-20px_rgba(43,57,139,0.25)]">
        <h3 className="m-0 font-archivo text-[24px] lg:text-[28px] text-primary">{upi.title}</h3>
        <p className="m-0 font-archivo text-[16px] leading-[24px] text-[#666666]">{upi.desc}</p>
        <div className="relative h-[200px] w-[200px] border border-[#E5E5E5] p-[10px] bg-white">
          <Image src={upi.qr} alt="UPI payment QR code for Ksquare Energy" fill sizes="200px" className="object-contain p-[10px]" />
        </div>
        <span className="font-archivo text-[17px] font-semibold text-[#333333]">{upi.caption}</span>
        <span className="font-archivo text-[15px] text-[#9CA3AF]">{upi.holder}</span>
        <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-[12px] bg-[#EFF0F6] p-[16px]">
          <div className="flex flex-col items-start gap-[2px] text-left">
            <span className="font-archivo text-[14px] font-semibold text-[#333333]">Official UPI ID</span>
            <span className="font-archivo text-[16px] font-bold text-primary break-all">{upi.id}</span>
          </div>
          <CopyButton value={upi.id} label="UPI" />
        </div>
      </div>

      <div className="flex lg:flex-col items-center justify-center gap-[12px]" aria-hidden="true">
        <span className="hidden lg:block w-px flex-1 bg-[#C6CCED]" />
        <span className="font-archivo text-[16px] font-bold text-primary border border-[#C6CCED] rounded-full h-[48px] w-[48px] flex items-center justify-center bg-white">OR</span>
        <span className="hidden lg:block w-px flex-1 bg-[#C6CCED]" />
      </div>

      <div className="flex flex-col gap-[20px] bg-white p-[28px] lg:p-[44px] shadow-[0_10px_40px_-20px_rgba(43,57,139,0.25)]">
        <h3 className="m-0 font-archivo text-[24px] lg:text-[28px] text-primary">{bank.title}</h3>
        <p className="m-0 font-archivo text-[16px] leading-[24px] text-[#666666]">{bank.desc}</p>
        <dl className="m-0 flex flex-col">
          {bank.rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-[16px] border-b border-[#E5E5E5] py-[14px]">
              <div className="flex flex-col gap-[2px]">
                <dt className="font-archivo text-[14px] text-[#666666]">{r.label}</dt>
                <dd className="m-0 font-archivo text-[17px] font-medium text-[#333333] break-all">{r.value}</dd>
              </div>
              {r.copy && <CopyButton value={r.value} label="" />}
            </div>
          ))}
        </dl>
        <p className="m-0 flex gap-[10px] font-archivo text-[14px] leading-[22px] text-[#8A5A00] bg-[#FFF6E0] p-[14px]">
          <span aria-hidden="true">⚠</span>
          {bank.notice}
        </p>
      </div>
    </div>
  );
}
