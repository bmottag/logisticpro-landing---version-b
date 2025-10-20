import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ServiceModal } from "../../components/ServiceModal";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import { DeliveryServiceSection } from "./sections/DeliveryServiceSection/DeliveryServiceSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ServiceFeaturesSection } from "./sections/ServiceFeaturesSection/ServiceFeaturesSection";
import { TipsForMovingSection } from "./sections/TipsForMovingSection/TipsForMovingSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

const navigationItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Conseils", href: "#conseils" },
];

const serviceCards = [
  {
    icon: "./images/residential-move.png",
    title: "Déménagement résidentiel",
    description:
      "Nous facilitons votre transition vers un nouveau chez-vous avec un service attentionné, ponctuel et efficace. Que ce soit un appartement, une maison ou un condo, notre équipe transporte vos biens avec soin et respect.",
  },
  {
    icon: "./images/commercial-move.png",
    title: "Déménagement commercial",
    description:
      "Minimisez l'interruption de vos activités grâce à notre expertise en déménagement d'entreprises. Bureaux, commerces ou ateliers; nous planifions chaque étape pour un transfert rapide et sécurisé.",
  },
  {
    icon: "./images/packing-unpacking.png",
    title: "Emballage et déballage",
    description:
      "Gagnez du temps et protégez vos objets fragiles avec notre service d'emballage professionnel. Nous fournissons les matériaux nécessaires et nous occupons du déballage si vous le souhaitez.",
  },
  {
    icon: "./images/long-distance.png",
    title: "Transport longue distance",
    description:
      "Nous facilitons votre transition vers un nouveau chez-vous avec un service attentionné, ponctuel et efficace. Que ce soit un appartement, une maison ou un condo, notre équipe transporte vos biens avec soin et respect.",
  },
  {
    icon: "./images/temporary-storage.png",
    title: "Entreposage temporaire",
    description:
      "Minimisez l'interruption de vos activités grâce à notre expertise en déménagement d'entreprises. Bureaux, commerces ou ateliers; nous planifions chaque étape pour un transfert rapide et sécurisé.",
  },
  {
    icon: "./images/special-installations.png",
    title: "Installations spéciales",
    description:
      "Confiez-nous le montage et l'installation de vos espaces résidentiels ou professionnels. Notre équipe assure un service précis, soigné et efficace pour chaque projet.",
  },
];

