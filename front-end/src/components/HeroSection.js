import React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { PartnersData } from '../components/PartnersSection/dataPartners';

const HeroSection = () => {
  const duplicatedLogos = [...PartnersData, ...PartnersData];
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const openCalendly = () => {
    window.open('https://calendly.com/rolandigital-info/30min', '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <motion.div 
        className="absolute inset-0 w-full h-full z-[-1]"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src='/wallpaperHero2.png' alt='' className='absolute w-full h-full object-cover'/>
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex-1 flex items-center max-w-7xl mx-auto relative z-10 w-full py-12 md:py-24 px-4 md:px-6"
      >
        <div className='flex flex-col w-full md:w-2/3 gap-4'>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mb-4 bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text inline-block"
          >
            Transformez votre expertise terrain en empire digital
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-white text-base sm:text-lg md:text-xl max-w-3xl mb-6"
          >
            Notre écosystème digital transforme les heures perdues en paperasse en véritables opportunités de croissance, avec des outils pensés par et pour les professionnels de terrain.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className='flex flex-wrap gap-4 text-white mb-6'
          >
            <div className='flex gap-2 items-center'>
              <img src='/internet.png' width={24} height={24} alt="Sites internet" className="w-6 h-6 md:w-8 md:h-8"/>
              <p className="text-sm md:text-base">Sites internet</p>
            </div>
            <p className="hidden sm:block">•</p>
            <div className='flex gap-2 items-center'>
              <img src='/setting.png' width={24} height={24} alt="Applications mobiles" className="w-6 h-6 md:w-8 md:h-8"/>
              <p className="text-sm md:text-base">Applications mobiles</p>
            </div>
            <p className="hidden sm:block">•</p>
            <div className='flex gap-2 items-center'>
              <img src='/develop.png' width={24} height={24} alt="Solutions digitales" className="w-6 h-6 md:w-8 md:h-8"/>
              <p className="text-sm md:text-base">Solutions digitales</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-fit relative p-[2px] bg-gradient-to-r from-violet-custom via-purple-custom to-orange-custom rounded-full"
          >
            <button 
              onClick={() => openCalendly()} 
              className="bg-black text-white font-medium py-3 px-5 sm:py-4 sm:px-8 rounded-full relative z-10 text-sm sm:text-base"
            >
              Réservez un appel découverte gratuit (30 min)
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full py-6 md:py-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-4'>
          <div className='flex flex-col gap-2 text-center md:text-left mb-4 md:mb-0'>
            <h2 className='text-lg md:text-xl font-medium text-white'>De nombreuses entreprises de terrain nous font confiance.</h2>
            <p className='text-sm md:text-md font-medium bg-gradient-to-b from-white to-white/50 text-transparent inline-block bg-clip-text'>Des indépendants aux grandes sociétés de maintenance.</p>
          </div>
          <div className="overflow-hidden max-w-full md:max-w-[800px] h-[60px] md:h-[80px]">
            <motion.div
              className='flex items-center gap-6 md:gap-12'
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {duplicatedLogos.map((partner, idx) => (
                <div key={idx} className='flex-shrink-0'>
                  <img 
                    src={partner.picture} 
                    alt={partner.picture} 
                    className='object-contain grayscale hover:grayscale-0 transition w-[80px] h-[80px] md:w-[120px] md:h-[120px]'
                  />
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