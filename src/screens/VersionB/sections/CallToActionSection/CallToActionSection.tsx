import React, { useState } from "react";

export const CallToActionSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Planifiez tôt, réservez à temps",
      description:
        "Dès que vous connaissez votre date, contactez-nous! Réserver quelques semaines à l'avance vous garantit disponibilité, flexibilité et moins de stress.",
    },
    {
      number: "2",
      title: "Faites le tri avant d'emballer",
      description:
        "Déménager, c'est aussi l'occasion de se débarrasser du superflu. Donnez, vendez ou recyclez ce que vous n'utilisez plus - vous gagnerez du temps et de l'espace.",
    },
    {
      number: "3",
      title: "Étiquetez tout clairement",
      description:
        "Indiquez le contenu et la pièce de destination sur chaque boîte. Cela rend le déchargement plus rapide, plus organisé... et votre installation beaucoup plus simple.",
    },
    {
      number: "4",
      title: "Gardez vos essentiels à portée de main",
      description:
        'Préparez une boîte ou un sac avec vos objets essentiels pour les premières 24h (documents, chargeurs, produits d\'hygiène, vêtements, etc.). On appelle ça la "boîte de survie".',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      {/* Desktop View - Show all steps */}
      <div className="hidden md:block">
        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-4 lg:gap-6 translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${600 + index * 200}ms` } as React.CSSProperties}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-[28px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[32px] lg:text-[40px] leading-none">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl lg:text-3xl leading-[28px] lg:leading-[30px]">
                  {step.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg lg:text-xl leading-[24px] lg:leading-[26.2px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* Mobile Carousel View */}
<div className="md:hidden">
  <div className="relative pt-10 pb-24 flex flex-col items-center">
    {/* Carousel Container */}
    <div className="overflow-hidden w-full">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {steps.map((step) => (
          <div
            key={step.number}
            className="w-full flex-shrink-0 flex justify-end px-2"
          >
            {/* Contenedor principal alineado desde la mitad */}
            <div className="max-w-[50%] text-left ml-auto">
              {/* Número arriba */}
              <div className="w-14 h-14 bg-white rounded-full shadow-[0px_4px_4px_#00000040] flex items-center justify-center mb-5">
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[36px] leading-none">
                  {step.number}
                </span>
              </div>

              {/* Texto debajo del número */}
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[28px] leading-[30px] mb-3">
                {step.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[16px] leading-[22px] opacity-90">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Flechas + Dots debajo del carrusel */}
    <div className="mt-16 flex items-center justify-center gap-24 w-full px-6">
      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#00da5b] scale-110"
                : "bg-white/60 scale-100"
            }`}
          />
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

    </div>
  );
};
