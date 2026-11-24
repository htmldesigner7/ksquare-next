import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import ContactLink from "@/components/common/ContactLink";
import RichTitle from "@/components/common/RichTitle";
import CategoryConfiguration from "@/components/products/CategoryConfiguration";
import WhyChoose from "@/components/products/WhyChoose";
import { getCategory, htmlToText } from '@/lib/catalog';
import ButtonArrow from "@/components/common/ButtonArrow";

type Params = Promise<{ category: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = await getCategory((await params).category);
  if (!category) return { title: "Products | Ksquare Energy" };
  return {
    title: category.meta_title || `${(category.title || category.name).replace(/[*]/g, "")} | Ksquare Energy`,
    description: category.meta_description || htmlToText(category.short_description).slice(0, 300),
  };
}

const Chevron = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function CategoryPage({ params }: { params: Params }) {
  const category = await getCategory((await params).category);
  if (!category) notFound();

  const { products, configuration } = category;
  const productLine = category.product_short_line || category.product_summary;
  const hasWhyChoose = !!(category.why_choose_title || category.why_choose_desc || category.why_choose_summary);

  // Category and product images are served by the API (another origin), so they are not optimised by next/image.
  return (
    <main className="w-full bg-white min-h-dvh pt-[90px] pb-[60px] lg:pb-[93px]">

      {/* Title & Breadcrumb Section */}
      <Container maxWidth="1800" className="pt-[40px]">
        <div className="flex items-center gap-[8px] mb-[30px]">
          <Link href="/" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Home
          </Link>
          <Chevron />
          <Link href="/products" className="text-gray-dark font-archivo text-[15px] hover:text-primary transition-colors">
            Products
          </Link>
          <Chevron />
          <span className="text-primary font-medium text-[15px]">{category.name}</span>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-[16px] xl:gap-[80px]">
          {/* The category title; wrap the italic part in *asterisks*, e.g. "DC Distribution Boxes *Engineered to Protect .*" */}
          <RichTitle
            as="h1"
            text={category.title || category.name}
            breakBeforeAccent
            accentClassName="font-recia !font-bold"
            className="font-recia text-[38px] sm:text-[50px] lg:text-[68px] leading-[46px] sm:leading-[60px] lg:leading-[78px] text-primary font-normal"
          />
          <div className="flex flex-col gap-[24px] pt-0 xl:pt-[10px]">
            <div className="blog-article font-archivo text-[17px] leading-[26px] text-gray-dark max-w-[650px]" dangerouslySetInnerHTML={{ __html: category.short_description }} />
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-[16px]">
              <Button href="/contact" variant="outline-primary" showDot>Request a Quote</Button>
              <Button href="/download-resources" variant="outline-primary" showDot>Download Datasheet</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Banner Image */}
      {(category.detail_image_d || category.detail_image_m) && (
        <Container maxWidth="1800" exactWidth={false} className="mt-[37.5px]">
          <div className="relative w-full aspect-[16/6] md:aspect-[16/7] lg:aspect-[1800/622] flex justify-center items-center overflow-hidden">
            <Image
              src={(category.detail_image_d ?? category.detail_image_m)!}
              alt={category.name}
              fill
              unoptimized
              className={`object-contain ${category.detail_image_m && category.detail_image_d ? 'hidden md:block' : ''}`}
              priority
            />
            {category.detail_image_m && category.detail_image_d && (
              <Image src={category.detail_image_m} alt={category.name} fill unoptimized className="object-contain md:hidden" priority />
            )}
          </div>
        </Container>
      )}

      <div className="flex flex-col gap-[60px] lg:gap-[110px] mt-[60px] lg:mt-[110px]">
      {/* Products */}
      {products.length > 0 && (
        <Container maxWidth="1600">
          <div className="flex flex-col gap-[32px] lg:gap-[60px]">
            <div className="flex flex-col gap-[8px] items-center text-center">
              <h2 className="font-archivo text-[34px] sm:text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[71px] text-primary font-normal">
                {category.name} <span className="font-recia italic leading-none">Products</span>
              </h2>
              {productLine && <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{productLine}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[27px]">
              {products.map((product) => {
                const href = `/product/${product.slug}`;
                return (
                  <div key={product.slug} className="flex flex-col w-full max-w-[380px] md:max-w-none xl:max-w-[380px] h-[614px] mx-auto gap-[24px]">
                    <Link href={href} className="img-hover-zoom w-full h-[400px] bg-[#EFF0F6] flex items-center justify-center py-[30px] px-[72px]">
                      <div className="relative w-full h-full flex justify-center items-center">
                        {product.list_img && <Image src={product.list_img} alt={product.title} fill unoptimized className="object-contain mix-blend-multiply" />}
                      </div>
                    </Link>

                    <div className="flex flex-col min-h-[190px] desk:h-[190px] gap-[24px]">
                      <div className="flex flex-col gap-[12px] min-h-[116px] desk:h-[116px]">
                        <h3 className="font-archivo text-[24px] leading-[26px] font-medium text-[#333333] line-clamp-2">{product.title}</h3>
                        <p className="font-archivo text-[17px] leading-[26px] text-[#666666] line-clamp-3">{htmlToText(product.short_description)}</p>
                      </div>
                      <div className="flex h-[50px] justify-start">
                        <Button href={href} variant="outline-primary" showDot className="!w-[156px] !h-[50px] !px-[16px] !py-[12px] !rounded-none">
                          <span className="whitespace-nowrap">View Product</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      )}

      {/* Configuration */}
      {configuration.length > 0 && <CategoryConfiguration name={category.name} shortLine={category.configuration_short_line} items={configuration} />}

      {/* Why Choose */}
      {hasWhyChoose && (
        <WhyChoose name={category.name} title={category.why_choose_title} summary={category.why_choose_summary} html={category.why_choose_desc} image={category.why_choose_img} />
      )}

      {/* Request Your Custom Quote Section (Figma 106:1599: 1600 wide, 32px gap, 1210 tall) */}
      <div className="w-full">
        <Container>
          <div className="flex flex-col gap-[32px] w-full mx-auto">

            {/* Top Info Section (Title & Cards) */}
            <div className="flex flex-col gap-[24px]">
              {/* Header */}
              <div className="flex flex-col gap-[12px]">
                <h2 className="m-0 font-dm text-[34px] sm:text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[70px] text-primary font-medium">
                  Request Your Custom Quote
                </h2>
                <p className="m-0 font-archivo text-[16px] lg:text-[17px] text-primary leading-[26px]">
                  Reach out to our team with your installation details, and we will get back to you with pricing, availability, and any technical guidance you need.
                </p>
              </div>

              {/* Info Cards (Figma: row, 16px gap, 24px padding, 72px icon badge, 1px right rule) */}
              <div className="flex flex-col lg:flex-row gap-[16px] w-full">
                {[
                  {
                    label: "Call Us Directly",
                    value: "+91 79 6969 7979",
                    note: "Toll-free specialist helpline: Mon-Sat, 9 AM - 7 PM",
                    icon: <svg width="24" height="24" viewBox="0 0 18 18" fill="#2B398B" aria-hidden="true"><path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.56 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.24 5.7 3.44 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" /></svg>,
                  },
                  {
                    label: "Email Support",
                    value: "info@ksquareenergy.com",
                    note: "For project portfolios, floor plans, and corporate pricing",
                    icon: <Image src="/assets/footer/contact-mail.svg" alt="" width={29} height={22} aria-hidden="true" />,
                  },
                  {
                    label: "Ahmedabad Branch Office",
                    value: "Dholera SIR, Activation Zone Gujarat – 382460, India",
                    note: "Strategically located inside the smart city development zone",
                    icon: <svg width="22" height="26" viewBox="0 0 17 20" fill="#2B398B" aria-hidden="true"><path d="M8.5 0C3.8 0 0 3.8 0 8.5C0 14.9 8.5 20 8.5 20C8.5 20 17 14.9 17 8.5C17 3.8 13.2 0 8.5 0ZM8.5 11.5C6.8 11.5 5.5 10.2 5.5 8.5C5.5 6.8 6.8 5.5 8.5 5.5C10.2 5.5 11.5 6.8 11.5 8.5C11.5 10.2 10.2 11.5 8.5 11.5Z" /></svg>,
                  },
                ].map((card, i) => (
                  <div key={card.label} className={`flex-1 flex items-start gap-[24px] py-[20px] ${i === 0 ? "pr-[24px]" : "lg:px-[24px]"} ${i < 2 ? "lg:border-r border-[#E8E4E0]" : ""}`}>
                    <div className="w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] bg-[#EDEEF8] rounded-full flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-[4px] min-w-0">
                      <h4 className="m-0 font-archivo font-normal text-[17px] leading-[27px] text-[#333333]">{card.label}</h4>
                      <p className="m-0 font-dm text-[16px] font-medium text-[#111111]"><ContactLink text={card.value} /></p>
                      <p className="m-0 font-archivo text-[17px] leading-[26px] text-[#666666]">{card.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Box (Figma: 32px padding, 32px gap, #DDDDDD border) */}
            <div className="w-full lg:max-w-[1576px] bg-white border border-[#DDDDDD] p-[24px] lg:p-[32px] flex flex-col gap-[32px]">

              {/* Form Title */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="m-0 text-[34px] sm:text-[40px] lg:text-[60px] font-medium text-primary leading-[1.2] lg:leading-[70px] font-dm">
                  Send an <span className="font-recia italic">Enquiry</span>
                </h3>
                <p className="m-0 font-archivo text-[16px] lg:text-[17px] leading-[26px] text-[#666666]">
                  Please fill out the form below, and our relationship manager will get back to you within 2 hours.
                </p>
              </div>

              {/* Form Inputs (Figma: 20px between rows and columns, 8px label gap, 12/16 input padding) */}
              <div className="flex flex-col gap-[20px]">
                {[
                  [
                    { label: "Full Name", type: "text", ph: "Enter your full name" },
                    { label: "Email Address", type: "email", ph: "name@domain.com" },
                  ],
                  [
                    { label: "Phone Number", type: "text", ph: "+91 XXXXX XXXXX" },
                    { label: "States", type: "select", ph: "Select budget range." },
                  ],
                  [
                    { label: "City", type: "text", ph: "Enter City" },
                    { label: "Pincode", type: "text", ph: "Enter Pincode" },
                  ],
                ].map((row, ri) => (
                  <div key={ri} className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {row.map((f) => (
                      <div key={f.label} className="flex flex-col gap-[8px]">
                        <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">{f.label}</label>
                        {f.type === "select" ? (
                          <div className="relative">
                            <select className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#666666] focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                              <option>{f.ph}</option>
                            </select>
                            <div className="absolute inset-y-0 right-[16px] flex items-center pointer-events-none">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5H7z" fill="#2B398B" /></svg>
                            </div>
                          </div>
                        ) : (
                          <input type={f.type} placeholder={f.ph} className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Subject</label>
                  <input type="text" placeholder="e.g. Project Name." className="w-full border border-[#DDDDDD] bg-white px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-archivo text-[17px] leading-[27px] text-[#333333]">Message / Requirements</label>
                  <textarea placeholder="Tell us about your investment goals..." className="w-full border border-[#DDDDDD] bg-white h-[105px] px-[16px] py-[12px] font-archivo text-[18px] leading-[1.55em] text-[#333333] placeholder:text-[#666666] focus:outline-none focus:border-primary transition-colors resize-y"></textarea>
                </div>
              </div>

              {/* Form Button (Figma: 12/16 padding, 17/26 text, 8px dot) */}
              <button className="flex items-center justify-center gap-[16px] bg-white border border-[#2B398B] text-[#2B398B] px-[15px] py-[11px] hover:bg-[#2B398B] hover:text-white transition-colors duration-300 font-archivo text-[17px] leading-[26px] w-fit group">
                <span>Send Enquiry</span>
                <ButtonArrow className="text-[#2B398B] group-hover:text-white" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      </div>

    </main>
  );
}
