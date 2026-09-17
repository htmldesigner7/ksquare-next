import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: '1400' | '1600' | '1800' | '1920';
  exactWidth?: boolean;
}

export default function Container({ 
  children, 
  className, 
  maxWidth = '1600',
  exactWidth = false
}: ContainerProps) {
  
  const widths = {
    '1400': exactWidth ? 'w-[1400px]' : 'max-w-[1400px]',
    '1600': exactWidth ? 'w-[1600px]' : 'max-w-[1600px]',
    '1800': exactWidth ? 'w-[1800px]' : 'max-w-[1800px]',
    '1920': exactWidth ? 'w-[1920px]' : 'max-w-[1920px]',
  };

  return (
    <div className={clsx("mx-auto w-full px-4 lg:px-8 xl:px-0", widths[maxWidth], className)}>
      {children}
    </div>
  );
}
