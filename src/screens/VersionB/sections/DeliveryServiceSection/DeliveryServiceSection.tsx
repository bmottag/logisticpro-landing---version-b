import React from "react";

export const DeliveryServiceSection = (): JSX.Element => {
  return (
    <div className="relative w-full">
      <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <img
          className="absolute w-[70px] h-[54px] -top-2.5 -left-20"
          alt="Quote mark"
          src="https://c.animaapp.com/mfif8x3oj7OD46/img/---.svg"
        />

        <blockquote className="pl-4 pr-8 [font-family:'Inter',Helvetica] font-medium text-[40px] lg:text-[49.1px] tracking-[0] leading-[44px] lg:leading-[54.5px] translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:400ms]">
          <span className="text-white">I can only say that it </span>
          <span className="text-[#00da5b]">
            was the best moving experience I have ever had.
          </span>
          
          {/* Quote end positioned at the end of the text with padding */}
          <img
            className="inline-block w-[70px] h-[53px] ml-8 align-middle"
            alt="Quote end"
            src="https://c.animaapp.com/mfif8x3oj7OD46/img/----1.svg"
          />
        </blockquote>
      </div>
    </div>
  );
};
