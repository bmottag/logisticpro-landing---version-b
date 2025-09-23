import React from "react";
import { Modal } from "./ui/modal";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'residential' | 'commercial' | 'installations';
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, serviceType }) => {
  const getServiceData = () => {
    if (serviceType === 'residential') {
      return {
        title: "Déménagement résidentiel",
        subtitle: "Équipes de 1, 2 ou 3 personnes (camion de 22 pieds)",
        teams: [
          {
            size: "*Équipe de 1 personne + camion (22 pieds)",
            price: "100$ / heure**",
            details: "Durée minimale: 3 heures, plus le temps de transport. Pour les trajets de plus de 20 km, un supplément carburant de 0,70$ / km s'applique."
          },
          {
            size: "Équipe de 2 personnes + camion (22 pieds)",
            price: "125$ / heure**",
            details: "Durée minimale: 3 heures, plus le temps de transport. Pour les trajets de plus de 20 km, un supplément carburant de 0,70$ / km s'applique."
          },
          {
            size: "Équipe de 3 personnes + camion (22 pieds)",
            price: "150$ / heure**",
            details: "Durée minimale: 3 heures, plus le temps de transport. Pour les trajets de plus de 20 km, un supplément carburant de 0,70$ / km s'applique."
          }
        ],
        driverOnly: {
          title: "*Service conducteur seulement",
          description: "Vous avez besoin d'un chauffeur, mais préférez gérer vous-même le reste? Notre conducteur s’occupe de la route et place vos meubles dans le camion. Vous gardez le contrôle de l’emballage, du chargement et du déchargement."
        },
        subtitleIncuded: "*Service inclus",
        included: "Pour vous simplifier la vie, nous fournissons des couvertures de protection, du ruban adhésif et tout le matériel nécessaire afin que vos biens voyagent en toute sécurité."
      };
    } else if (serviceType === 'commercial') {
      return {
        title: "Déménagement commercial",
        subtitle: "Équipes de 1, 2 ou 3 personnes (camion de 22 pieds)",
        teams: [
          {
            size: "Équipe de 1 personne + camion (22 pieds)",
            price: "100 $ / heure",
            details: "durée minimale : 3 heures, plus le temps de transport. Pour les trajets de plus de 20 km, supplément carburant 0,70 $ / km."
          },
          {
            size: "Équipe de 2 personnes + camion (22 pieds)",
            price: "130 $ / heure",
            details: "durée minimale : 3 heures, plus le temps de transport. Supplément carburant (> 20 km) : 0,70 $ / km."
          },
          {
            size: "Équipe de 3 personnes + camion (22 pieds)",
            price: "180 $ / heure",
            details: "durée minimale : 3 heures, plus le temps de transport. Supplément carburant (> 20 km) : 0,70 $ / km."
          }
        ],
        subtitleIncuded: "*Service inclus",
        included: "Le service comprend : couvertures de protection, ruban adhésif et matériel de déménagement."
      };
    } else {
      return {
        title: "Installations spéciales",
        subtitle: "",
        teams: [
          {
            size: "Équipe de 2 personnes",
            price: "60$ / heure*",
            details: "Durée minimale: 3 heures, plus le temps de transport. Pour les trajets de plus de 20 km, un supplément carburant de 0,70$ / km s'applique."
          }
        ],
        subtitleIncuded: "*Service inclus",
        included: "Veuillez noter que nos services n'incluent pas les installations électriques ni de plomberie."
      };
    }
  };

  const serviceData = getServiceData();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002319] mb-2">
            {serviceData.title}
          </h2>
          <div className="w-16 h-1 bg-[#00da5b] rounded-full"></div>
        </div>

        {/* Teams Section */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-[#002319] mb-4">
            {serviceData.subtitle}
          </h3>
          
          <div className="space-y-4">
            {serviceData.teams.map((team, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-semibold text-[#002319] text-sm md:text-base">
                    {team.size}
                  </h4>
                  <span className="text-[#00da5b] font-bold text-lg md:text-xl">
                    {team.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {team.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Driver Only Service (only for residential) */}
        {serviceData.driverOnly && (
          <div className="mb-6">
            <div className="bg-[#00da5b] bg-opacity-10 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-[#002319] mb-2">
                {serviceData.driverOnly.title}
              </h3>
              <p className="text-[#002319] text-sm md:text-base font-medium">
                {serviceData.driverOnly.description}
              </p>
            </div>
          </div>
        )}

        {/* Included Services */}
        <div className="bg-[#00da5b] bg-opacity-10 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-[#002319] mb-2">
            {serviceData.subtitleIncuded}
          </h3>
          <p className="text-[#002319] text-sm md:text-base font-medium">
            {serviceData.included}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full bg-[#00da5b] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#00c251] transition-colors">
            Réserver votre équipe
          </button>
        </div>
      </div>
    </Modal>
  );
};
