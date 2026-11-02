import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '1400' | '1600' | '1800' | '1920';
  exactWidth?: boolean;
  style?: React.CSSProperties;
}

export default function Container({ 
  children, 
  className, 
  maxWidth = '1600',
  exactWidth = false,
  style
}: ContainerProps) {
  
  // Side gutters stay until the viewport is wider than the content box plus gutters (max + 64px).
  const widths = {
    '1400': (exactWidth ? 'w-[1400px]' : 'max-w-[1400px]') + ' g1464:px-0',
    '1600': (exactWidth ? 'w-[1600px]' : 'max-w-[1600px]') + ' g1664:px-0',
    '1800': (exactWidth ? 'w-[1800px]' : 'max-w-[1800px]') + ' g1864:px-0',
    '1920': (exactWidth ? 'w-[1920px]' : 'max-w-[1920px]') + ' g1984:px-0',
  };

  return (
    <div style={style} className={clsx("mx-auto w-full px-4 lg:px-8", widths[maxWidth], className)}>
      {children}
    </div>
  );
}
