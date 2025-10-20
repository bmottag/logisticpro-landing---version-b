import React from "react";

export const TipsForMovingSection = (): JSX.Element => {
  return (
    <div className="w-full text-center md:text-left">
      <h1
        className="
          max-w-[892px]
          [font-family:'Encode_Sans',Helvetica]
          font-normal
          text-[40px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[80px]
          leading-[40px] sm:leading-[46px] md:leading-[60px] lg:leading-[72px] xl:leading-[84px]
          animate-fade-in opacity-0 [--animation-delay:200ms]
          translate-y-[-6px]
        "
      >
        <span className="font-extrabold text-[#00da5b] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] block">
          Conseils essentiels
        </span>
        <span className="font-extrabold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] block">
          pour réussir votre
        </span>
        <span className="font-extrabold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] block">
          déménagement
        </span>
      </h1>
    </div>
  );
};
