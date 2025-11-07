import React from "react";

export const HeroSection = (): JSX.Element => {
  const textLines = [
    {
      segments: [{ text: "Déménagements", color: "text-white", delay: "0ms" }],
    },
    {
      segments: [
        { text: "faits avec ", color: "text-white", delay: "200ms" },
        { text: "cœur, ", color: "text-[#00da5b]", delay: "400ms" },
      ],
    },
    {
      segments: [
        { text: "âme et précision.", color: "text-[#00da5b]", delay: "600ms" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[479px] lg:max-w-[700px] xl:max-w-[900px] [font-family:'Encode_Sans',Helvetica] font-normal text-[36px] sm:text-[52px] md:text-[68px] lg:text-[84px] xl:text-[90px] tracking-[0] leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[88px] xl:leading-[90px]">
      <h1 className="font-medium">
        {textLines.map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.segments.map((segment, segmentIndex) => (
              <span
                key={`${lineIndex}-${segmentIndex}`}
                className={`
                  ${segment.color} 
                  translate-y-[-1rem] 
                  animate-fade-in 
                  opacity-0 
                  block text-center md:inline md:text-left
                `}
                style={{ "--animation-delay": segment.delay } as React.CSSProperties}
              >
                {segment.text}
              </span>
            ))}
          </div>
        ))}
      </h1>
    </div>
  );
};
