import React from "react";

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[699px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://c.animaapp.com/mfif8x3oj7OD46/img/truck-logistics-operation-dusk-1.png)",
          filter: "brightness(1.2) contrast(1.15) saturate(1.1)"
        }}
      />
      
      {/* Gradient Overlay - Darker on the left, transparent on the right */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(0,35,25,0.9)] via-[rgba(0,35,25,0.6)] to-transparent" />

      <div className="relative z-10 flex items-center h-full">
        <div className="px-4 sm:px-8 md:px-12 lg:pl-[91px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h1 className="max-w-[400px] sm:max-w-[450px] md:max-w-[400px] lg:max-w-[527px] [font-family:'Encode_Sans',Helvetica] font-normal text-[48px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[90px] tracking-[0] leading-[50px] sm:leading-[52px] md:leading-[68px] lg:leading-[84px] xl:leading-[90px]">
            <span className="font-bold text-white">
              Chaque  <br />
              départ,{" "}
            </span>
            <span className="font-bold text-[#00da5b]">
              une nouvelle  <br />
              histoire
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
