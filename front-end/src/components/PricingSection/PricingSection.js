import { animate, motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';


const pricingData = [
  {
    id: 1,
    title: "Présence Express",
    description: "Un site rapide, professionnel et optimisé pour vous trouver sur Google. Pour les Indépendants, artisans, pros. Attirez de nouveaux clients et renforcez votre crédibilité professionnelle.",
    price: "1299€",
    buttonText: "Recevoir un aperçu personnalisé",
    imageSrc: "/WebsiteAppCard.png",
    deliveryTime: "Livraison : 1 à 2 semaines",
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
    description: "Site + dashboard + app pour centraliser votre business et gagner du temps au quotidien. Synchronisez vos données terrain et bureau, et éliminez les erreurs de communication",
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
    description: "Une application personnalisée pour gérer ses clients, interventions ou devis. Fonctionne même sans connexion internet pour ne jamais vous ralentir sur le terrain.",
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
  const [planRef, planInView] = useInView({
    triggerOnce : true,
    threshold : 0.2
  })

  const openCalendly = () => {
    window.open('https://calendly.com/rolandigital-info/30min', '_blank', 'noopener,noreferrer')
  }

  const openTypeform = () => {
    window.open('https://form.typeform.com/to/eBpeX9mS', '_blank', 'noopener,noreferrer')
  }


  const containerVariants = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1,
      transition : {
        staggerChildren : 0.3,
        delayChildren : 0.4,
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col max-w-7xl mx-auto py-24 px-4">
        <motion.div initial={{opacity :0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{ duration: 0.5, ease:"easeOut" }}  className="flex flex-col gap-4 text-center items-center mb-12">
          <span className='bg-violet-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>Nos tarifs</span>
          <h2 className="text-4xl font-bold">Des solutions digitales professionnelles à prix transparent</h2>
          <p className="bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text text-xl max-w-3xl mx-auto">Nous créons des outils numériques adaptés aux besoins des entrepreneurs, artisans et professionnels. Choisissez la solution qui correspond à vos ambitions et à votre budget.</p>
        </motion.div>
        
        <motion.div ref={planRef} initial="hidden" animate={planInView ? "visible" : "hidden"} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants} className="relative h-[680px] overflow-hidden">
              <img 
                src={plan.imageSrc} 
                alt={plan.title} 
                className="absolute inset-0 w-full h-full"
              />
              
              <div className="absolute inset-0">
                <div className="absolute top-[60px] left-0 right-0 px-6">
                  <h3 className="text-3xl font-bold mb-2 text-center">{plan.title}</h3>
                  <p className="bg-gradient-to-b from-white to-white/50 inline-block text-transparent bg-clip-text text-base mb-4 text-center px-8">{plan.description}</p>
                </div>
                
                <div className="absolute top-[245px] left-0 right-0 px-6">
                  <button onClick={() => openTypeform()}className="bg-transparent text-white py-3 px-4 w-full text-center text-base">
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
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-8 text-sm opacity-70">
          * La maintenance illimitée comprend les mises à jour de sécurité et le support technique par email.
        </div>
      </div>
    </div>
  );
};

export default PricingSection;