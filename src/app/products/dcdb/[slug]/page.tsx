import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

const badges = [
  { icon: '/assets/dcdb/icon_certified.svg', label: 'IEC Certified' },
  { icon: '/assets/dcdb/icon_fast_delivery.svg', label: 'Fast Delivery' },
  { icon: '/assets/dcdb/made_in_india.png', label: 'Made in India' },
  { icon: '/assets/dcdb/icon_warranty.svg', label: 'Warranty Support' },
];

const tabs = ['Product Highlights', 'Benefits', 'Product Features', 'Technical Specifications', 'Installation Process'];

const benefits = [
  {
    title: 'Enhanced Electrical Safety',
    desc: 'Protects your solar PV system against overcurrent, short circuits, reverse current, and voltage fluctuations, helping prevent equipment damage and ensuring safe operation.',
  },
  {
    title: 'Maximum System Reliability',
    desc: 'Consistent DC-side protection keeps your array running at peak output, minimising unplanned downtime across the life of the installation.',
  },
  {
    title: 'Reduced Maintenance Costs',
    desc: 'Durable, high-grade components reduce the frequency of field servicing, lowering the total cost of ownership over the system lifetime.',
  },
  {
    title: 'Weatherproof Performance',
    desc: 'IP-rated enclosures resist dust, moisture, and extreme temperatures, making the unit dependable in outdoor and rooftop conditions.',
  },
  {
    title: 'Faster & Easier Installation',
    desc: 'Clearly labelled terminals and a compact modular layout cut installation time for EPCs and field technicians.',
  },
  {
    title: 'Long Service Life',
    desc: 'Built with premium fuses, MCBs, and surge protection devices engineered for reliable performance over 25+ years.',
  },
];

