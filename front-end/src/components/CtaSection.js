import React from 'react'

const CtaSection = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/rolandigital-info/30min', '_blank', 'noopener,noreferrer')
  }
  
  return (
    <div className='max-w-7xl mx-auto flex justify-center items-center rounded-lg p-[2px] bg-gradient-to-br from-violet-custom via-purple-custom to-orange-custom shadow-xl mt-2 relative overflow-hidden'>
        <img src='/Rolandigital.png' alt='' width={450} height={450} className='absolute left-0 top-10 opacity-10' />
        <div className='w-full py-8 sm:py-10 md:py-12 mx-auto bg-black flex flex-col justify-center rounded-lg items-center gap-2 sm:gap-3 px-4'>
          <span className='bg-orange-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'>Une question ?</span>
          <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-medium z-10 max-w-2xl text-center'>Découvrez une nouvelle approche digitale pour les métiers de terrain</h2>
          <p className='z-10 bg-gradient-to-b from-white to-white/60 inline-block text-transparent bg-clip-text max-w-3xl text-center text-base sm:text-lg'>Propulsez votre entreprise avec un écosystème digital sur mesure, conçu spécifiquement pour les artisans et professionnels terrain, des indépendants aux sociétés multi-techniciens</p>
          <div className="z-10 inline-flex w-fit relative p-[2px] bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom rounded-full mt-2 sm:mt-4">
            <button onClick={() => openCalendly()} className="bg-black text-white font-medium text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-full relative z-10">
              Réserver un appel gratuit !
            </button>
          </div>
        </div>
    </div>
  )
}

export default CtaSection