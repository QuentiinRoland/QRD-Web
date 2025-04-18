import React from 'react';
import { Wrench, Building2, Settings, Leaf } from 'lucide-react';

const SectorsTable = () => {
const sectorsList = [
    {
        title: "Artisans et professionnels indépendants",
        description: "Vous êtes un plombier, électricien, menuisier ou tout autre artisan travaillant principalement seul ou avec une petite équipe ? Les artisans utilisant notre écosystème gagnent en moyenne 8 heures par semaine.",
        icon: <Wrench className="w-8 h-8 text-violet-custom" />
    },
    {
        title: "Entreprises de services locaux",
        description: "Vous dirigez une entreprise de services intervenant quotidiennement chez vos clients ? Notre écosystème digital permet généralement une augmentation de 30% de leur capacité d'intervention après l'implémentation !",
        icon: <Building2 className="w-8 h-8 text-purple-custom" />
    },
    {
        title: "Sociétés de maintenance et SAV",
        description: "Vous gérez un service de maintenance, un SAV ou toute activité nécessitant de nombreuses interventions quotidiennes de courte durée ? La réactivité et la traçabilité sont essentielles dans votre métier.",
        icon: <Settings className="w-8 h-8 text-orange-custom" />
    },
    {
        title: "Entreprises d'aménagement extérieur",
        description: "Vous travaillez dans l'aménagement paysager, l'entretien d'espaces verts ou tout autre métier en extérieur ? Notre écosystème digital a été initialement développé avec des professionnels de ce secteur.",
        icon: <Leaf className="w-8 h-8 text-purple-custom" />
    }
    ];

  return (
    <div className="grid grid-cols-2 gap-4 text-black">
      {sectorsList.map((sector, index) => (
        <div key={index} className="p-6 border-l border-gray-700">
          <div className="flex items-start gap-3">
            {sector.icon}
            <h3 className={`text-lg font-medium ${index === 1 ? 'max-w-36': ''}`}>{sector.title}</h3>
          </div>
          <p className="mt-3 text-lg text-gray-700">{sector.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SectorsTable;