import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionSpacer from "@/components/common/SectionSpacer";

export const metadata: Metadata = {
  title: "Blog | Ksquare Energy",
  description:
    "Solar insights, industry trends and technical knowledge from Ksquare Energy — installation guides, product updates and news from India's solar manufacturing sector.",
};

const posts = [
  {
    slug: "surge-protection-utility-scale-solar",
    title: "The Ultimate Guide to Surge Protection for Utility-Scale Solar Systems",
    excerpt:
      "As PV installations scale to utility capacities, the risk of lightning-induced surges and switching transients increases exponentially. Learn the protocols required to safeguard high-voltage DC arrays.",
    image: "/assets/blog/post_2.png",
    date: "Sep 15, 2026",
  },
  {
    slug: "industrial-solar-panels-benefits-savings",
    title: "Industrial Solar Panels for Businesses: Benefits & Savings",
    excerpt:
      "See how industrial-scale rooftop and ground-mount solar installations cut operating costs and support sustainability goals for large manufacturing units.",
    image: "/assets/blog/post_1.png",
    date: "Sep 10, 2026",
  },
  {
    slug: "dcdb-vs-acdb-difference",
    title: "DCDB vs ACDB: Understanding the Difference in Solar Installations",
    excerpt:
      "DC and AC distribution boxes protect different parts of a solar system. Here's how they differ, and why choosing the right one matters for system safety.",
    image: "/assets/blog/post_3.png",
    date: "Sep 05, 2026",
  },
  {
    slug: "signs-distribution-box-needs-upgrade",
    title: "5 Signs Your Solar Distribution Box Needs an Upgrade",
    excerpt:
      "From worn terminals to outdated protection ratings, these warning signs indicate it's time to replace your DCDB or ACDB before it affects system performance.",
    image: "/assets/blog/post_4.png",
    date: "Aug 28, 2026",
  },
  {
    slug: "how-net-metering-works-rooftop-solar-india",
    title: "How Net Metering Works for Rooftop Solar in India",
    excerpt:
      "Net metering lets you export surplus solar power back to the grid and offset your bill. Here's how the process works and what to expect from your DISCOM.",
    image: "/assets/blog/post_5.png",
    date: "Aug 20, 2026",
  },
  {
    slug: "choosing-cable-glands-mc4-connectors",
    title: "Choosing the Right Cable Glands and MC4 Connectors for Your Solar Array",
    excerpt:
      "Loose connections and poor sealing are common causes of field failures. Here's what to look for when specifying cable glands and MC4 connectors.",
    image: "/assets/blog/post_6.png",
    date: "Aug 12, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="w-full bg-white font-archivo">
      {/* 1. Hero Section & Breadcrumbs */}
      <section className="w-full pt-[90px] lg:pt-[130px] flex flex-col items-center">
        <Container maxWidth="1800">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-[40px] w-full">
            {/* Left: Breadcrumbs & Title */}
            <div className="flex flex-col gap-[12px] w-full lg:max-w-[792px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-[10px] flex-wrap">
                <Link href="/" className="font-archivo text-[16px] lg:text-[20px] text-[#333333] hover:text-primary leading-[28px] transition-colors">
                  Home
                </Link>
                <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L4 5L1 9" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-archivo text-[16px] lg:text-[20px] text-primary leading-[26px]">
                  Blogs
                </span>
              </div>

              {/* Title */}
              <h1 className="font-jost text-[42px] lg:text-[68px] leading-[1.1] lg:leading-[78px] text-[#333333] font-normal">
                Solar Insights, Industry Trends<br />
                <span className="font-recia italic font-semibold text-primary">&amp; Technical Knowledge.</span>
              </h1>
            </div>

            {/* Right: Text & Buttons */}
            <div className="flex flex-col gap-[32px] w-full lg:max-w-[816px] pt-[10px]">
              <p className="font-archivo text-[18px] lg:text-[24px] leading-[1.5] text-[#333333]">
                Explore expert articles, installation guides, product updates, industry news and technical resources from Ksquare Energy.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-[16px]">
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
          <div className="relative w-full">
            <div className="w-full relative aspect-[1800/661] rounded-[24px] overflow-hidden">
              <Image
                src="/assets/blog/hero_bg_2.png"
                alt="Ksquare Energy solar manufacturing"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden xl:block absolute -bottom-[40px] left-[40px] w-[300px] aspect-[738/205] rounded-[16px] overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/assets/blog/hero_bg_1.png"
                alt="Ksquare Energy team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />

      {/* 2. Blog Grid */}
      <section id="articles" className="w-full scroll-mt-[110px]">
        <Container maxWidth="1600">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col bg-[#EFF0F6] border border-[#E2E8F0] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.02)]">
                <div className="relative w-full aspect-[580/396]">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-[12px] px-[12px] pb-[24px] pt-[16px]">
                  <h2 className="font-archivo text-[22px] lg:text-[24px] leading-[1.2] font-medium text-[#333333]">
                    {post.title}
                  </h2>
                  <p className="font-archivo text-[17px] leading-[26px] text-[#666666] line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between w-full gap-[16px] flex-wrap pt-[4px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden shrink-0">
                        <Image src="/assets/blog/author_avatar.png" alt="Kuldip Sorathiya" fill className="object-cover" />
                      </div>
                      <span className="font-archivo text-[17px] text-[#333333]">Kuldip Sorathiya</span>
                      <span className="w-px h-[16px] bg-[#333333]" />
                      <span className="font-archivo text-[17px] text-[#333333]">{post.date}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-[16px] group shrink-0">
                      <span className="font-archivo text-[17px] leading-[26px] text-primary">Read More</span>
                      <span className="w-[8px] h-[8px] rounded-full bg-primary shrink-0 transition-transform group-hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-row flex items-center justify-center gap-[8px] mt-[60px]">
            <button
              type="button"
              aria-label="Previous page"
              className="flex items-center justify-center p-[12px] border border-[#DDDDDD] rounded-[8px] opacity-40 cursor-not-allowed"
              disabled
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="flex items-center justify-center px-[18px] py-[12px] rounded-[8px] bg-primary">
              <span className="font-archivo text-[17px] text-white">1</span>
            </button>
            <button type="button" className="flex items-center justify-center px-[18px] py-[12px] border border-[#DDDDDD] rounded-[8px]">
              <span className="font-archivo text-[17px] text-[#333333]">2</span>
            </button>
            <button type="button" className="flex items-center justify-center px-[18px] py-[12px] border border-[#DDDDDD] rounded-[8px]">
              <span className="font-archivo text-[17px] text-[#333333]">3</span>
            </button>
            <div className="flex items-center justify-center px-[18px] py-[12px] rounded-[8px]">
              <span className="font-archivo text-[17px] text-[#333333]">...</span>
            </div>
            <button type="button" className="flex items-center justify-center px-[18px] py-[12px] border border-[#DDDDDD] rounded-[8px]">
              <span className="font-archivo text-[17px] text-[#333333]">8</span>
            </button>
            <button
              type="button"
              aria-label="Next page"
              className="flex items-center justify-center p-[12px] border border-[#DDDDDD] rounded-[8px] hover:border-primary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      <SectionSpacer size={150} />
    </main>
  );
}
