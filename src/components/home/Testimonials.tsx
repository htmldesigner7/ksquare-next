import React from "react";
import Image from "next/image";

const row1 = [
  {
    name: "Hiren Dhameliya",
    company: "Flame Solren Pvt Ltd",
    text: "We are Using Thermoplastic Enclosure of Kenclozer Brand For DCDB-ACDB Manufacturing and we are impressed with their delivery commitment and after sales Service.",
    img: "/assets/img_1_350.png"
  },
  {
    name: "Nirav Dhanani",
    company: "Heaven Solar Pvt Ltd",
    text: "Ksquare Is like one stop solution for us all kind of BOS Like DCDB-ACDB,Earthing Kit,MC-4 Connector,J-Hook & All other accesories irecommeanded Ksquare For Good Quality Products At Good Pricing.",
    img: "/assets/img_1_350.png"
  },
  {
    name: "Vipul Trivedi",
    company: "Lohana Tours & Travels Pvt Ltd",
    text: "I had installed 10 KW Rooftop System at my home and i am geting generation of 6.2 Units/KW and staff of Ksquare is just a call away.",
    img: "/assets/img_1_350.png"
  },
  {
    name: "SARAUIVANDASJI SWAMI",
    company: "Swaminarayan Gurukul Hyderabad",
    text: "We had installed th Project of 80 KW AT Shree Swaminarayan Gurukul Hyderabad & Mumbai We are Very Satisficed With The Service Of Ksquare Energy Pvt Ltd and the product quality also.",
    img: "/assets/img_1_350.png"
  }
];

const row2 = [...row1].reverse(); // Swapped just for variety since the original was mostly repeated

