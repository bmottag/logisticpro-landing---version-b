import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ServiceFeaturesSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/phone-1.svg",
      text: "(555) 123-4567",
      iconClasses: "w-[21px] h-[22px]",
    },
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/envelope-1.svg",
      text: "support@logistiquepro.com",
      iconClasses: "w-[22px] h-[17px]",
    },
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/map-pin-1.svg",
      text: "123 Delivery St, Canada, Montreal 12345",
      iconClasses: "w-[19px] h-[27px]",
    },
  ];

  const servicesLinks = [
    "Same Day Delivery",
    "Express Delivery",
    "Scheduled Delivery",
    "International Shipping",
    "Package Tracking",
  ];

  const companyLinks = [
    "About Us",
    "Carrers",
    "Press",
    "Privacy Policy",
    "Terms of Service",
  ];

  const socialIcons = [
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/facebook-1.svg",
      classes: "w-3 h-5",
    },
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/instagram-1.svg",
      classes: "w-5 h-5",
    },
    {
      icon: "https://c.animaapp.com/mfif8x3oj7OD46/img/x-1.svg",
      classes: "w-[19px] h-[18px]",
    },
  ];

  return (
    <footer className="w-full bg-[#04161c] py-8 md:py-16 lg:py-[73px] px-4 md:px-8 lg:px-44 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="relative w-full max-w-[1152px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8 md:mb-12 lg:mb-16 gap-8 lg:gap-0">
          {/* Logo and Company Info */}
          <div className="flex-1 max-w-full lg:max-w-[390px]">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <img
                className="w-[43px] h-[26px]"
                alt="Logo"
                src="https://c.animaapp.com/mfif8x3oj7OD46/img/logo-1.svg"
              />
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl md:text-3xl tracking-[0] leading-[30px]">
                LogistiquePro
              </h2>
            </div>

            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg md:text-xl tracking-[0] leading-[24px] md:leading-[26.2px] mb-8 md:mb-12 lg:mb-16">
              Your trusted delivery partner providing fast, secure, and reliable
              delivery services across the city. Available 24/7 for all your
              delivery needs.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 md:space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <img
                    src={contact.icon}
                    alt=""
                    className={`${contact.iconClasses} mt-1 flex-shrink-0`}
                  />
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-[28px] md:leading-[36.6px]">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-[227px] w-full lg:w-auto">
            {/* Services Column */}
            <div className="w-full sm:w-[169px]">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-5 mb-4 md:mb-6 lg:mb-8">
                Services
              </h3>
              <div className="space-y-2 md:space-y-3">
                {servicesLinks.map((service, index) => (
                  <div key={index}>
                    <a
                      href="#"
                      className="[font-family:'Inter',Helvetica] text-[#829e8e] text-sm md:text-[15px] leading-[20px] md:leading-[25.5px] hover:text-white transition-colors block"
                    >
                      {service}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Column */}
            <div className="w-full sm:w-32">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-lg md:text-xl tracking-[0] leading-5 mb-4 md:mb-6 lg:mb-8">
                Company
              </h3>
              <div className="space-y-2 md:space-y-3">
                {companyLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href="#"
                      className="[font-family:'Inter',Helvetica] text-[#829e8e] text-sm md:text-[15px] leading-[20px] md:leading-[25.5px] hover:text-white transition-colors block"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-white/20 mb-2 md:mb-3" />

        {/* Bottom Section - Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          {/* Copyright */}
          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-4 order-2 md:order-1">
            © 2025 LogistiquePro. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6 md:gap-8 order-1 md:order-2">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src={social.icon}
                  alt=""
                  className={social.classes}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
