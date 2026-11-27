'use client';

import React from 'react';
import { useCtaHref } from './TelProvider';
import Link from 'next/link';
import clsx from 'clsx';
import ButtonArrow from './ButtonArrow';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'outline-primary';
  href?: string;
  className?: string;
  children: React.ReactNode;
  showDot?: boolean;
  /** Opens `href` (an outside site) in a new tab. */
  external?: boolean;
}

export default function Button({ 
  variant = 'solid', 
  href, 
  className, 
  children, 
  showDot = false,
  external = false,
  ...props
}: ButtonProps) {
  href = useCtaHref(children, href);

  const baseStyles = "flex items-center justify-center gap-[16px] transition-all duration-300 font-archivo group";
  
  const variants = {
    solid: "bg-white text-primary hover:bg-gray-100 px-[15px] py-[11px] border border-transparent",
    outline: "border border-white text-white hover:bg-white hover:text-primary px-[15px] py-[11px]",
    "outline-primary": "border border-primary text-primary hover:bg-primary hover:text-white px-[15px] py-[11px]",
    ghost: "text-[#C6CCED] hover:text-white px-[16px] py-[12px] border border-transparent hover:border-white"
  };

  const dotStyles = {
    solid: "text-primary-dark group-hover:text-primary",
    outline: "text-white group-hover:text-primary",
    "outline-primary": "text-primary group-hover:text-white",
    ghost: "text-[#C6CCED] group-hover:text-white"
  };

  const classes = clsx(baseStyles, variants[variant as keyof typeof variants], className);

  const inner = (
    <>
      <span className="leading-[26px] text-[17px] font-normal">{children}</span>
      {showDot && (
        <ButtonArrow className={dotStyles[variant]} />
      )}
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  );
}