export const VersionB = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<'residential' | 'commercial' | 'installations'>('residential');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      // Get the actual header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleServiceClick = (serviceType: 'residential' | 'commercial' | 'installations') => {
    setSelectedService(serviceType);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#002319] w-full min-h-screen" data-model-id="57:303">
      {/* Navigation Header - Sticky */}
      <header className="sticky top-0 w-full bg-[#002319] z-40">
        <div className="flex items-center px-4 md:px-10 lg:px-16 xl:px-20 py-8 md:py-10 lg:py-12 w-full relative">
          
          {/* Logo para móvil + Hamburger/X */}
          <div className="flex items-center justify-center w-full md:hidden gap-4">
            <img
              className="w-[240px] md:w-[240px] lg:w-[269px] h-auto"
              alt="LogistiquePro Logo"
              src="./images/logo.png"
            />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1 p-2"
            >
              {isMobileMenuOpen ? (
                <>
                  <span className="w-6 h-0.5 bg-white rotate-45 translate-y-1.5"></span>
                  <span className="w-6 h-0.5 bg-white opacity-0"></span>
                  <span className="w-6 h-0.5 bg-white -rotate-45 -translate-y-1.5"></span>
                </>
              ) : (
                <>
                  <span className="w-6 h-0.5 bg-white"></span>
                  <span className="w-6 h-0.5 bg-white"></span>
                  <span className="w-6 h-0.5 bg-white"></span>
                </>
              )}
            </button>
          </div>

          {/* Logo para desktop */}
          <img
            className="hidden md:block w-[240px] lg:w-[269px] h-auto"
            alt="LogistiquePro Logo"
            src="./images/logo.png"
          />

          {/* Desktop navigation menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-16 lg:ml-24">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="[font-family:'Inter',Helvetica] font-normal text-white text-lg lg:text-xl tracking-[0] leading-5 hover:text-[#00da5b] transition-colors whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop "Réserver" button */}
          <div className="hidden md:flex ml-auto">
            <Button
              className="w-[145px] h-[39px] bg-white rounded-[10px] border-2 border-[#00da5b] text-[#00da5b] hover:bg-[#00da5b] hover:text-white transition-colors"
              onClick={() => handleServiceClick('residential')}
            >
              Réserver
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}

        {/* Menú móvil refinado */}
        <div
          className={`md:hidden fixed top-0 right-0 w-2/3 max-w-[260px] h-full bg-[#002319] z-40 transform transition-transform duration-300 ease-in-out border-l border-white/10 shadow-xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <nav className="flex flex-col px-5 py-8 gap-3">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-lg text-left font-normal hover:text-[#00da5b] focus:outline-none focus:ring-2 focus:ring-[#00da5b] py-2 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section id="hero" className="relative w-full">
        {/* --- Imagen para móvil --- */}
        <img
          src="./images/hero_small.png"
          alt="Déménagement - mobile"
          className="block md:hidden w-full h-[380px] sm:h-[420px] object-cover"
        />

        {/* --- Imagen para tablet / desktop --- */}
        <div className="relative hidden md:block w-full">
          <img
            className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[772px] object-cover"
            alt="Camion de déménagement"
            src="./images/hero.png"
          />

          {/* Texto superpuesto (solo en pantallas medianas o grandes) */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="mb-6 md:mb-8">
              <HeroSection />
            </div>
            <div className="w-full max-w-[700px] lg:max-w-[900px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <p className="font-normal text-white text-[20px] md:text-[22px] lg:text-[25px] leading-[32px]">
                Du premier appel jusqu'à l'installation du dernier objet, <br />
                vous n'êtes jamais seul. Nous sommes vos alliés, vos <br />
                accompagnateurs et ceux <b>qui trouvent des solutions.</b>
              </p>
            </div>
          </div>
        </div>

        {/* --- Bloque de texto separado para móviles --- */}
        <div className="flex flex-col items-center justify-center text-center md:hidden bg-[#002319] px-6 pt-8 pb-14">
          <HeroSection />

          <p className="mt-5 text-white text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] font-normal max-w-[340px] sm:max-w-[400px]">
            Du premier appel jusqu'à l'installation du <br />
            dernier objet, vous n'êtes jamais seul. <br/>
            Nous sommes vos alliés, vos<br />
            accompagnateurs et ceux <br />
            <b>qui trouvent des solutions.</b>
          </p>

          {/* Imagen decorativa arrows.png */}
          <img
            src="./images/arrows.png"
            alt="Flèches décoratives"
            className="mt-10 w-[100px] sm:w-[140px] h-auto animate-float"
          />

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-8 lg:px-16">
          <WhyChooseUsSection />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
            {serviceCards.map((service, index) => (
            <Card
              key={index}
              className={`border border-solid border-[#d9d9d9] rounded-[10px]
                          p-6 md:p-5 lg:p-6 hover:shadow-lg transition-all
                          translate-y-[-1rem] animate-fade-in opacity-0 w-full
                          ${[0, 1, 5].includes(index)
                            ? 'cursor-pointer hover:border-[#00da5b] hover:scale-105'
                            : ''}
                          text-center md:text-left`} // centrado en móvil, alineado izq en desktop
              style={{ "--animation-delay": `${800 + index * 100}ms` } as React.CSSProperties}
              onClick={() => {
                if (index === 0) handleServiceClick('residential');
                if (index === 1) handleServiceClick('commercial');
                if (index === 5) handleServiceClick('installations');
              }}
            >
              <CardContent className="p-0 h-full flex flex-col items-center md:items-start">
                <img
                  className="w-[50px] h-[50px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] mb-3 md:mb-4"
                  alt="Service icon"
                  src={service.icon}
                />
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#002319]
                              text-lg md:text-xl tracking-[0] leading-5 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#002319]
                              text-sm md:text-[15px] tracking-[0] leading-[22px] md:leading-[24px]
                              flex-1 max-w-[320px] md:max-w-none">
                  {service.description}
                </p>

                {[0, 1, 5].includes(index) && (
                  <>
                    {/* === Botón verde solo móvil === */}
                    <div className="mt-5 w-full md:hidden">
                      <button
                        className="bg-[#00da5b] text-white text-sm font-bold !font-bold w-full py-3
                                  rounded-[10px] hover:bg-[#00b34a] transition-all duration-200
                                  shadow-md flex items-center justify-center"
                      >
                        <span>Voir les détails</span>
                        <span className="ml-2">›</span>
                      </button>
                    </div>

                    {/* === Enlace alineado a la derecha (solo desktop) === */}
                    <div className="hidden md:flex mt-4 justify-end w-full">
                      <div className="flex items-center text-[#00da5b] text-sm font-medium">
                        <span>Voir les détails</span>
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            ))}
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative w-full">
        {/* --- Desktop --- */}
        <div className="relative hidden md:block w-full">
          <img
            className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[692px] object-cover"
            alt="Van being unloaded"
            src="./images/about-us.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#002319]" />
          <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32">
            <AboutUsSection />
          </div>
        </div>

        {/* --- Mobile --- */}
        <div className="md:hidden w-full">
          {/* Imagen ocupa todo el ancho */}
          <img
            src="./images/about-us_small.png"
            alt="À propos de nous - mobile"
            className="w-full h-[380px] sm:h-[420px] object-cover"
          />

          {/* Texto centrado, adaptado para móvil */}
          <div className="flex flex-col items-center justify-center text-center bg-[#002319] px-8 pt-10 pb-16">
            <div className="max-w-[360px] sm:max-w-[420px]">
              <h2 className="font-semibold text-[#00da5b] mb-6 sm:mb-8 text-[40px] sm:text-[46px] [font-family:'Encode_Sans',Helvetica] leading-[44px] sm:leading-[50px]">
                À propos de nous
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-lg sm:text-xl leading-[28px] sm:leading-[32px] mb-4">
                Chez LogistiquePro, déménager ne signifie pas seulement déplacer des objets. 
                C'est transporter des rêves, des souvenirs et de nouveaux départs.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg sm:text-xl leading-[28px] sm:leading-[32px] mb-4">
                Fondée au cœur du Québec, notre équipe est fièrement multiculturelle et profondément humaine. 
                Nous allions efficacité, précision et chaleur humaine pour offrir une expérience vraiment différente.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg sm:text-xl leading-[28px] sm:leading-[32px]">
                Chaque déménagement est une histoire. La vôtre mérite attention, respect et soutien à chaque étape. 
                Avec nous, vous n'êtes jamais seul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast & Reliable Section */}
      <section className="w-full">
        <CustomerTestimonialsSection />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#00da5b] py-12 sm:py-14 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div
            className="
              flex flex-col lg:flex-row 
              items-center lg:items-center 
              justify-between 
              gap-8 lg:gap-12
              text-center lg:text-left
            "
          >
            {/* Left side - Content */}
            <div className="flex-1 max-w-full lg:max-w-[600px]">
              {/* 🔹 Título móvil */}
              <h2
                className="
                  block lg:hidden 
                  [font-family:'Inter',Helvetica] 
                  text-white font-semibold 
                  text-[32px] sm:text-[36px] 
                  leading-[38px] sm:leading-[42px] 
                  pt-1 mb-4
                "
              >
                <span className="font-bold text-[36px] sm:text-[40px] leading-[42px] sm:leading-[46px]">
                  Réservez votre <br /> déménagement
                </span>
                <br />
                <span className="font-medium text-[26px] sm:text-[28px] leading-[32px] sm:leading-[34px]">
                  en quelques clics !
                </span>
              </h2>

              {/* 🔹 Desktop title sin cambios */}
              <h2
                className="
                  hidden lg:block
                  [font-family:'Inter',Helvetica] font-semibold text-white 
                  text-xl sm:text-2xl md:text-3xl
                  leading-[30px] sm:leading-[32px] md:leading-[34px]
                  mb-4 md:mb-6
                "
              >
                Réservez votre déménagement en quelques clics !
              </h2>

              {/* 🔹 Imagen móvil */}
              <div className="block lg:hidden relative mb-20">
                <img
                  className="w-[98%] sm:w-[100%] mx-auto rounded-[14px]"
                  alt="Young woman"
                  src="./images/woman_shop.png"
                />

                {/* 🔹 Tarjetita móvil */}
                <Card className="absolute bottom-[-50px] right-[5%] w-[150px] sm:w-[170px] bg-white rounded-[14px] shadow-[0px_4px_4px_#00000040] p-2 sm:p-3">
                  <CardContent className="p-0">
                    <div className="text-center mb-2 sm:mb-3">
                      <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-base sm:text-lg leading-[22px]">
                        5000+
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-[11px] sm:text-xs leading-[14px]">
                        Happy users
                      </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 mb-2 sm:mb-3" />

                    <div className="flex justify-between text-center">
                      <div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[15px] sm:text-[16px] leading-[20px]">
                          99.8%
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-[11px] sm:text-xs leading-[14px]">
                          On-time
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div>
                          <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[15px] sm:text-[16px] leading-[20px]">
                            4.9
                          </div>
                          <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-[11px] sm:text-xs leading-[14px]">
                            Rating
                          </div>
                        </div>
                        <img
                          className="w-[12px] h-[12px]"
                          alt="Star"
                          src="https://c.animaapp.com/mfif8x3oj7OD46/img/star-1.svg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 🔹 Descripción un poco más grande en móviles */}
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] sm:text-[19px] md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] mb-4 md:mb-6">
                <span className="font-bold">Cliquez sur le bouton</span> ci-dessous pour accéder à notre page de réservation.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[18px] sm:text-[19px] md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] mb-10 md:mb-8">
                Indiquez simplement la taille de votre appartement et découvrez immédiatement notre tarif horaire. Vous pouvez ensuite confirmer votre réservation en toute simplicité !
              </p>

              {/* 🔹 Botón más grande y centrado en móviles */}
              <div className="flex justify-center lg:justify-start">
                <Button className="w-[270px] sm:w-[300px] md:w-[220px] h-[54px] sm:h-[58px] bg-white rounded-[14px] shadow-[0px_4px_4px_#00000040] text-[#00da5b] hover:bg-gray-100 transition-colors">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-lg sm:text-xl md:text-lg tracking-[0] leading-[28px] text-[#002319]">
                    Réserver votre équipe
                  </span>
                </Button>
              </div>
            </div>

            {/* 🔹 Desktop Image (sin cambios) */}
            <div className="hidden lg:block relative flex-shrink-0">
              <img
                className="w-[400px] xl:w-[444px] h-[273px] xl:h-[303px]"
                alt="Young woman"
                src="./images/woman_shop.png"
              />

              <Card className="absolute bottom-0 right-0 w-[200px] xl:w-[223px] bg-white rounded-[16.84px] shadow-[0px_4px_4px_#00000040] p-3 xl:p-4">
                <CardContent className="p-0">
                  <div className="text-center mb-3 xl:mb-4">
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-lg xl:text-xl leading-[24px] xl:leading-[26.2px]">
                      5000+
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-xs xl:text-[13px] leading-[16px] xl:leading-[17.0px]">
                      Happy users
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-200 mb-3 xl:mb-4" />

                  <div className="flex justify-between text-center">
                    <div>
                      <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[17px] xl:text-[19.4px] leading-[22px] xl:leading-[25.4px]">
                        99.8%
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-xs xl:text-[13px] leading-[16px] xl:leading-[17.0px]">
                        On-time
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#00da5b] text-[17px] xl:text-[19.4px] leading-[22px] xl:leading-[25.4px]">
                          4.9
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-[#829e8e] text-xs xl:text-[13px] leading-[16px] xl:leading-[17.0px]">
                          Rating
                        </div>
                      </div>
                      <img
                        className="w-[13px] xl:w-[15px] h-3 xl:h-3.5"
                        alt="Star"
                        src="https://c.animaapp.com/mfif8x3oj7OD46/img/star-1.svg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and CTA Section with Background */}
      <section id="conseils" className="w-full relative">

{/* Mobile Layout - Unified Section */}
<div className="md:hidden relative min-h-[800px] overflow-hidden">
  {/* Background Image - Mobile */}
<div
  className="absolute inset-0 w-full h-full"
  style={{
    backgroundImage: "url(./images/tips-bg_small.png)",
    backgroundSize: "cover",
    backgroundPosition: "30% 45%", // 👈 mueve la imagen hacia la izquierda y ligeramente hacia abajo
    backgroundRepeat: "no-repeat",
    filter: "brightness(1.2) contrast(1.15) saturate(1.1)",
  }}
/>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

  {/* Content Container */}
  <div
    className="
      absolute inset-0 
      flex flex-col justify-start items-center 
      px-4 pt-12 sm:pt-16 z-10 text-center
    "
  >
    {/* Title Section */}
    <div className="mb-8">
      <TipsForMovingSection />
    </div>

    {/* Conseils Section */}
    <div className="w-full">
      <CallToActionSection />
    </div>
  </div>
</div>







        {/* Desktop Layout */}
        <div className="hidden md:block min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url(https://c.animaapp.com/mfif8x3oj7OD46/img/pexels-karolina-grabowska-4506225-1.png)",
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.2) contrast(1.15) saturate(1.1)",
              transform: "scale(1.1)"
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/20 via-black/40 to-black/75" />
          
          <div className="relative z-10 w-full px-8 lg:px-16 xl:px-20 py-10 lg:py-12 xl:py-16 flex flex-col justify-center h-full">
            {/* Title at the top right, aligned left */}
            <div className="mb-8 lg:mb-12 flex justify-center lg:justify-end">
              <div className="w-full max-w-4xl lg:max-w-3xl px-4 lg:mr-16">
                <TipsForMovingSection />
              </div>
            </div>
            
            {/* Tips content positioned to the right */}
            <div className="flex justify-end">
              <div className="w-full max-w-2xl mr-8">
                <CallToActionSection />
              </div>
            </div>
          </div>
        </div>
      </section>


























      {/* Footer Section */}
      <ServiceFeaturesSection />

      {/* Service Modal */}
      <ServiceModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceType={selectedService}
      />

      {/* Floating vertical button (mobile only, refined vertical look) */}
      {!isMobileMenuOpen && (
        <div
          className="
            fixed 
            top-24 
            right-[0px] 
            md:hidden 
            z-50 
            origin-bottom-right 
            rotate-[-90deg]
          "
        >
          <Button
            onClick={() => handleServiceClick('residential')}
            variant="default"
            className="
              bg-white 
              text-[#00da5b] 
              rounded-[12px]
              px-10 
              py-4 
              shadow-xl 
              hover:bg-[#00da5b] 
              hover:text-white 
              transition-all 
              duration-300
              font-semibold
              tracking-wide
              text-base
              drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]
            "
          >
            Réserver
          </Button>
        </div>
      )}
    </div>
  );
};
