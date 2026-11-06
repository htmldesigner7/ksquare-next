import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import ProductTabs from "./ProductTabs";
import ProductGallery, { ProductGalleryMobile } from "./ProductGallery";
import { getDcdbProduct } from "./products-data";
import Disclosure from "@/components/common/Disclosure";
import ContactLink from "@/components/common/ContactLink";

const A = "/assets/product-detail";

const badges = [
  { icon: `${A}/icon_certified.svg`, label: "IEC Certified", w: 42, h: 42 },
  { icon: `${A}/icon_delivery.svg`, label: "Fast Delivery", w: 40, h: 40 },
  { icon: `${A}/made_in_india-3edbf2.png`, label: "Made in India", w: 81, h: 41 },
  { icon: `${A}/icon_warranty.svg`, label: "Warranty Support", w: 40, h: 40 },
];

const faqs = [
  { q: "What solar array sizes is this DCDB suitable for?", a: "This unit is engineered for the specified kW range and MPPT/string configuration noted in the title above, and can be paired with matching inverters for residential, commercial, or industrial installations." },
  { q: "What protection devices are integrated inside the box?", a: "Each DCDB integrates DC-rated fuses or MCBs, surge protection devices (SPDs), and monitoring-ready terminals depending on the configuration selected." },
  { q: "Is the enclosure suitable for outdoor installation?", a: "Yes. All Ksquare DCDBs use IP-rated enclosures designed to withstand dust, moisture, and temperature extremes typical of rooftop and ground-mount solar sites." },
  { q: "Does this product come with a warranty?", a: "Yes, every unit is backed by Ksquare Energy warranty support along with access to our technical service team for installation guidance." },
  { q: "How can I get pricing or a datasheet for this product?", a: 'Use the "Inquiry Now" or "View Datasheet" buttons above, or reach out through our contact page and our team will respond with pricing and technical documentation.' },
];

