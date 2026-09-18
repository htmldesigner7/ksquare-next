import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import CoreProducts from "@/components/home/CoreProducts";
import Manufacturing from "@/components/home/Manufacturing";
import Industries from "@/components/home/Industries";
import Solutions from "@/components/home/Solutions";
import PartnerCTA from "@/components/home/PartnerCTA";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Ksquare Energy",
  description: "Explore Ksquare Energy's leading solar solutions, from residential rooftops to industrial plants.",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#FFFFFF]">
      <Hero />
      <div className="flex flex-col gap-[100px] pt-[100px] pb-[106px]">
        <About />
        <CoreProducts />
        <Manufacturing />
        <Industries />
        <Solutions />
        <div className="flex flex-col gap-[99px]">
          <PartnerCTA />
          <Testimonials />
        </div>
        <Insights />
      </div>
    </main>
  );
}
