import React from 'react'
import SectorsTable from '../ForWhoSection/Sectors' 
const ForWhoSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-2/5 flex flex-col justify-center gap-2">
          <span className='bg-violet-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>Des solutions adaptées à votre métier</span>
          <h2 className="text-3xl font-bold text-gray-800">Pour qui est conçue notre solution ?</h2>
          <p className="text-lg leading-relaxed pt-2 text-gray-700">
            Nos écosystèmes digitaux sont spécialement développés pour révolutionner le quotidien des professionnels de terrain. 
            Que vous soyez un <span className="font-semibold">artisan indépendant</span> cherchant à maximiser votre efficacité, 
            une <span className="font-semibold">entreprise multi-techniciens</span> visant une coordination parfaite, 
            une <span className="font-semibold">société de maintenance</span> souhaitant optimiser ses interventions, 
            ou une <span className="font-semibold">entreprise d'aménagement extérieur</span> nécessitant un suivi visuel précis — 
            notre solution s'adapte précisément à vos défis quotidiens. 
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <SectorsTable />
        </div>
      </div>
    </div>
  );
};


export default ForWhoSection