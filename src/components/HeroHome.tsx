import React from "react";
import { ArrowDown } from "lucide-react";

// Placeholder data for the brand stack right side
const brands = [
  { name: "Itaú", src: "/icons/itau.png" },
  { name: "PicPay", src: "/icons/picpay.png" },
  { name: "Credito", src: "/icons/bpc.png" }, // Assuming bpc.png corresponds to the 3rd logo
  { name: "Songkick", src: "/icons/songkick.png" },
  { name: "Yieldmaker", src: "/icons/ym.png" },
];

export function HeroHome() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
      
      {/* Grid Container */}
      <div className="w-full max-w-[1356px] mx-auto px-6 md:px-24 lg:px-48 grid grid-cols-4 lg:grid-cols-12 gap-x-6 h-full items-center relative">
        
        {/* Left Content: Typography - Spans 10 columns on desktop */}
        <div className="col-span-4 lg:col-span-12 flex flex-col justify-center z-10 selection:bg-[#281EDF] selection:text-white">
            <h1 className="font-apple-gothic font-normal text-[48px] md:text-[80px] lg:text-[180px] leading-[1] text-[#212121] tracking-tighter">
                Maione. <br />
                Head of Design
            </h1>
            <p className="font-serif text-[20px] lg:text-[32px] text-[#212121] leading-tight mt-12">
                helping companies transform customer <br className="hidden lg:block"/>
                satisfaction into revenue
            </p>
        </div>

        {/* Right Content: Brand Stack - Absolute Right Position */}
        <div className="hidden lg:flex absolute right-48 top-1/2 transform -translate-y-1/2 flex-col gap-6 items-end z-20">
             {brands.map((brand, i) => (
                 <div key={i} className="w-[64px] h-[64px] bg-white rounded-[20px] flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 cursor-default border-none outline-none ring-0 overflow-hidden">
                    <img src={brand.src} alt={brand.name} className="w-full h-full object-contain opacity-100" />
                 </div>
             ))}
        </div>
      </div>

      {/* Bottom: Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
            <ArrowDown className="w-5 h-5 text-[#212121]" />
        </div>
      </div>

    </section>
  );
}
