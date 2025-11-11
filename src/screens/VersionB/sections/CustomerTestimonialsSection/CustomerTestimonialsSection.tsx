import React from "react";

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[699px] overflow-hidden">
      {/* Background Image */}
      <div
        className="
          absolute inset-0 w-full h-full bg-cover bg-no-repeat
          sm:bg-center
        "
        style={{
          // 👇 usamos style para aplicar correctamente la posición móvil
          backgroundImage: "url(./images/truck.png)",
          backgroundPosition: "50% 70%", // mueve hacia abajo y un poco a la izquierda
          filter: "brightness(1.2) contrast(1.15) saturate(1.1)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(0,35,25,0.9)] via-[rgba(0,35,25,0.6)] to-transparent" />

      {/* Text content */}
      <div
        className="
          relative z-10 flex h-full
          items-start md:items-center   /* 👈 En móviles arriba, en desktop centrado */
          pt-6 sm:pt-20 md:pt-0        /* 👈 Empuja hacia abajo solo un poco en móviles */
          px-4 sm:px-8 md:px-12 lg:pl-[91px]
          animate-fade-in opacity-0 [--animation-delay:200ms]
        "
      >
        <h1
          className="
            max-w-[400px] sm:max-w-[450px] md:max-w-[400px] lg:max-w-[527px]
            [font-family:'Encode_Sans',Helvetica] font-normal
            text-[44px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[90px]
            tracking-[0]
            leading-[48px] sm:leading-[52px] md:leading-[68px] lg:leading-[84px] xl:leading-[90px]
          "
        >
          <div className="font-bold text-white">Chaque</div>
          <div className="font-bold text-white">départ,</div>
          <div className="font-bold text-[#00da5b] whitespace-nowrap">
            une nouvelle
          </div>
          <div className="font-bold text-[#00da5b]">histoire</div>
        </h1>
      </div>
    </section>
  );
};
