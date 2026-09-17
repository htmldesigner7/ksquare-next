import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full bg-white min-h-screen pt-[90px]">
      
      {/* Breadcrumb */}
      <Container className="pt-[40px] pb-[20px] flex items-center gap-[10px] text-[20px] font-archivo">
        <span className="text-gray-dark hover:text-primary cursor-pointer transition-colors">Home</span>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none">
          <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-gray-dark hover:text-primary cursor-pointer transition-colors">DCDB</span>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none">
          <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-primary font-medium truncate max-w-[400px]">Blitz Type 2 Surge Protection</span>
      </Container>

      {/* Main Product Section */}
      <Container className="mb-[120px]">
        <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[120px] items-start mt-[40px]">
          
          {/* Product Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-8 group">
              <Image 
                src="/assets/img_1_2632.png" 
                alt="Blitz Type 2 Surge Protection" 
                fill
                className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-primary transition-colors">
                  <Image 
                    src="/assets/img_1_2632.png" 
                    alt="Thumbnail" 
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 pt-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-jost text-[48px] lg:text-[60px] leading-tight text-gray-dark font-medium">
                Blitz Type 2 Surge Protection Device
              </h1>
              <p className="font-archivo text-[20px] leading-[32px] text-gray-medium">
                Protect your three-phase electrical systems with the Blitz Type 2 Surge Protection Device (BLT-AC-4P). Designed for 3-phase AC setups, it delivers dependable protection against lightning strikes and voltage spikes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary font-archivo text-[16px] rounded-full">
                <span>✓ DIN-rail mount</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary font-archivo text-[16px] rounded-full">
                <span>✓ Visual fault indicators</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary font-archivo text-[16px] rounded-full">
                <span>✓ 3-Phase AC</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <Button variant="solid" showDot className="!bg-primary text-white hover:!bg-primary-dark w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1">
                Request Quote
              </Button>
              <Button variant="outline" showDot className="!border-primary !text-primary hover:!bg-primary hover:!text-white w-full sm:w-auto">
                Download Datasheet
              </Button>
            </div>
          </div>

        </div>
      </Container>

      {/* Technical Specifications Section */}
      <section className="w-full bg-gray-50 py-[120px]">
        <Container>
          <div className="flex flex-col gap-[60px]">
            <h2 className="font-jost text-[48px] text-gray-dark text-center font-medium">
              Technical Specifications
            </h2>
            
            <div className="max-w-[1000px] mx-auto w-full bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
              {[
                { label: 'Model', value: 'BLT-AC-4P' },
                { label: 'Type', value: 'Type 2 AC Surge Protection' },
                { label: 'Nominal Discharge Current (In)', value: '20 kA' },
                { label: 'Maximum Discharge Current (Imax)', value: '40 kA' },
                { label: 'Maximum Continuous Operating Voltage (Uc)', value: '420V AC' },
                { label: 'Voltage Protection Level (Up)', value: '≤ 1.8 kV' },
                { label: 'Response Time', value: '< 25 ns' },
                { label: 'Mounting', value: '35mm DIN-rail' }
              ].map((spec, i) => (
                <div key={i} className={`flex flex-col sm:flex-row border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <div className="w-full sm:w-[40%] p-6 font-archivo text-[18px] text-gray-dark font-medium">
                    {spec.label}
                  </div>
                  <div className="w-full sm:w-[60%] p-6 font-sans text-[18px] text-gray-medium">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
