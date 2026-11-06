import React from "react";
import Image from "next/image";
import RichTitle from "@/components/common/RichTitle";
import Link from "next/link";

const products = [
  {
    title: "Solar DCDB",
    desc: "DC distribution boxes for string-level protection and isolation.",
    img: "/assets/img_1_400.png",
    left: 0, top: 0,
    w: 192.17, h: 288.69
  },
  {
    title: "Solar ACDB",
    desc: "AC distribution with NVR protection, RYB indication available.",
    img: "/assets/img_1_411.png",
    left: 407, top: 0,
    w: 280.1, h: 256.73
  },
  {
    title: "Combiner Boxes",
    desc: "Multi-string combiners for utility and commercial-scale arrays.",
    img: "/assets/img_1_422.png",
    left: 813, top: 0,
    w: 257.76, h: 357.4
  },
  {
    title: "Junction Boxes",
    desc: "Array junction boxes with monitoring-ready terminal layouts.",
    img: "/assets/img_1_433.png",
    left: 1220, top: 0,
    w: 262.7, h: 221.67
  },
  {
    title: "Solar Cables",
    desc: "Single-core DC cables engineered for outdoor UV exposure.",
    img: "/assets/img_1_445.png",
    left: 0, top: 628,
    w: 273.49, h: 233.5
  },
  {
    title: "Kenclozer Enclosures",
    desc: "Polycarbonate enclosures for indoor and outdoor installation.",
    img: "/assets/img_1_456.png",
    left: 407, top: 628,
    w: 249.42, h: 248.94
  },
  {
    title: "MC4 Connectors",
    desc: "Locking connectors rated for continuous outdoor duty.",
    img: "/assets/img_1_467.png",
    left: 813, top: 628,
    w: 260.68, h: 184.92
  },
  {
    title: "Earthing Kits",
    desc: "Complete grounding kits for module frames and mounting structures.",
    img: "/assets/img_1_478.png",
    left: 1220, top: 628,
    w: 280.98, h: 266.45
  }
];

export default function CoreProducts() {
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      {/* Desktop Wrapper */}
      <div className="canvas-zoom w-[1920px] max-w-full mx-auto relative h-[1369px] max-canvas:h-auto max-canvas:px-6 max-canvas:py-12 max-sm:py-8">
        
        {/* Header (Frame 26) */}
        <div className="hidden canvas:block absolute left-[160px] top-0 w-[1600px] h-[105px]">
          <RichTitle as="h2" text="Core *Products*" className="absolute left-0 top-[7px] font-archivo font-normal text-[60px] text-[#333333] leading-none m-0 p-0" />
          <p className="absolute left-0 top-[79px] w-[1600px] h-[26px] font-archivo font-normal text-[17px] text-[#666666] leading-relaxed m-0 p-0">
            From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.
          </p>
        </div>
        
        {/* Products Grid Container (Frame 2147224481) */}
        <div className="hidden canvas:block absolute left-[160px] top-[153px] w-[1600px] h-[1216px]">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="absolute w-[380px] h-[588px]"
              style={{ left: `${product.left}px`, top: `${product.top}px` }}
            >
              {/* Image Frame (Frame 89) */}
              <div className="img-hover-zoom absolute left-0 top-0 w-[380px] h-[400px] bg-[#EFF0F6]">
                {/* Figma sizes each product image individually (centered in the 380x400 tile) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: product.w, height: product.h }}>
                  <Image 
                    src={product.img} 
                    alt={product.title} 
                    fill 
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Content Frame (Frame 2085663119) */}
              <div className="absolute left-0 top-[424px] w-[380px] h-[164px]">
                <h3 className="absolute left-0 top-0 font-archivo font-medium text-[24px] text-[#333333] leading-none m-0 p-0">
                  {product.title}
                </h3>
                <p className="absolute left-0 top-[38px] w-[380px] h-[52px] font-archivo font-normal text-[17px] text-[#666666] leading-[1.5] m-0 p-0">
                  {product.desc}
                </p>
                
                {/* View Product Button */}
                <Link 
                  href="/products/dcdb"
                  className="absolute left-0 top-[114px] w-[156px] h-[50px] border border-[#2B398B] group hover:bg-[#2B398B] transition-colors flex items-center"
                >
                  <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover:text-white transition-colors">
                    View Product
                  </span>
                  <span className="absolute left-[132px] w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover:bg-white transition-colors"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="canvas:hidden flex flex-col gap-12 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <RichTitle as="h2" text="Core *Products*" className="font-archivo font-normal text-[48px] sm:text-[60px] text-[#333333] leading-none m-0 p-0" />
            <p className="font-archivo font-normal text-[17px] text-[#666666] leading-relaxed m-0 p-0">
              From solar protection systems to electrical panels and OEM manufacturing, explore our complete range of certified solar components designed for performance, reliability, and long-term durability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {products.map((product, idx) => (
              <div key={idx} className="flex flex-col w-full group">
                <div className="img-hover-zoom w-full aspect-square bg-[#EFF0F6] relative mb-6">
                  <div className="absolute inset-[16px] sm:inset-[30px]">
                    <Image 
                      src={product.img} 
                      alt={product.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="font-archivo font-medium text-[18px] sm:text-[24px] leading-[1.25] text-[#333333] mb-2 sm:mb-3">
                  {product.title}
                </h3>
                <p className="font-archivo font-normal text-[14px] sm:text-[17px] text-[#666666] mb-4 sm:mb-6 flex-grow">
                  {product.desc}
                </p>
                <Link 
                  href="/products/dcdb"
                  className="w-full max-w-[156px] h-[50px] border border-[#2B398B] group-hover:bg-[#2B398B] transition-colors flex items-center relative self-start"
                >
                  <span className="absolute left-[16px] font-archivo font-normal text-[17px] text-[#2B398B] group-hover:text-white transition-colors">
                    View Product
                  </span>
                  <span className="absolute left-[132px] w-[8px] h-[8px] rounded-full bg-[#2B398B] group-hover:bg-white transition-colors"></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
