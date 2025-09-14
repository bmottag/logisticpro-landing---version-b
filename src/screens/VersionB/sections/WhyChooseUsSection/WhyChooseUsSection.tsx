import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1117px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 [font-family:'Encode_Sans',Helvetica] font-normal text-center">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[36px] sm:leading-[52px] md:leading-[64px] lg:leading-[74px] xl:leading-[80px] tracking-[0] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <span className="font-semibold text-[#00da5b] leading-[0.1px]">
            Why choose <br />
          </span>
          <span className="font-semibold text-[#002319] leading-[0.1px]">
            our delivery service?
          </span>
        </h2>

        <div className="[font-family:'Inter',Helvetica] text-[#002319] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[67px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-4xl mx-auto">
          <p>
            We provide comprehensive delivery solutions with a focus on speed,
            security, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};
