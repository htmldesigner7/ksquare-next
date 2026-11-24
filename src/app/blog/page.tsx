import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";
import { formatBlogDate, getBlogs, pagerItems } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ksquare Energy",
  description:
    "Solar insights, industry trends and technical knowledge from Ksquare Energy — installation guides, product updates and news from India's solar manufacturing sector.",
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const requested = Number((await searchParams).page);
  const { posts, page, totalPages } = await getBlogs(Number.isInteger(requested) && requested > 0 ? requested : 1);
  const pageHref = (n: number) => (n === 1 ? "/blog#articles" : `/blog?page=${n}#articles`);

  return (
    <main className="w-full bg-white font-archivo">
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[110px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[16px] lg:gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] w-full lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px] flex-wrap">
                <Link href="/" className="font-archivo text-[15px] sm:text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  Home
                </Link>
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[15px] sm:text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Blogs
                </span>
              </div>

              {/* Title */}
              <h1 className="font-recia text-[38px] sm:text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-primary font-normal">
                Solar Insights, <br />
                <span className="italic font-semibold">&amp; Technical Knowledge.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[816px] pt-0 lg:pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Explore expert articles, installation guides, product updates, industry news and technical resources from Ksquare Energy.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[16px]">
                <Button variant="outline-primary" href="#articles" showDot>
                  Browse Articles
                </Button>
                <Button variant="outline-primary" href="/products/dcdb" showDot>
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Hero Banner Image */}
        <Container maxWidth="1800" className="mt-[50px] lg:mt-[80px]">
          <div className="w-full relative aspect-[1800/661]">
            <Image
              src="/assets/blog/hero_banner_group.png"
              alt="Ksquare Energy solar manufacturing"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Blog Grid */}
      <section id="articles" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
            {posts.map((post) => (
              <article key={post.url} className="card-lift flex flex-col bg-[#EFF0F6] border border-[#E2E8F0] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.02)]">
                <Link href={`/blog/${post.url}`} className="img-hover-zoom relative block w-full aspect-[580/396]">
                  {/* Blog images are served by the API (another origin), so they are not optimised by next/image. */}
                  <Image src={post.front_image} alt={post.title} fill unoptimized className="object-cover" />
                </Link>
                <div className="flex flex-col gap-[12px] px-[12px] pb-[24px] pt-[16px]">
                  <h2 className="font-archivo text-[22px] lg:text-[24px] leading-[1.2] font-medium text-[#333333]">
                    <Link href={`/blog/${post.url}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666] line-clamp-3">
                    {post.short_description}
                  </p>
                  <div className="flex items-center justify-between w-full gap-[16px] flex-wrap pt-[4px]">
                    <div className="flex items-center gap-[12px]">
                      {(post.author_thumbnail ?? post.author_image) && (
                        <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden shrink-0">
                          <Image src={(post.author_thumbnail ?? post.author_image)!} alt={post.author_name ?? "Author"} fill unoptimized className="object-cover object-top" />
                        </div>
                      )}
                      {post.author_name && <span className="font-archivo text-[17px] text-[#333333]">{post.author_name}</span>}
                      <span className="w-px h-[16px] bg-[#333333]" />
                      <span className="font-archivo text-[17px] text-[#333333]">{formatBlogDate(post.date)}</span>
                    </div>
                    <Button variant="outline-primary" href={`/blog/${post.url}`} showDot className="shrink-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {posts.length === 0 && <p className="text-center font-archivo text-[17px] text-[#666666]">No articles to show right now. Please check back soon.</p>}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Pagination" className="pagination-row flex flex-wrap items-center justify-center gap-[4px] sm:gap-[8px] mt-[60px]">
              {page > 1 && (
                <Link href={pageHref(page - 1)} aria-label="Previous page" className="flex items-center justify-center p-[12px] border border-[#DDDDDD] rounded-[8px] hover:border-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
              {pagerItems(page, totalPages).map((n, i) =>
                n === "…" ? (
                  <span key={`gap-${i}`} aria-hidden className="flex items-center justify-center px-[8px] py-[12px] font-archivo text-[17px] text-[#333333]">
                    …
                  </span>
                ) : (
                <Link
                  key={n}
                  href={pageHref(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={`flex items-center justify-center px-[12px] sm:px-[18px] py-[12px] rounded-[8px] font-archivo text-[17px] ${n === page ? "bg-primary text-white" : "border border-[#DDDDDD] text-[#333333] hover:border-primary transition-colors"}`}
                >
                  {n}
                </Link>
                ),
              )}
              {page < totalPages && (
                <Link href={pageHref(page + 1)} aria-label="Next page" className="flex items-center justify-center p-[12px] border border-[#DDDDDD] rounded-[8px] hover:border-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </nav>
          )}
        </Container>
      </section>

      <SectionSpacer size={150} />
    </main>
  );
}
