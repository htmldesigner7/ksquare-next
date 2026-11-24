import React from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import Disclosure from "@/components/common/Disclosure";
import RichTitle from "@/components/common/RichTitle";

/** Plain text of a heading: tags removed, common entities decoded (the text is rendered by React, which escapes it again). */
const headingText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();

/** Accordion entries from the (API-sanitized) rich text: every heading is an item title, the content after it is its text. */
function parseItems(html: string): { title: string; body: string }[] {
  const parts = html.split(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/i);
  const items: { title: string; body: string }[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    items.push({ title: headingText(parts[i]), body: (parts[i + 1] ?? "").trim() });
  }
  return items;
}

const FALLBACK_IMAGE = "/assets/dcdb/why_choose.png";

type Props = { name: string; title: string | null; summary: string | null; html: string | null; image: string | null };

/** "Why Choose ..." section: numbered accordion on the left, picture on the right (same design as the original DCDB page). */
export default function WhyChoose({ name, title, summary, html, image }: Props) {
  const items = html ? parseItems(html) : [];
  const heading = title || `Why Choose *${name}?*`;

  return (
    <div className="w-full bg-[#F0F5FE] py-[60px] lg:py-0 lg:min-h-[900px] lg:flex lg:items-center">
      <Container>
        <div className="flex flex-col gap-[40px] lg:gap-[60px] lg:py-[60px]">
          <div className="flex flex-col gap-[8px] w-full text-center">
            <RichTitle
              as="h2"
              text={heading}
              accentClassName="!font-semibold"
              className="font-archivo text-[34px] sm:text-[40px] lg:text-[60px] leading-[1.2] lg:leading-[77px] text-primary font-normal"
            />
            {summary && <p className="font-archivo text-[17px] leading-[26px] text-[#666666]">{summary}</p>}
          </div>

          <div className="flex flex-col lg:flex-row gap-[50px] items-start w-full">
            {items.length > 0 ? (
              <div className="flex flex-col gap-[40px] w-full lg:flex-[800_1_0%] lg:min-w-0 lg:max-w-[800px]">
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    <Disclosure
                      defaultOpen={index === 0}
                      group="why-choose-accordion"
                      summaryClassName="flex items-start gap-[24px]"
                      summary={
                        <>
                          <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center bg-[#EDF3FF] rounded-none">
                            <span className="font-archivo text-[17px] text-[#333333] font-normal">{index + 1}</span>
                          </div>
                          <div className="flex-1 flex items-center justify-between min-h-[48px]">
                            <h3 className="font-archivo text-[20px] lg:text-[24px] text-[#333333] group-data-[open=true]:font-semibold transition-all">{item.title}</h3>
                            <span className="font-archivo text-[24px] text-[#333333] group-data-[open=true]:hidden">+</span>
                            <span className="font-archivo text-[24px] text-[#333333] hidden group-data-[open=true]:block">-</span>
                          </div>
                        </>
                      }
                    >
                      <div className="pl-[72px] pt-[16px]">
                        <div className="font-archivo text-[17px] leading-[26px] text-[#666666] [&_p]:m-0 [&_ul]:list-disc [&_ul]:pl-[1.25em]" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </Disclosure>
                    {index < items.length - 1 && <hr className="border-[#E8E8E8]" />}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              // No headings in the text: show it as plain formatted content.
              html && <div className="blog-article w-full lg:flex-[800_1_0%] lg:min-w-0 font-archivo" dangerouslySetInnerHTML={{ __html: html }} />
            )}

            <div className="w-full lg:flex-[750_1_0%] lg:min-w-0 lg:max-w-[750px]">
              <Image
                src={image ?? FALLBACK_IMAGE}
                width={750}
                height={550}
                unoptimized={Boolean(image)}
                alt={heading.replace(/\*/g, "")}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
