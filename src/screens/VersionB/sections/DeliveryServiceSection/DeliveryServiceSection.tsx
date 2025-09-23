import React from "react";

export const DeliveryServiceSection = (): JSX.Element => {
  return (
    <div className="relative w-full">
      <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="absolute w-[50px] h-[40px] sm:w-[60px] sm:h-[46px] lg:w-[70px] lg:h-[54px] -top-2 sm:-top-2.5 -left-12 sm:-left-16 lg:-left-20"
          alt="Quote mark"
          src="https://c.animaapp.com/mfif8x3oj7OD46/img/---.svg"
        />

        <blockquote className="pl-4 pr-4 sm:pr-6 lg:pr-8 [font-family:'Inter',Helvetica] font-medium text-[28px] sm:text-[36px] md:text-[40px] lg:text-[49.1px] tracking-[0] leading-[32px] sm:leading-[40px] md:leading-[44px] lg:leading-[54.5px] translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
          <span className="text-white">Je ne peux que dire que c'était </span>
          <span className="text-[#00da5b]">
            la meilleure expérience de déménagement que j'aie jamais eue.
          </span>
          
          {/* Quote end positioned at the end of the text with padding */}
          <img
            className="inline-block w-[50px] h-[40px] sm:w-[60px] sm:h-[46px] lg:w-[70px] lg:h-[53px] ml-4 sm:ml-6 lg:ml-8 align-middle"
            alt="Quote end"
            src="https://c.animaapp.com/mfif8x3oj7OD46/img/----1.svg"
          />
        </blockquote>
      </div>
    </div>
  );
};
