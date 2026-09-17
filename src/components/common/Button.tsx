import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  href?: string;
  className?: string;
  children: React.ReactNode;
  showDot?: boolean;
}

export default function Button({ 
  variant = 'solid', 
  href, 
  className, 
  children, 
  showDot = false,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "flex items-center justify-center gap-[16px] transition-all duration-300 font-archivo group";
  
  const variants = {
    solid: "bg-white text-primary hover:bg-gray-100 px-[24px] py-[12px] border border-transparent",
    outline: "border border-white text-white hover:bg-white hover:text-primary px-[24px] py-[12px]",
    ghost: "text-[#C6CCED] hover:text-white px-[16px] py-[12px] border border-transparent hover:border-white"
  };

  const dotStyles = {
    solid: "bg-primary-dark group-hover:bg-primary",
    outline: "bg-white group-hover:bg-primary",
    ghost: "bg-[#C6CCED] group-hover:bg-white"
  };

  const classes = clsx(baseStyles, variants[variant], className);

  const inner = (
    <>
      <span className="leading-none text-[17px] font-normal">{children}</span>
      {showDot && (
        <span className={clsx("w-[8px] h-[8px] rounded-full shrink-0 transition-colors", dotStyles[variant])}></span>
      )}
    </>
  );

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
