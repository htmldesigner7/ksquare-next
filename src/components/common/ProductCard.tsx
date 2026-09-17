import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ProductCard({ imageSrc, title, description, href, className }: ProductCardProps) {
  return (
    <div className={clsx("group flex flex-col w-full", className)}>
      {/* Image Container with light gray background matching Figma */}
      <Link href={href} className="relative w-full aspect-[4/3] bg-[#F2F4F8] rounded-none overflow-hidden block">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-contain p-6"
        />
      </Link>
      
      {/* Content */}
      <div className="flex flex-col pt-5 pb-2 flex-1">
        <Link href={href}>
          <h3 className="font-archivo text-[20px] leading-tight font-semibold text-gray-darker mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="font-sans text-[14px] leading-relaxed text-gray-dark mb-5 flex-1 min-h-[40px]">
          {description}
        </p>
        
        {/* Action Button: Border outline with text & dot matching Figma */}
        <div>
          <Link 
            href={href}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-primary text-primary font-archivo text-[13px] font-medium transition-colors hover:bg-primary hover:text-white group/btn"
          >
            <span>View Product</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/btn:bg-white transition-colors"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
