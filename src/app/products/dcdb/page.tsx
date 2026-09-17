import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import ProductCard from '@/components/common/ProductCard';
import Button from '@/components/common/Button';

export default function DcdbProductListing() {
  const products = [
    {
      id: '1',
      title: '1-3.5kW DCDB 1IN 1OUT 1MPPT Fuse',
      description: 'AC distribution with NVR protection, RYB indication available.',
      imageSrc: '/assets/img_1_1444.png',
      href: '/products/dcdb/1'
    },
    {
      id: '2',
      title: '1-3.5kW DCDB 1IN 1OUT 1MPPT MCB Type',
      description: 'AC distribution with NVR protection, RYB indication available.',
      imageSrc: '/assets/img_1_1455.png',
      href: '/products/dcdb/2'
    },
    {
      id: '3',
      title: '4-7kW DCDB 2IN 2OUT 2MPPT MCB type',
      description: 'Multi-string combiners for utility and commercial-scale arrays.',
      imageSrc: '/assets/img_1_1466.png',
      href: '/products/dcdb/3'
    },
    {
      id: '4',
      title: '8.10 KW DCDB 2in 2out 2mppt mcb type',
      description: 'Array junction boxes with monitoring-ready terminal layouts.',
      imageSrc: '/assets/img_1_1477.png',
      href: '/products/dcdb/4'
    }
  ];

  return (
    <main className="w-full bg-white min-h-screen pt-[90px]">
      
      {/* Title & Breadcrumb Section */}
      <Container className="pt-[41px] pb-[40px] flex flex-col gap-[43px]">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-[10px] text-[20px] font-archivo">
          <span className="text-gray-dark">Home</span>
          <svg width="5" height="10" viewBox="0 0 5 10" fill="none">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-primary font-medium">DCDB</span>
        </div>
        {/* Title Group */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[40px]">
          <h1 className="font-jost text-[68px] leading-[78px] text-primary max-w-[873px]">
            DC Distribution Boxes Engineered to Protect .
          </h1>
          <p className="font-archivo text-[24px] leading-[36px] text-gray-dark max-w-[816px]">
            Explore Expert article installation guides, products updates, industry news and technical resources from Ksquare Energy.
          </p>
        </div>
      </Container>

      {/* Featured Banner Image */}
      <Container maxWidth="1800" exactWidth={false} className="mt-[20px] mb-[120px]">
        <div className="relative w-full h-[500px] rounded-[24px] overflow-hidden group">
          <Image 
            src="/assets/img_1_1409.png" 
            alt="DCDB Smart Home Device" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Overlay Box */}
          <div className="absolute top-0 right-[305px] w-[1193px] h-full pointer-events-none">
            {/* The overlay from Figma 1:1410 was likely a gradient or text block. 
                We will let it be transparent or adjust if needed */}
          </div>
        </div>
      </Container>

      {/* Product Grid Section */}
      <Container className="mb-[120px]">
        <div className="flex flex-col gap-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="solid" showDot className="!bg-primary text-white hover:!bg-primary-dark shadow-lg">
              View All Products
            </Button>
          </div>
        </div>
      </Container>

    </main>
  );
}
