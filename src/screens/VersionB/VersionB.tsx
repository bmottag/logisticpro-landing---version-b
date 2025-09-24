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
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-6.png",
    title: "Déménagement résidentiel",
    description:
      "Nous facilitons votre transition vers un nouveau chez-vous avec un service attentionné, ponctuel et efficace. Que ce soit un appartement, une maison ou un condo, notre équipe transporte vos biens avec soin et respect.",
  },
  {
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-2.png",
    title: "Déménagement commercial",
    description:
      "Minimisez l'interruption de vos activités grâce à notre expertise en déménagement d'entreprises. Bureaux, commerces ou ateliers; nous planifions chaque étape pour un transfert rapide et sécurisé.",
  },
  {
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-3.png",
    title: "Emballage et déballage",
    description:
      "Gagnez du temps et protégez vos objets fragiles avec notre service d'emballage professionnel. Nous fournissons les matériaux nécessaires et nous occupons du déballage si vous le souhaitez.",
  },
  {
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-7.png",
    title: "Transport longue distance",
    description:
      "Nous facilitons votre transition vers un nouveau chez-vous avec un service attentionné, ponctuel et efficace. Que ce soit un appartement, une maison ou un condo, notre équipe transporte vos biens avec soin et respect.",
  },
  {
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-5.png",
    title: "Entreposage temporaire",
    description:
      "Minimisez l'interruption de vos activités grâce à notre expertise en déménagement d'entreprises. Bureaux, commerces ou ateliers; nous planifions chaque étape pour un transfert rapide et sécurisé.",
  },
  {
    icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/group-4.png",
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
        <div className="flex items-center px-4 md:px-10 lg:px-16 xl:px-20 py-8 md:py-10 lg:py-12 w-full">
          {/* Logo */}
          <img
            className="w-[200px] md:w-[240px] lg:w-[269px] h-auto translate-y-[-1rem] animate-fade-in opacity-0 flex-shrink-0"
            alt="LogistiquePro Logo"
            src="./images/logo.png"
          />

          {/* Navigation Menu - Right after logo with more padding */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 ml-16 lg:ml-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
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

          {/* Spacer to push Sign In button to the right */}
          <div className="flex-1"></div>

          {/* Right side - Sign In Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Sign In Button */}
            <Button className="w-[90px] sm:w-[110px] md:w-[145px] h-[32px] sm:h-[35px] md:h-[39px] bg-white rounded-[8px] md:rounded-[10px] border-2 border-solid border-[#00da5b] text-[#00da5b] hover:bg-[#00da5b] hover:text-white transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] h-auto">
              <span className="[font-family:'Inter',Helvetica] font-normal text-sm sm:text-base md:text-lg lg:text-xl tracking-[0] leading-5">
                Réserver
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            >
              <span className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Overlay */}
        <div className={`md:hidden absolute top-full left-0 right-0 z-50 bg-[#002319] border-t border-white/20 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="[font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-5 hover:text-[#00da5b] transition-colors py-3 px-2 text-left rounded-md hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section id="hero" className="relative w-full">
        <div className="relative w-full">
          <img
            className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[772px] object-cover"
            alt="Shutterstock"
            src="./images/hero.png"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="mb-6 md:mb-8">
              <HeroSection />
            </div>
            <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[479px] lg:max-w-[700px] xl:max-w-[900px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] tracking-[0] leading-[24px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px]">
                Du premier appel jusqu'à l'installation du dernier objet, <br/>
                vous n'êtes jamais seul. Nous sommes vos alliés, vos <br/>
                accompagnateurs et ceux <b>qui trouvent des solutions. </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <WhyChooseUsSection />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12 lg:mt-16">
            {serviceCards.map((service, index) => (
              <Card
                key={index}
                className={`border border-solid border-[#d9d9d9] rounded-[10px] p-4 md:p-5 lg:p-6 hover:shadow-lg transition-all translate-y-[-1rem] animate-fade-in opacity-0 w-full ${
                  [0, 1, 5].includes(index) ? 'cursor-pointer hover:border-[#00da5b] hover:scale-105' : ''
                }`}
                style={{ "--animation-delay": `${800 + index * 100}ms` } as React.CSSProperties}
                onClick={() => {
                  if (index === 0) handleServiceClick('residential');
                  if (index === 1) handleServiceClick('commercial');
                  if (index === 5) handleServiceClick('installations');
                }}
              >
                <CardContent className="p-0">
                  <img
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] mb-3 md:mb-4"
                    alt="Service icon"
                    src={service.icon}
                  />
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#002319] text-lg md:text-xl tracking-[0] leading-5 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#002319] text-sm md:text-[15px] tracking-[0] leading-[18px] md:leading-[19.7px]">
                    {service.description}
                  </p>
                  {[0, 1, 5].includes(index) && (
                    <div className="mt-4 flex items-center text-[#00da5b] text-sm font-medium">
                      <span>Voir les détails</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* About Us Section - Van image left, text right */}
      <section id="about" className="relative w-full">
        <div className="relative w-full">
          <img
            className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[692px] object-cover"
            alt="Van being unloaded"
            src="https://c.animaapp.com/mfif8x3oj7OD46/img/rectangle-25.png"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#002319]" />

          <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32">
            <AboutUsSection />
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section - Text left, woman image right */}
      <section className="w-full bg-[#002319] py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-20">
            {/* Left side - Testimonial text with padding */}
            <div className="flex-1 w-full max-w-full sm:max-w-[500px] lg:max-w-[450px] px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:pl-16">
              <DeliveryServiceSection />
              
              {/* Name positioned at bottom with more spacing */}
              <div className="flex justify-end mt-12 sm:mt-16 md:mt-20">
                <div className="text-right">
                  <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl sm:text-3xl tracking-[0] leading-[28px] sm:leading-[30px]">
                    Marie Trebouis
                  </h2>
                </div>
              </div>
            </div>

            {/* Right side - Image with padding (hidden on small devices) */}
            <div className="hidden lg:flex flex-1 justify-center items-center py-12 px-8">
              <div className="relative">
                <img
                  className="w-[400px] h-[400px] xl:w-[453px] xl:h-[454px] object-cover"
                  alt="Decorative stripes"
                  src="https://c.animaapp.com/mfif8x3oj7OD46/img/stripes-1.png"
                />
                <img
                  className="absolute w-[410px] h-[420px] xl:w-[456px] xl:h-[468px] top-8 left-10 xl:top-11 xl:left-[49px] object-cover"
                  alt="Marie Trebouis"
                  src="https://c.animaapp.com/mfif8x3oj7OD46/img/photo-1491349174775-aaafddd81942-1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast & Reliable Section */}
      <section className="w-full">
        <CustomerTestimonialsSection />
      </section>


      {/* CTA Section */}
      <section className="w-full bg-[#00da5b] py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left side - Content */}
            <div className="flex-1 max-w-full lg:max-w-[600px] text-left">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-3xl tracking-[0] leading-[26px] sm:leading-[28px] md:leading-[30px] mb-4 md:mb-6">
                Réservez votre déménagement en quelques clics !
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl tracking-[0] leading-[22px] sm:leading-[24px] md:leading-[26.2px] mb-6 md:mb-8">
                Cliquez sur le bouton ci-dessous pour accéder à notre page de réservation. Indiquez simplement la taille de votre appartement et découvrez immédiatement notre tarif horaire. Vous pouvez ensuite confirmer votre réservation en toute simplicité !
              </p>

              <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
                <Button className="flex-shrink-0 w-[200px] sm:w-[200px] md:w-[220px] h-[38px] sm:h-[40px] md:h-[42px] bg-white rounded-[14px] shadow-[0px_4px_4px_#00000040] text-[#00da5b] hover:bg-gray-100 transition-colors h-auto">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-sm sm:text-base md:text-lg tracking-[0] leading-[26.2px]">
                    Réserver votre équipe
                  </span>
                </Button>
              </div>
            </div>

            {/* Right side - Image (hidden on small devices) */}
            <div className="hidden lg:block relative flex-shrink-0">
              <img
                className="w-[400px] xl:w-[444px] h-[273px] xl:h-[303px]"
                alt="Young woman"
                src="https://c.animaapp.com/mfif8x3oj7OD46/img/young-woman-organizing-live-shop-3.png"
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
        <div className="md:hidden relative min-h-[450px] overflow-hidden">
          {/* Background Image - Full Width */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url(https://c.animaapp.com/mfif8x3oj7OD46/img/pexels-karolina-grabowska-4506225-1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.2) contrast(1.15) saturate(1.1)"
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          
          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-10">
            {/* Title Section */}
            <div className="mb-6 text-center">
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
    </div>
  );
};
