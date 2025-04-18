import React from 'react';
import { motion } from 'framer-motion';
import { PartnersData } from '../components/PartnersSection/dataPartners';

const HeroSection = () => {
  const duplicatedLogos = [...PartnersData, ...PartnersData];

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <img src='/wallpaperHero2.png' alt='' className='absolute w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="flex-1 flex items-center max-w-7xl mx-auto relative z-10 w-full py-24">
        <div className='flex flex-col w-full md:w-2/3 gap-4'>
          <h1 className="text-6xl font-semibold leading-tight max-w-3xl mb-4 bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text inline-block">
          Transform your field expertise into a digital empire
          </h1>

          <p className="text-white text-xl max-w-3xl mb-6">
          Our digital ecosystem turns wasted hours on paperwork into growth opportunities, with tools designed by and for field professionals.
          </p>

          <div className='flex gap-4 text-white mb-6'>
            <div className='flex gap-2 items-center'>
              <img src='/internet.png' width={30} height={30} alt="Internet"/>
              <p>Websites</p>
            </div>
            <p>•</p>
            <div className='flex gap-2 items-center'>
              <img src='/setting.png' width={30} height={30} alt="Applications"/>
              <p>Mobile apps</p>
            </div>
            <p>•</p>
            <div className='flex gap-2 items-center'>
              <img src='/develop.png' width={30} height={30} alt="Solutions"/>
              <p>Digital solutionss</p>
            </div>
          </div>

          <div className="inline-flex w-fit relative p-[2px] bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom rounded-full">
            <button className="bg-black text-white font-medium py-4 px-8 rounded-full relative z-10">
            Book a free discovery call (15 min)
            </button>
          </div>
        </div>
      </div>

      {/* Section partenaires intégrée au hero, en bas de l'écran */}
      <div className="w-full py-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className='max-w-7xl mx-auto flex items-center justify-between gap-12 px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium  text-white'>Trusted by field companies across all industries.</h2>
            <p className='text-md font-medium bg-gradient-to-b from-white to-white/50 text-transparent inline-block bg-clip-text'>From independent contractors to large maintenance firms.</p>
          </div>
          <div className="overflow-hidden max-w-[800px] h-[80px]">
            <motion.div
              className='flex items-center gap-12'
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {duplicatedLogos.map((partner, idx) => (
                <div key={idx} className='flex-shrink-0'>
                  <img src={partner.picture} alt={partner.picture} width={120} height={120} className='object-contain grayscale hover:grayscale-0 transition'/>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;