import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[719px] [font-family:'Encode_Sans',Helvetica] font-normal text-transparent text-[32px] sm:text-[40px] md:text-[52px] lg:text-[68px] xl:text-[80px] text-right tracking-[0] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[72px] xl:leading-[80px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <h2 className="font-semibold text-[#00da5b] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-6 sm:mb-8 text-[36px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[70px]">
        À propos de nous
      </h2>

      <p className="[font-family:'Inter',Helvetica] font-bold text-white text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-5 sm:mb-6">
        Chez LogistiquePro, déménager ne <br />
        signifie pas seulement déplacer des <br />
        objets. C'est transporter des rêves, des <br />
        souvenirs et de nouveaux départs.
      </p>

      <p className="[font-family:'Inter Regular',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1100ms] text-right mb-5 sm:mb-6">
        Fondée au cœur du Québec, notre équipe est <br />
        fièrement multiculturelle et profondément humaine. <br />
        Nous allions efficacité, précision et chaleur humaine <br />
        pour offrir une expérience vraiment différente.
      </p>

      <p className="[font-family:'Inter Regular',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] text-right">
        Chaque déménagement est une histoire. La vôtre <br />
        mérite attention, respect et soutien à chaque étape. <br />
        Avec nous, vous n'êtes jamais seul.
      </p>
    </div>
  );
};
