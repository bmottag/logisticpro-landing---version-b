import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1117px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 [font-family:'Encode_Sans',Helvetica] font-normal text-center">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[76px] xl:text-[80px] leading-[40px] sm:leading-[56px] md:leading-[68px] lg:leading-[80px] xl:leading-[80px] tracking-[0] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <span className="font-semibold text-[#00da5b] leading-[0.1px]">
            Pourquoi choisir <br />
          </span>
          <span className="font-semibold text-[#002319] leading-[0.1px]">
            notre service?
          </span>
        </h2>

        <div className="[font-family:'Inter',Helvetica] text-[#002319] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[28px] sm:leading-[32px] md:leading-[30px] lg:leading-[40px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-4xl mx-auto">
          <p>
            Nous proposons des solutions de livraison complètes en mettant l'accent sur la rapidité, 
            la sécurité et la satisfaction du client.
          </p>
        </div>
      </div>
    </section>
  );
};
