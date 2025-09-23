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
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={step.number} className="w-full flex-shrink-0 px-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                        <span className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[24px] leading-none">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg leading-[22px]">
                        {step.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base leading-[20px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#00da5b]' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-white/70 text-sm">
              {currentSlide + 1} de {steps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
