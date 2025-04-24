import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Building2, Settings, Leaf } from 'lucide-react';

const SectorsTable = () => {
const sectorsList = [
    {
        title: "Artisans et professionnels indépendants",
        description: "Vous êtes un plombier, électricien, menuisier ou tout autre artisan travaillant principalement seul ou avec une petite équipe ? Les artisans utilisant notre écosystème gagnent en moyenne 8 heures par semaine.",
        icon: <Wrench className="w-6 h-6 md:w-8 md:h-8 text-violet-custom" />
    },
    {
        title: "Entreprises de services locaux",
        description: "Vous dirigez une entreprise de services intervenant quotidiennement chez vos clients ? Notre écosystème digital permet généralement une augmentation de 30% de leur capacité d'intervention après l'implémentation !",
        icon: <Building2 className="w-6 h-6 md:w-8 md:h-8 text-purple-custom" />
    },
    {
        title: "Sociétés de maintenance et SAV",
        description: "Vous gérez un service de maintenance, un SAV ou toute activité nécessitant de nombreuses interventions quotidiennes de courte durée ? La réactivité et la traçabilité sont essentielles dans votre métier.",
        icon: <Settings className="w-6 h-6 md:w-8 md:h-8 text-orange-custom" />
    },
    {
        title: "Entreprises d'aménagement extérieur",
        description: "Vous travaillez dans l'aménagement paysager, l'entretien d'espaces verts ou tout autre métier en extérieur ? Notre écosystème digital a été initialement développé avec des professionnels de ce secteur.",
        icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-purple-custom" />
    }
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 }
      }
    };
  
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black"
      >
        {sectorsList.map((sector, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="p-4 md:p-6 border-l border-gray-700"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              borderLeft: "2px solid #8B5CF6" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-2 md:gap-3">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {sector.icon}
              </motion.div>
              <h3 className={`text-base md:text-lg font-medium ${index === 1 ? 'max-w-28 md:max-w-36': ''}`}>{sector.title}</h3>
            </div>
            <p className="mt-2 md:mt-3 text-sm md:text-lg text-gray-700">{sector.description}</p>
          </motion.div>
        ))}
      </motion.div>
    );
  };
  
  export default SectorsTable;