import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionSpacerProps {
  /**
   * The height of the spacer in pixels.
   * Standardizes the gap between major page sections.
   */
  size?: 60 | 80 | 100 | 120 | 150;
  className?: string;
}

/**
 * A reusable component to maintain consistent vertical spacing between sections.
 * Use this instead of adding arbitrary top/bottom margins to sections.
 */
export default function SectionSpacer({ size = 100, className }: SectionSpacerProps) {
  return (
    <div 
      aria-hidden="true" 
      className={twMerge(
        'w-full',
        size === 60 && 'h-[60px]',
        size === 80 && 'h-[80px]',
        size === 100 && 'h-[100px]',
        size === 120 && 'h-[120px]',
        size === 150 && 'h-[150px]',
        className
      )}
    />
  );
}
