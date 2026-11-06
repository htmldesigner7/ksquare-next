"use client";

import React, { useState } from "react";

/** Figma "Track Your Solar Project Status": one-line search (tracking ID + button), helper copy and a phone look-up link. */
export default function TrackerBar({
  placeholder,
  button,
  note,
  link,
  success,
}: {
  placeholder: string;
  button: string;
  note: string;
  link: { label: string; href: string };
  success: string;
}) {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = String(new FormData(e.currentTarget).get("ref") ?? "").trim();
    if (!v) {
      setError("Enter your tracking ID or reference number");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <div className="mx-auto flex w-full max-w-[900px] flex-col gap-[16px] lg:gap-[33px]">
      <form noValidate onSubmit={onSubmit} className="flex flex-col gap-[12px] sm:flex-row">
        <label htmlFor="track-ref" className="sr-only">
          Tracking ID or reference number
        </label>
        <input
          id="track-ref"
          name="ref"
          type="text"
          placeholder={placeholder}
          aria-invalid={!!error}
          className="h-[56px] min-w-0 flex-1 border border-[#C6CCED] bg-[#EEEFF6] px-[20px] font-archivo text-[16px] lg:h-[62px] lg:text-[17px] text-[#333333] placeholder:text-[#666666] focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          className="h-[56px] bg-[#555FAB] px-[24px] font-archivo text-[16px] font-semibold text-white transition-colors hover:bg-primary lg:h-[62px] lg:w-[175px] lg:text-[17px] cursor-pointer"
        >
          {button}
        </button>
      </form>
      {error && <p className="m-0 -mt-[8px] font-archivo text-[14px] text-[#D93025]">{error}</p>}
      {sent && (
        <p role="status" className="m-0 font-archivo text-[16px] leading-[26px] text-[#333333]">
          {success}
        </p>
      )}
      <div className="flex flex-col gap-[8px] sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 font-archivo text-[15px] lg:text-[17px] leading-[26px] text-[#666666]">{note}</p>
        <a href={link.href} className="font-archivo text-[14px] font-medium text-[#4A56B5] underline underline-offset-2 hover:text-primary">
          {link.label}
        </a>
      </div>
    </div>
  );
}
