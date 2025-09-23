import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[719px] [font-family:'Encode_Sans',Helvetica] font-normal text-transparent text-[32px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[80px] text-right tracking-[0] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[72px] xl:leading-[80px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">   
      <h2 className="font-semibold text-[#00da5b] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-6 sm:mb-8 text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px]">
        À propos de nous
      </h2>

      <p className="[font-family:'Inter',Helvetica] text-white text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-3 sm:mb-4">
        Chez LogistiquePro, déménager ne signifie pas seulement déplacer des objets. C'est transporter des rêves, des souvenirs et de nouveaux départs.
      </p>

      <p className="[font-family:'Inter',Helvetica] text-white text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-3 sm:mb-4">
        Fondée au cœur du Québec, notre équipe est fièrement multiculturelle et profondément humaine. Nous allions efficacité, précision et chaleur humaine pour offrir une expérience vraiment différente.
      </p>

      <p className="[font-family:'Inter',Helvetica] text-white text-base sm:text-lg md:text-xl leading-[24px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-3 sm:mb-4">
        Chaque déménagement est une histoire. La vôtre mérite attention, respect et soutien à chaque étape. Avec nous, vous n'êtes jamais seul.
      </p>
    </div>
  );
};