function Chevron() {
  return (
    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" aria-hidden="true">
      <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputClass =
  "w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[16px] lg:text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors";
const labelClass = "font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getDcdbProduct(slug);

  return (
    <main className="w-full bg-white min-h-dvh pt-[90px] font-archivo overflow-x-clip">
      {/* Header: breadcrumb + title. On mobile/tablet the CTAs render here since
          ProductGallery (which places them at their exact Figma position) is
          desktop-only. */}
      <Container maxWidth="1800" className="pt-[40px] canvas:pt-[55px]">
        <div className="flex flex-col gap-[12px] canvas:max-w-[832px]">
          <div className="flex items-center flex-wrap gap-[10px] font-archivo text-[16px] lg:text-[20px] text-[#333333] leading-[28px]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Chevron />
            <Link href="/products/dcdb" className="hover:text-primary transition-colors">Products</Link>
            <Chevron />
            <Link href="/products/dcdb" className="hover:text-primary transition-colors">DCDB</Link>
            <Chevron />
            <span className="text-primary leading-[26px] truncate max-w-[300px]">{product.breadcrumb}</span>
          </div>
          <h1 className="m-0 font-archivo text-[36px] lg:text-[60px] leading-[1.15] lg:leading-[72px] text-primary font-normal">
            {product.title} <span className="font-recia italic font-semibold">{product.highlight}</span>
          </h1>
        </div>

        <div className="canvas:hidden flex flex-wrap items-center gap-[16px] mt-[24px]">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-[16px] px-[15px] py-[11px] group border border-[#2B398B] bg-primary text-white hover:bg-white hover:text-[#2B398B] transition-colors font-archivo text-[17px] leading-[26px] cursor-pointer"
          >
            <span>Inquiry Now</span>
            <span className="w-[8px] h-[8px] rounded-full bg-white group-hover:bg-[#2B398B] transition-colors" />
          </button>
          <Button variant="outline-primary" showDot>View Datasheet</Button>
        </div>
      </Container>

      {/* Hero visual: navy panel + floating product photo, badges below on white */}
      <Container maxWidth="1800" className="mt-[40px] canvas:-mt-[150px]">
        {/* Desktop */}
        <div className="canvas-zoom hidden canvas:block w-[1800px] mx-auto">
          <ProductGallery
            image={product.image}
            alt={`${product.title} ${product.highlight}`}
            description={product.description}
            patternSrc="/assets/dcdb/gallery/hero-banner.webp"
          />

        {/* Badges row — below the panel, on white, left-aligned to the Figma x-offset */}
        <div className="flex flex-wrap items-center gap-x-[48px] gap-y-[16px] mt-[36px] pl-[24.06%]">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-[8px]">
              <div className="relative shrink-0" style={{ width: badge.w, height: badge.h }}>
                <Image src={badge.icon} alt="" fill className="object-contain" />
              </div>
              <span className="font-archivo text-[24px] leading-[26px] text-[#666666] whitespace-nowrap">{badge.label}</span>
            </div>
          ))}
        </div>
        </div>

        {/* Mobile / tablet fallback */}
        <div className="canvas:hidden flex flex-col gap-[24px]">
          <ProductGalleryMobile
            image={product.image}
            alt={`${product.title} ${product.highlight}`}
            description={product.description}
            patternSrc="/assets/dcdb/gallery/hero-banner.webp"
          />
          <div className="flex flex-wrap items-center gap-x-[32px] gap-y-[16px]">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-[12px]">
                <div className="relative w-[24px] h-[24px] shrink-0">
                  <Image src={badge.icon} alt="" fill className="object-contain" />
                </div>
                <span className="font-archivo text-[15px] text-[#333333]">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Product Detail (tabbed) */}
      <Container maxWidth="1800" className="py-[80px] lg:pt-[96px] lg:pb-[102px]">
        <div className="flex flex-col items-center gap-[40px] w-full">
          <div className="flex flex-col items-center text-center gap-[8px]">
            <h2 className="m-0 font-archivo text-[36px] lg:text-[60px] leading-[1.1] text-primary font-normal">
              Product <span className="font-recia italic">Detail</span>
            </h2>
            <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[700px]">
              Explore complete specifications, features, and support resources for this product.
            </p>
          </div>

          <ProductTabs />
        </div>
      </Container>

      {/* FAQ */}
      <div className="w-full bg-[#F0F5FE] py-[80px] lg:py-[98px] lg:min-h-[800px]">
        <Container maxWidth="1600">
          <div className="flex flex-col items-center gap-[48px] w-full">
            <div className="flex flex-col items-center text-center gap-[8px]">
              <h2 className="m-0 font-archivo text-[36px] lg:text-[60px] leading-[1.1] text-primary font-normal">
                Frequently Asked <span className="font-recia italic">Questions</span>
              </h2>
              <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] max-w-[700px] text-center">
                Find quick answers to common questions about this product, installation, and support.
              </p>
            </div>

            <div className="flex flex-col gap-[24px] w-full">
              {faqs.map((item, index) => (
                <React.Fragment key={item.q}>
                  <Disclosure defaultOpen={index === 0} summaryClassName="flex items-center justify-between gap-[24px]" summary={<>
                      <h3 className="m-0 font-archivo text-[18px] lg:text-[24px] text-[#333333] group-data-[open=true]:font-semibold transition-all">
                        {item.q}
                      </h3>
                      <span className="font-archivo text-[24px] text-[#333333] shrink-0 group-data-[open=true]:hidden">+</span>
                      <span className="font-archivo text-[24px] text-[#333333] shrink-0 hidden group-data-[open=true]:block">-</span>
                    </>}>
                    <div className="pt-[16px]">
                      <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">{item.a}</p>
                    </div>
                  </Disclosure>
                  {index < faqs.length - 1 && <hr className="border-[#DDDDDD]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Request Your Custom Quote */}
      <Container maxWidth="1600" className="py-[80px] lg:pt-[104px] lg:pb-[75px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="m-0 font-dm text-[36px] lg:text-[60px] leading-[1.17] text-primary font-medium">
              Request Your Custom Quote
            </h2>
            <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-primary max-w-[900px] text-justify">
              Reach out to our team with your installation details, and we will get back to you with pricing, availability, and any technical guidance you need.
            </p>
          </div>

          {/* Info cards */}
          <div className="flex flex-col sm:flex-row w-full">
            {[
              { icon: `${A}/icon_phone.svg`, iconSize: 24, title: "Call Us Directly", value: "+91 79 6969 7979", desc: "Product specialists available Mon-Sat, 9 AM - 7 PM" },
              { icon: `${A}/icon_mail.svg`, iconSize: 22, title: "Email Support", value: "info@ksquareenergy.com", desc: "For pricing, datasheets, and technical documentation" },
              { icon: `${A}/icon_pin.svg`, iconSize: 28, title: "Ahmedabad Branch Office", value: "Dholera SIR, Activation Zone, Gujarat – 382460, India", desc: "Visit our manufacturing facility by appointment" },
            ].map((card) => (
              <div key={card.title} className="flex-1 min-w-0 flex flex-row items-start gap-[24px] py-[24px] sm:px-[24px] border-t sm:border-t-0 sm:border-l border-[#E8E4E0] first:border-t-0 first:sm:border-l-0">
                <div className="w-[72px] h-[72px] shrink-0 rounded-full bg-[#EDEEF8] flex items-center justify-center">
                  <div className="relative" style={{ width: card.iconSize, height: card.iconSize }}>
                    <Image src={card.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] min-w-0 break-words">
                  <span className="font-archivo text-[16px] lg:text-[17px] leading-[27px] text-[#333333]">{card.title}</span>
                  <span className="font-dm text-[16px] font-medium text-[#111111]"><ContactLink text={card.value} /></span>
                  <span className="font-archivo text-[17px] leading-[26px] text-[#666666]">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry form */}
          <div className="w-full bg-white border border-[#DDDDDD] p-[24px] lg:p-[32px] flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[12px]">
              <h3 className="m-0 font-dm text-[36px] lg:text-[60px] leading-[1.17] text-primary font-medium">
                Send an <span className="font-recia italic">Enquiry</span>
              </h3>
              <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666] text-justify">
                Please fill out the form below, and our relationship manager will get back to you within 2 hours.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>Full Name</label>
                  <input type="text" placeholder="Enter your full name" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>Email Address</label>
                  <input type="email" placeholder="name@domain.com" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>Phone Number</label>
                  <input type="text" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>State</label>
                  <div className="relative">
                    <select defaultValue="" className={`${inputClass} appearance-none cursor-pointer text-[#666666]`}>
                      <option value="" disabled>Select state</option>
                    </select>
                    <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>City</label>
                  <input type="text" placeholder="Enter City" className={inputClass} />
                </div>
                <div className="flex flex-col gap-[8px] w-full">
                  <label className={labelClass}>Pincode</label>
                  <input type="text" placeholder="Enter Pincode" className={inputClass} />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className={labelClass}>Subject</label>
                <input type="text" placeholder="e.g. Product Inquiry" className={inputClass} />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className={labelClass}>Message / Requirements</label>
                <textarea placeholder="Tell us about your requirements..." className={`${inputClass} h-[120px] resize-y`} />
              </div>
            </div>

            <div>
              <Button variant="outline-primary" showDot className="w-fit">Send Enquiry</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