const faqs = [
  {
    q: 'What solar array sizes is this DCDB suitable for?',
    a: 'This unit is engineered for the specified kW range and MPPT/string configuration noted in the title above, and can be paired with matching inverters for residential, commercial, or industrial installations.',
  },
  {
    q: 'What protection devices are integrated inside the box?',
    a: 'Each DCDB integrates DC-rated fuses or MCBs, surge protection devices (SPDs), and monitoring-ready terminals depending on the configuration selected.',
  },
  {
    q: 'Is the enclosure suitable for outdoor installation?',
    a: 'Yes. All Ksquare DCDBs use IP-rated enclosures designed to withstand dust, moisture, and temperature extremes typical of rooftop and ground-mount solar sites.',
  },
  {
    q: 'Does this product come with a warranty?',
    a: 'Yes, every unit is backed by Ksquare Energy warranty support along with access to our technical service team for installation guidance.',
  },
  {
    q: 'How can I get pricing or a datasheet for this product?',
    a: 'Use the "Inquiry Now" or "View Datasheet" buttons above, or reach out through our contact page and our team will respond with pricing and technical documentation.',
  },
];

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;

  const productTitle = '1-3.5kW DCDB 1IN 1OUT 1MPPT';
  const productHighlight = 'Fuse Type';

  return (
    <main className="w-full bg-white min-h-screen pt-[90px]">

      {/* Breadcrumb */}
      <Container maxWidth="1800" className="pt-[40px] flex items-center flex-wrap gap-[10px] text-[20px] font-archivo">
        <Link href="/" className="text-[#333333] hover:text-primary transition-colors">Home</Link>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <Link href="/products" className="text-[#333333] hover:text-primary transition-colors">Products</Link>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <Link href="/products/dcdb" className="text-[#333333] hover:text-primary transition-colors">DCDB</Link>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="text-primary font-medium truncate max-w-[400px]">{productTitle} {productHighlight}</span>
      </Container>

      {/* Hero */}
      <Container maxWidth="1800" className="mt-[30px]">
        <div className="relative w-full rounded-[24px] overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <Image src="/assets/dcdb/product_hero_bg.png" alt="" fill className="object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          </div>

          <div className="relative z-10 flex flex-col gap-[32px] px-[32px] py-[60px] lg:px-[96px] lg:py-[100px]">
            <h1 className="font-jost text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[72px] text-white max-w-[788px]">
              {productTitle}{' '}
              <span className="font-recia italic font-semibold">{productHighlight}</span>
            </h1>

            <p className="font-archivo text-[16px] lg:text-[20px] leading-[1.5] lg:leading-[30px] text-[#EDF3FF] max-w-[700px]">
              Engineered DC-side protection for solar PV systems — combining premium fuses, MCBs, and surge protection in a compact, weatherproof enclosure built for long-term field reliability.
            </p>

            <div className="flex flex-wrap items-center gap-[16px]">
              <Button variant="solid" showDot className="!bg-white !text-primary">
                Inquiry Now
              </Button>
              <Button variant="outline" showDot>
                View Datasheet
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-[48px] gap-y-[24px] pt-[16px] border-t border-white/20">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-[12px]">
                  <div className="relative w-[28px] h-[28px] shrink-0">
                    <Image src={badge.icon} alt="" fill className="object-contain" />
                  </div>
                  <span className="font-archivo text-[16px] lg:text-[18px] text-white">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Product Detail: Benefits (tabbed) */}
      <Container maxWidth="1800" className="py-[80px] lg:py-[120px]">
        <div className="flex flex-col items-center gap-[40px] w-full">

          {/* Section Title */}
          <div className="flex flex-col items-center text-center gap-[8px]">
            <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.1] text-primary font-normal">
              Product <span className="font-recia italic">Detail</span>
            </h2>
            <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[700px]">
              Explore complete specifications, features, and support resources for this product.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-[12px] lg:gap-[18px] w-full border-b border-[#E8E8E8]">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={
                  tab === 'Benefits'
                    ? 'flex items-center px-[16px] py-[12px] lg:px-[28px] lg:py-[16px] border-b-2 border-primary'
                    : 'flex items-center px-[16px] py-[12px] lg:px-[28px] lg:py-[16px]'
                }
              >
                <span
                  className={
                    tab === 'Benefits'
                      ? 'font-archivo text-[16px] lg:text-[24px] font-semibold text-primary whitespace-nowrap'
                      : 'font-archivo text-[15px] lg:text-[24px] text-[#666666] whitespace-nowrap'
                  }
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits content */}
          <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[60px] w-full pt-[20px]">
            <div className="hidden lg:flex w-[100px] shrink-0 items-center justify-center">
              <span className="font-recia italic font-light text-[64px] text-[#9DBCF3] leading-none">Benefits</span>
            </div>
            <div className="hidden lg:block w-[1px] self-stretch bg-[#C6CCED]" />

            <div className="flex flex-col gap-[24px] w-full">
              {benefits.map((item, i) => (
                <React.Fragment key={item.title}>
                  <div className="flex items-start gap-[24px]">
                    <div className="w-[48px] h-[48px] shrink-0 rounded-[5px] bg-[#EDF3FF] flex items-center justify-center">
                      <span className="font-archivo text-[17px] text-[#333333]">{i + 1}</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="font-archivo text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[32px] font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i < benefits.length - 1 && <hr className="border-[#9DBCF3]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <div className="w-full bg-[#F0F5FE] py-[80px] lg:py-[100px]">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[48px] w-full">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h2 className="font-jost text-[36px] lg:text-[60px] leading-[1.1] text-primary font-normal">
                Frequently Asked <span className="font-recia italic">Questions</span>
              </h2>
              <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[700px] text-center">
                Find quick answers to common questions about this product, installation, and support.
              </p>
            </div>

            <div className="flex flex-col gap-[24px] w-full">
              {faqs.map((item, index) => (
                <React.Fragment key={item.q}>
                  <details className="group" open={index === 0}>
                    <summary className="flex items-center justify-between gap-[24px] cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <h3 className="font-archivo text-[18px] lg:text-[24px] text-[#333333] group-open:font-semibold transition-all">
                        {item.q}
                      </h3>
                      <span className="font-archivo text-[24px] text-[#333333] shrink-0 group-open:hidden">+</span>
                      <span className="font-archivo text-[24px] text-[#333333] shrink-0 hidden group-open:block">-</span>
                    </summary>
                    <div className="pt-[16px]">
                      <p className="font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                        {item.a}
                      </p>
                    </div>
                  </details>
                  {index < faqs.length - 1 && <hr className="border-[#DDDDDD]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>

    </main>
  );
}
