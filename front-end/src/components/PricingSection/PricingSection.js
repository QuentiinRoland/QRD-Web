import React from 'react';

const pricingData = [
  {
    id: 1,
    title: "Présence Express",
    description: "Un site rapide, professionnel et optimisé pour vous trouver sur Google. Pour les Indépendants, artisans, pros",
    price: "1299€",
    buttonText: "Recevoir un aperçu personnalisé",
    imageSrc: "/WebsiteAppCard.png",
    deliveryTime: "Livraison : 5 à 7 jours",
    features: [
      "Maquette web-sur mesure",
      "Site internet",
      "Référencement Web optimisé pour Google",
      "Site responsive (mobile & tablette)",
      "Maintenance illimitée*",
      "E-book \"Booster sa visibilité locale\" offert (bonus surprise pour se démarquer)"
    ]
  },
  {
    id: 2,
    title: "Écosystème Digital",
    description: "Site + dashboard + app pour centraliser votre business et gagner du temps au quotidien.",
    price: "4999€",
    buttonText: "Recevoir un aperçu personnalisé",
    imageSrc: "/EcosystemCard.png",
    deliveryTime: "Livraison : 3 à 4 semaines",
    features: [
      "Maquette web-sur mesure",
      "Site web pro + SEO + stratégie de contenu",
      "Application mobile",
      "Dashboard web : gestion prestations / employés ...",
      "Maintenance illimitée*",
      "Hébergement et support 12 mois inclus"
    ]
  },
  {
    id: 3,
    title: "Application Mobile",
    description: "Une application personnalisée pour gérer ses clients, interventions ou devis.",
    price: "2999€",
    buttonText: "Recevoir un aperçu personnalisé",
    imageSrc: "/WebsiteAppCard.png",
    deliveryTime: "Livraison : 2 à 3 semaines",
    features: [
      "Conception d'une app mobile",
      "Fonctionnalités personnalisables (agenda, liste clients, PDF, etc.)",
      "Hébergement et stockage sécurisé",
      "Envoi par mail ou partage client",
      "Maintenance illimitée*",
      "Design simple et fluide"
    ]
  }
];

export const PricingSection = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-4xl font-bold">Des solutions digitales professionnelles à prix transparent</h2>
          <p className="bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text text-xl max-w-3xl mx-auto">Nous créons des outils numériques adaptés aux besoins des entrepreneurs, artisans et professionnels. Choisissez la solution qui correspond à vos ambitions et à votre budget.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan) => (
            <div key={plan.id} className="relative h-[680px] overflow-hidden">
              <img 
                src={plan.imageSrc} 
                alt={plan.title} 
                className="absolute inset-0 w-full h-full"
              />
              
              <div className="absolute inset-0">
                <div className="absolute top-[70px] left-0 right-0 px-6">
                  <h3 className="text-3xl font-bold mb-2 text-center">{plan.title}</h3>
                  <p className="bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text text-sm mb-4 text-center px-8">{plan.description}</p>
                </div>
                
                <div className="absolute top-[180px] left-0 right-0 text-center">
                  <p className="text-5xl font-bold">
                    {plan.price}
                    <span className="text-lg"> HT</span>
                  </p>
                </div>
                
                <div className="absolute top-[245px] left-0 right-0 px-6">
                  <button className="bg-transparent text-white py-3 px-4 w-full text-center text-sm">
                    {plan.buttonText}
                  </button>
                </div>
                
                <div className="absolute top-[340px] left-20 right-0">
                  <ul className="flex flex-col gap-[24px]">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={`flex items-star† ${
                        plan.id === 1 && index === 5 ? 'relative -top-3 left-1' : 
                        plan.id === 2 && index === 3 ? 'relative -top-2 left-1' :
                        plan.id === 2 && index === 4 ? 'relative -top-4' :
                        plan.id === 2 && index === 5 ? 'relative -top-4' :
                        plan.id === 3 && index === 1 ? 'relative -top-2 left-1' : 
                        plan.id === 3 && index === 2 ? 'relative -top-4' : 
                        plan.id === 3 && index === 3 ? 'relative -top-4' : 
                        plan.id === 3 && index === 4 ? 'relative -top-4' : 
                        plan.id === 3 && index === 5 ? 'relative -top-4' : ''
                      }`}>
                        <div className="w-6 h-6 flex items-center justify-center opacity-0">
                          <div className="w-5 h-5"></div>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className='absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2'>
                    <img src='/clock.png' alt='clock icon' width={16} height={16} />
                    <div className="bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text bottom-6 left-0 right-0 text-center text-sm">
                    {plan.deliveryTime}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-sm opacity-70">
          * La maintenance illimitée comprend les mises à jour de sécurité et le support technique par email.
        </div>
      </div>
    </div>
  );
};

export default PricingSection;