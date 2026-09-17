import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <Container maxWidth="1800" className="pt-[40px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[8px] mb-[30px]">
          <Link href="/" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Home
          </Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link href="/products" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Products
          </Link>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-primary font-medium text-[15px]">DCDB</span>
        </div>
        
        {/* Title Group */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[40px] lg:gap-[80px]">
          <h1 className="font-jost text-[50px] lg:text-[68px] leading-[60px] lg:leading-[78px] text-primary font-normal">
            DC Distribution Boxes <br className="hidden lg:block" />
            <span className="font-recia italic font-bold">Engineered to Protect .</span>
          </h1>
          <div className="flex flex-col gap-[24px] pt-[10px]">
            <p className="font-archivo text-[17px] leading-[26px] text-gray-dark max-w-[550px]">
              Explore Expert article installation guides, products updates, industry news and technical resources from Ksquare Energy.
            </p>
            <div className="flex items-center gap-[16px]">
              <Link href="/articles" className="flex items-center gap-[12px] px-[20px] py-[10px] border border-[#C6CCED] text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Browse Articles <span className="w-[6px] h-[6px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
              <Link href="/products" className="flex items-center gap-[12px] px-[20px] py-[10px] border border-[#C6CCED] text-primary text-[15px] font-archivo font-medium hover:bg-primary hover:text-white transition-colors group">
                Explore Products <span className="w-[6px] h-[6px] rounded-full bg-primary group-hover:bg-white transition-colors"></span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Banner Image */}
      <Container maxWidth="1800" exactWidth={false} className="mt-[50px] mb-[120px]">
        <div className="relative w-full h-[600px] flex justify-center items-end overflow-hidden pt-[100px]">
          
          {/* Background Blue Block */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] w-full bg-[#123B7C]">
            <Image 
              src="/assets/img_1_1409.png" 
              alt="Background" 
              fill 
              className="object-cover object-top opacity-90 mix-blend-luminosity"
              priority
            />
            {/* Gradient overlay to match the deep blue look */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#123B7C]/40 to-[#0A224A]"></div>
          </div>
          
          {/* Floating Images */}
          <div className="relative z-10 flex items-center justify-center gap-[20px] lg:gap-[40px] w-full pb-[40px]">
            
            {/* Left Image */}
            <div className="relative w-[240px] lg:w-[320px] h-[320px] lg:h-[420px] -rotate-12 lg:-rotate-[15deg] translate-y-8 drop-shadow-2xl">
              <Image src="/assets/img_1_1412.png" alt="DCDB Variant 1" fill className="object-contain" />
            </div>
            
            {/* Center Image */}
            <div className="relative w-[280px] lg:w-[360px] h-[280px] lg:h-[360px] z-20 drop-shadow-2xl translate-y-4">
              <Image src="/assets/img_1_1414.png" alt="DCDB Variant 2" fill className="object-contain" />
            </div>
            
            {/* Right Image */}
            <div className="relative w-[240px] lg:w-[320px] h-[320px] lg:h-[420px] rotate-12 lg:rotate-[15deg] translate-y-8 drop-shadow-2xl">
              <Image src="/assets/img_1_1413.png" alt="DCDB Variant 3" fill className="object-contain" />
            </div>
          </div>
        </div>
      </Container>

      {/* Core Products Section */}
      <Container className="mb-[120px]">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[20px] max-w-[800px]">
            <h2 className="font-jost text-[60px] leading-[70px] text-primary">
              DCDB Core <span className="font-recia italic font-medium">Products</span>
            </h2>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">
              From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.
            </p>
          </div>
          
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

      {/* Configuration Section */}
      <Container className="mb-[120px]">
        <div className="flex flex-col items-center text-center gap-[60px]">
          <div className="flex flex-col gap-[16px] max-w-[800px]">
            <h2 className="font-jost text-[60px] leading-[70px] text-primary">
              DCDB <span className="font-recia italic font-medium">Configuration</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-[1200px]">
            {/* Config Item 1 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">1 In 1 Out DCDB</h3>
              <p className="font-archivo text-[16px] text-[#666666]">Single-string DC distribution for residential and small rooftop installations.</p>
            </div>
            {/* Config Item 2 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">2 In 2 Out DCDB</h3>
              <p className="font-archivo text-[16px] text-[#666666]">Dual-string configurations for higher capacity commercial and industrial systems.</p>
            </div>
            {/* Config Item 3 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">Fuse Type DCDB</h3>
              <p className="font-archivo text-[16px] text-[#666666]">String fuse protection for precise DC overcurrent safeguarding.</p>
            </div>
            {/* Config Item 4 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">DC SPD Integrated</h3>
              <p className="font-archivo text-[16px] text-[#666666]">Surge protection device integrated for complete transient defence.</p>
            </div>
            {/* Config Item 5 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">MPPT Based DCDB</h3>
              <p className="font-archivo text-[16px] text-[#666666]">Integrated MPPT support to maximise solar energy harvest efficiency.</p>
            </div>
            {/* Config Item 6 */}
            <div className="bg-white border border-[#E8E8E8] rounded-[16px] p-[32px] text-left hover:shadow-lg transition-shadow">
              <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[12px]">MCB Type DCDB</h3>
              <p className="font-archivo text-[16px] text-[#666666]">MCB-based protection with resettable DC circuit protection.</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Why Choose Section */}
      <div className="w-full bg-[#F0F5FE] py-[100px] mb-[100px]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-[80px] items-start">
            <div className="flex-1 flex flex-col gap-[30px]">
              <h2 className="font-jost text-[60px] leading-[70px] text-primary">
                Why Choose a <span className="font-recia italic font-medium">Ksquare DCDB?</span>
              </h2>
              <p className="font-archivo text-[17px] leading-[28px] text-[#666666]">
                Every solar installation requires dependable DC-side protection. Ksquare DC Distribution Boxes are engineered to safeguard your photovoltaic system, improve operational efficiency, and ensure long-term performance under demanding environmental conditions.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[20px]">
              <div className="bg-white rounded-[16px] p-[30px]">
                <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[10px]">Superior Electrical Protection</h3>
                <p className="font-archivo text-[16px] text-[#666666]">A DC Distribution Box serves as the first line of defense for your solar PV system by protecting against overcurrent, short circuits, reverse current, and electrical faults. Ksquare DCDBs integrate premium protection devices to ensure safe power flow between solar panels and the inverter.</p>
              </div>
              <div className="bg-white rounded-[16px] p-[30px]">
                <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[10px]">High-Performance Components</h3>
              </div>
              <div className="bg-white rounded-[16px] p-[30px]">
                <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[10px]">Weatherproof & Outdoor Ready</h3>
              </div>
              <div className="bg-white rounded-[16px] p-[30px]">
                <h3 className="font-archivo text-[24px] font-semibold text-primary mb-[10px]">Built for Every Solar Project</h3>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </main>
  );
}
