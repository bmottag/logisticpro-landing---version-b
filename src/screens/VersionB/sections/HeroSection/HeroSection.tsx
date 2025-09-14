import React from "react";

export const HeroSection = (): JSX.Element => {
  const textSegments = [
    { text: "Moving with ", color: "text-white", delay: "0ms" },
    { text: "heart,", color: "text-[#00da5b]", delay: "200ms" },
    { text: " ", color: "text-white", delay: "400ms" },
    { text: "soul", color: "text-[#00da5b]", delay: "600ms" },
    { text: " ", color: "text-white", delay: "800ms" },
    { text: "and precision.", color: "text-[#00da5b]", delay: "1000ms" },
  ];

  return (
    <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[479px] [font-family:'Encode_Sans',Helvetica] font-normal text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[90px] tracking-[0] leading-[36px] sm:leading-[52px] md:leading-[68px] lg:leading-[84px] xl:leading-[90px]">
      <h1 className="font-medium">
        {textSegments.map((segment, index) => (
          <span
            key={index}
            className={`${segment.color} translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              { "--animation-delay": segment.delay } as React.CSSProperties
            }
          >
            {segment.text}
          </span>
        ))}
      </h1>
    </div>
  );
};
