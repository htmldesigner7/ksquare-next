import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import { formatBlogDate, getBlog, withHeadingIds } from "@/lib/blog";
import TocSidebar from "./TocSidebar";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getBlog((await params).slug);
  if (!post) return { title: "Blog | Ksquare Energy" };
  return {
    title: `${post.meta_title || post.title} | Ksquare Energy`,
    description: post.meta_description || post.short_description,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getBlog((await params).slug);
  if (!post) notFound();

  const { html, toc } = withHeadingIds(post.description);
  const contents = post.conclusion ? [...toc, { id: "conclusion", label: "Conclusion" }] : toc;
  const authorPhoto = post.author_image ?? post.author_thumbnail;

  return (
    <main className="w-full bg-white font-archivo">
      {/* Breadcrumb */}
      <Container maxWidth="1800" className="pt-[110px] lg:pt-[130px] flex items-center flex-wrap gap-[10px]">
        <Link href="/" className="font-archivo text-[15px] sm:text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
          Home
        </Link>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <Link href="/blog" className="font-archivo text-[15px] sm:text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
          Blog
        </Link>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none"><path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="font-archivo text-[15px] sm:text-[16px] lg:text-[20px] text-primary leading-[26px] truncate max-w-[400px]">
          {post.title}
        </span>
      </Container>

      <SectionSpacer size={60} />

      {/* Hero */}
      <Container maxWidth="1800">
        <div className="flex flex-col xl:flex-row items-stretch gap-[24px] xl:gap-[40px]">
          <div className="relative w-full xl:w-[900px] aspect-[900/615] rounded-[16px] overflow-hidden shrink-0 xl:shrink desk:shrink-0 bg-[#EFF0F6]">
            {/* Blog images are served by the API (another origin), so they are not optimised by next/image. */}
            <Image src={post.detail_image} alt={post.title} fill unoptimized className="object-cover" priority />
          </div>
          <div className="flex flex-col gap-[20px] lg:gap-[30px] w-full justify-center">
            <h1 className="font-archivo text-[30px] sm:text-[36px] lg:text-[48px] leading-[1.2] lg:leading-[58px] font-medium text-primary">
              {post.title}
            </h1>
            <p className="font-archivo text-[17px] leading-[26px] text-[#666666] lg:text-justify">{post.short_description}</p>
            <div className="flex flex-wrap items-center gap-[12px] font-archivo text-[17px] text-[#333333]">
              {post.author_name && <span>{post.author_name}</span>}
              {post.author_name && <span className="w-px h-[16px] bg-[#333333]" />}
              <span>{formatBlogDate(post.date)}</span>
            </div>
          </div>
        </div>
      </Container>

      <SectionSpacer size={100} />

      {/* Content + Sidebar */}
      <Container maxWidth="1800">
        <div className="flex flex-col-reverse xl:flex-row items-stretch gap-[40px] xl:gap-[48px]">
          {/* Sidebar TOC */}
          {contents.length > 0 && (
            <aside className="hidden xl:block w-[360px] shrink-0 bg-[#EFF0F6]">
              <div className="flex flex-col gap-[32px] p-[24px] sticky top-[110px]">
                <span className="font-archivo text-[24px] text-[#333333]">CONTENTS</span>
                <TocSidebar items={contents} />
              </div>
            </aside>
          )}

          {/* Article Body */}
          <div className="flex flex-col gap-[24px] w-full min-w-0">
            {/* The HTML was written in the admin panel and is cleaned again by the API before it is stored. */}
            <div className="blog-article" dangerouslySetInnerHTML={{ __html: html }} />

            {post.conclusion && (
              <section id="conclusion" className="flex flex-col gap-[24px] scroll-mt-[110px]">
                <h2 className="font-archivo text-[28px] lg:text-[40px] leading-[1.25] lg:leading-[50px] text-[#333333]">Conclusion</h2>
                <div className="blog-article" dangerouslySetInnerHTML={{ __html: post.conclusion }} />
              </section>
            )}

            {/* Author bio */}
            {post.author_name && (
              <div className="flex flex-col sm:flex-row items-center gap-[24px] p-[24px] border border-primary">
                {authorPhoto && (
                  <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden border-[3px] border-primary shrink-0">
                    <Image src={authorPhoto} alt={post.author_name} fill unoptimized className="object-cover object-top" />
                  </div>
                )}
                <div className="flex flex-col gap-[8px] text-center sm:text-left w-full">
                  <div className="flex items-center justify-center sm:justify-start gap-[11px]">
                    <h3 className="font-archivo text-[24px] leading-[1.4] text-primary">{post.author_name}</h3>
                    {post.author_social_url && (
                      <a href={post.author_social_url} target="_blank" rel="noopener noreferrer" aria-label={`${post.author_name} on ${post.author_social_name ?? "social media"}`}>
                        <Image src="/assets/blog-detail/author-icon-linkedin.svg" alt="" width={16} height={16} />
                      </a>
                    )}
                  </div>
                  {(post.author_designation || post.author_years_of_exp !== null) && (
                    <p className="font-archivo text-[17px] leading-[26px] text-[#333333]">
                      {[post.author_designation, post.author_years_of_exp !== null ? `${post.author_years_of_exp} years of experience` : null].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  {post.author_description && <div className="blog-article" dangerouslySetInnerHTML={{ __html: post.author_description }} />}
                </div>
              </div>
            )}

            {/* Get bulk pricing CTA: Figma #106:6167, 1394 x 348.5, every measurement scales with the column width (cqw) */}
            <div className="relative w-full overflow-hidden bg-[#2B398B] [container-type:inline-size] xl:mt-[7px] xl:aspect-[1394/348.5]">
              <div className="absolute inset-0 -scale-x-100 opacity-60 pointer-events-none" aria-hidden="true">
                <Image src="/assets/common/cta_bg_pattern.png" alt="" fill quality={100} sizes="1394px" className="object-cover" />
              </div>
              <div className="hidden lg:block absolute right-0 top-[6.44%] w-[36.17%] aspect-[504.2/312.33] pointer-events-none">
                <Image src="/assets/common/cta_illustration_figma.svg" alt="" fill className="object-contain" aria-hidden="true" />
              </div>
              <div className="relative z-10 flex flex-col gap-[32px] p-[24px] lg:p-[40px] xl:absolute xl:p-0 xl:left-[3.312%] xl:top-[21.98%] xl:w-[83.33%] xl:gap-[3.333cqw]">
                <div className="flex flex-col gap-[8px] xl:gap-[0.4167cqw] xl:w-[56.24cqw]">
                  <h2 className="m-0 font-archivo font-normal text-white text-[28px] leading-[1.2] xl:text-[max(26px,2.8694cqw)] xl:leading-[max(32px,3.5417cqw)] xl:whitespace-nowrap">
                    Get bulk pricing on <span className="font-recia italic font-medium">Solar BOS Components</span>
                  </h2>
                  <p className="m-0 font-archivo text-[16px] leading-[24px] text-white xl:text-[max(14px,1.2195cqw)] xl:leading-[max(20px,1.3544cqw)]">
                    Whether you need certified solar components, OEM manufacturing, or complete rooftop solar solutions, our team is ready to help.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-[16px] xl:gap-[1.25cqw]">
                  <Button variant="outline" href="/contact" showDot className="xl:!gap-[0.8333cqw] xl:!px-[1.25cqw] xl:!py-[0.8333cqw]">
                    Request a Quote
                  </Button>
                  <Button variant="outline" href="/contact" showDot className="xl:!gap-[0.8333cqw] xl:!px-[1.25cqw] xl:!py-[0.8333cqw]">
                    Talk to Our Experts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <SectionSpacer size={100} />
    </main>
  );
}