const QuoteIcon = () => (
  <svg width="75" height="57" viewBox="0 0 75 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.9231 0H8.07692C5.93479 0 3.88039 0.850959 2.36568 2.36568C0.850959 3.88039 0 5.93479 0 8.07692V26.9231C0 29.0652 0.850959 31.1196 2.36568 32.6343C3.88039 34.149 5.93479 35 8.07692 35H16.1538C15.9978 39.6514 14.0718 44.0678 10.7692 47.3469C10.0164 48.1 9.50376 49.0593 9.29609 50.1037C9.08842 51.148 9.19505 52.2305 9.60251 53.2143C10.01 54.1981 10.6999 55.0389 11.5852 55.6306C12.4705 56.2223 13.5113 56.5382 14.5762 56.5385C19.9898 56.5285 25.1789 54.3735 29.007 50.5455C32.835 46.7174 34.99 41.5283 35 36.1146V8.07692C35 5.93479 34.149 3.88039 32.6343 2.36568C31.1196 0.850959 29.0652 0 26.9231 0ZM29.6154 36.1146C29.6111 40.102 28.0253 43.9248 25.2058 46.7442C22.3863 49.5637 18.5635 51.1496 14.5762 51.1539C16.7904 48.9523 18.546 46.3334 19.7411 43.4487C20.9362 40.564 21.5471 37.4709 21.5385 34.3485V32.3077C21.5385 31.5937 21.2548 30.9089 20.7499 30.4039C20.245 29.899 19.5602 29.6154 18.8462 29.6154H8.07692C7.36288 29.6154 6.67808 29.3317 6.17318 28.8268C5.66827 28.3219 5.38462 27.6371 5.38462 26.9231V8.07692C5.38462 7.36288 5.66827 6.67808 6.17318 6.17318C6.67808 5.66827 7.36288 5.38462 8.07692 5.38462H26.9231C27.6371 5.38462 28.3219 5.66827 28.8268 6.17318C29.3317 6.67808 29.6154 7.36288 29.6154 8.07692V36.1146Z" fill="#EEEEEE"/>
    <g transform="translate(40, 0)">
      <path d="M26.9231 0H8.07692C5.93479 0 3.88039 0.850959 2.36568 2.36568C0.850959 3.88039 0 5.93479 0 8.07692V26.9231C0 29.0652 0.850959 31.1196 2.36568 32.6343C3.88039 34.149 5.93479 35 8.07692 35H16.1538C15.9978 39.6514 14.0718 44.0678 10.7692 47.3469C10.0164 48.1 9.50376 49.0593 9.29609 50.1037C9.08842 51.148 9.19505 52.2305 9.60251 53.2143C10.01 54.1981 10.6999 55.0389 11.5852 55.6306C12.4705 56.2223 13.5113 56.5382 14.5762 56.5385C19.9898 56.5285 25.1789 54.3735 29.007 50.5455C32.835 46.7174 34.99 41.5283 35 36.1146V8.07692C35 5.93479 34.149 3.88039 32.6343 2.36568C31.1196 0.850959 29.0652 0 26.9231 0ZM29.6154 36.1146C29.6111 40.102 28.0253 43.9248 25.2058 46.7442C22.3863 49.5637 18.5635 51.1496 14.5762 51.1539C16.7904 48.9523 18.546 46.3334 19.7411 43.4487C20.9362 40.564 21.5471 37.4709 21.5385 34.3485V32.3077C21.5385 31.5937 21.2548 30.9089 20.7499 30.4039C20.245 29.899 19.5602 29.6154 18.8462 29.6154H8.07692C7.36288 29.6154 6.67808 29.3317 6.17318 28.8268C5.66827 28.3219 5.38462 27.6371 5.38462 26.9231V8.07692C5.38462 7.36288 5.66827 6.67808 6.17318 6.17318C6.67808 5.66827 7.36288 5.38462 8.07692 5.38462H26.9231C27.6371 5.38462 28.3219 5.66827 28.8268 6.17318C29.3317 6.67808 29.6154 7.36288 29.6154 8.07692V36.1146Z" fill="#EEEEEE"/>
    </g>
  </svg>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestimonialCard = ({ item }: { item: any }) => (
  <div className="w-[320px] sm:w-[450px] xl:w-[740px] xl:h-[300px] bg-white border border-[#E5E5E5] p-[32px] sm:p-[40px] xl:p-0 flex flex-col xl:block relative shrink-0">
    <div className="absolute right-[32px] top-[32px] xl:left-[648px] xl:top-[20px] xl:right-auto text-[#EEEEEE]">
      <QuoteIcon />
    </div>
    
    <div className="flex xl:absolute xl:left-[60px] xl:top-[40px] items-center gap-6 relative z-10">
      <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden bg-gray-200 shrink-0 relative">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-[4px] w-[200px] sm:w-[300px]">
        <span className="font-archivo font-semibold text-[17px] text-[#2B398B] leading-none m-0 p-0">{item.name}</span>
        <span className="font-archivo font-normal text-[15px] text-[#666666] leading-none m-0 p-0">{item.company}</span>
      </div>
    </div>
    
    <p className="mt-8 xl:mt-0 xl:absolute xl:left-[60px] xl:top-[144px] xl:w-[619px] font-archivo font-normal text-[16px] sm:text-[17px] text-[#666666] leading-[1.5] m-0 p-0 relative z-10">
      {item.text}
    </p>
  </div>
);

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#FFFFFF] overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
      
      {/* Desktop Wrapper */}
      <div className="w-[1920px] max-w-full mx-auto relative h-[782px] max-xl:h-auto max-xl:py-16">
        
        {/* Desktop Layout (Testimonials) */}
        <div className="hidden xl:block absolute left-0 top-0 w-[1920px] h-[782px]">
          
          {/* Header (Frame 23) */}
          <div className="absolute left-[160px] top-0 w-[1600px] h-[91px] text-center">
            <h2 className="absolute left-0 top-0 w-[1600px] font-jost font-normal text-[60px] text-[#2B398B] leading-none m-0 p-0 text-center">
              Client Testimonials
            </h2>
            <p className="absolute left-0 top-[65px] w-[1600px] font-archivo font-normal text-[17px] text-[#666666] m-0 p-0 text-center">
              Hear from our satisfied clients and long-term partners across India.
            </p>
          </div>
          
          {/* Row 1 Auto Slider */}
          <div className="absolute left-0 top-[158px] w-[1920px] h-[300px] overflow-hidden">
            <div className="flex gap-[24px] w-max animate-marquee-left hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1].map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 Auto Slider */}
          <div className="absolute left-0 top-[482px] w-[1920px] h-[300px] overflow-hidden">
            <div className="flex gap-[24px] w-max animate-marquee-right hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2].map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Left/Right Fade Gradients (Frame 68) */}
          <div className="absolute left-0 top-[158px] w-[250px] h-[624px] bg-gradient-to-r from-white to-transparent pointer-events-none z-20"></div>
          <div className="absolute left-[1670px] top-[158px] w-[250px] h-[624px] bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
          
        </div>

        {/* Responsive layout (< 1280px) */}
        <div className="xl:hidden flex flex-col gap-12 px-6 overflow-hidden">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-jost font-normal text-[40px] sm:text-[60px] text-[#2B398B] leading-[1.1] m-0 p-0">
              Client Testimonials
            </h2>
            <p className="font-archivo font-normal text-[16px] md:text-[17px] text-[#666666] m-0 p-0">
              Hear from our satisfied clients and long-term partners across India.
            </p>
          </div>
          
          <div className="flex gap-[24px] w-max animate-marquee-left hover:[animation-play-state:paused] pb-4">
            {[...row1, ...row1].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </div>
          
          <div className="flex gap-[24px] w-max animate-marquee-right hover:[animation-play-state:paused]">
            {[...row2, ...row2].map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
