import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[419px] [font-family:'Encode_Sans',Helvetica] font-normal text-transparent text-[80px] text-right tracking-[0] leading-[80px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <h2 className="font-medium text-[#00da5b] leading-[0.1px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-8">
        About us
      </h2>

      <div className="[font-family:'Inter',Helvetica] font-bold text-white text-[25px] leading-[35px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] text-right mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </div>

      <p className="[font-family:'Inter',Helvetica] text-white text-xl leading-[49px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] text-right mb-4">
        incididunt ut labore et dolore magna aliqua.{" "}
      </p>

      <p className="[font-family:'Inter',Helvetica] text-white text-xl leading-[25px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};
