import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[719px] [font-family:'Encode_Sans',Helvetica] font-normal text-transparent text-[48px] sm:text-[52px] md:text-[68px] lg:text-[78px] xl:text-[80px] text-right tracking-[0] leading-[80px] lg:leading-[150px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">   
      <h2 className="font-semibold text-[#00da5b] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-8">
        À propos de nous
      </h2>

      <p className="[font-family:'Inter',Helvetica] text-white text-xl leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-4">
        Chez LogistiquePro, déménager ne signifie pas seulement déplacer des objets. C’est transporter des rêves, des souvenirs et de nouveaux départs.
      </p>

      <p className="[font-family:'Inter',Helvetica] text-white text-xl leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-4">
        Fondée au cœur du Québec, notre équipe est fièrement multiculturelle et profondément humaine. Nous allions efficacité, précision et chaleur humaine pour offrir une expérience vraiment différente.
      </p>


      <p className="[font-family:'Inter',Helvetica] text-white text-xl leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] text-right mb-4">
        Chaque déménagement est une histoire. La vôtre mérite attention, respect et soutien à chaque étape. Avec nous, vous n’êtes jamais seul.
      </p>
    </div>
  );
};
