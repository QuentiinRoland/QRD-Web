import React from 'react'
import Sectors from './Sectors'

const ForWhoSection = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-5 text-gray-800'>Pour qui est conçue notre solution ?</h2>
        <p className='max-w-4xl text-lg leading-relaxed mb-8 text-gray-700'>
          Nos écosystèmes digitaux sont spécialement développés pour révolutionner le quotidien des professionnels de terrain. 
          Que vous soyez un <span className='font-semibold'>artisan indépendant</span> cherchant à maximiser votre efficacité, 
          une <span className='font-semibold'>entreprise multi-techniciens</span> visant une coordination parfaite, 
          une <span className='font-semibold'>société de maintenance</span> souhaitant optimiser ses interventions, 
          ou une <span className='font-semibold'>entreprise d'aménagement extérieur</span> nécessitant un suivi visuel précis — 
          notre solution s'adapte précisément à vos défis quotidiens. 
          Découvrez ci-dessous comment notre écosystème transforme la façon dont les professionnels comme vous travaillent, 
          gagnent du temps et augmentent leur rentabilité.
        </p>
        <Sectors />
    </div>
  )
}

export default ForWhoSection