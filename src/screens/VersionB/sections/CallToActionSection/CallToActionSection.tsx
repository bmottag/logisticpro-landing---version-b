import React from "react";

export const CallToActionSection = (): JSX.Element => {
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
        "Indiquez le contenu et la pièce de destination sur chaque boîte.\nCela rend le déchargement plus rapide, plus organisé... et\nvotre installation beaucoup plus simple.",
    },
    {
      number: "4",
      title: "Gardez vos essentiels à portée de main",
      description:
        'Préparez une boîte ou un sac avec vos objets essentiels pour les premières 24h (documents, chargeurs, produits d\'hygiène,\nvêtements, etc.). On appelle ça la "boîte de survie".',
    },
  ];

  return (
    <div className="w-full">
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": `${600 + index * 200}ms` } as React.CSSProperties}
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-white rounded-[28px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[40px] leading-none">
                  {step.number}
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl leading-[30px]">
                {step.title}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl leading-[26.2px] whitespace-pre-line">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
