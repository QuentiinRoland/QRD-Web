import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OfferSection = () => {
  // Créer un hook useInView pour détecter quand la section devient visible
  const [ref, inView] = useInView({
    triggerOnce: true,  // Ne déclenche l'animation qu'une seule fois
    threshold: 0.1      // Déclenche quand 10% de l'élément est visible
  });

  // Définir les variants pour le conteneur
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Décaler chaque enfant de 0.3s
        staggerChildren: 0.3,
        // Démarrer après que le titre soit apparu
        delayChildren: 0.4
      }
    }
  };

  // Définir les variants pour chaque image
  const itemVariants = {
    hidden: { 
      x: -50,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="services" className='flex flex-col max-w-7xl mx-auto py-12 md:py-24 px-4'>
      <motion.div 
        className='flex flex-col justify-center items-center gap-2 mb-8'
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className='bg-purple-custom/80 py-2 px-3 inline-block rounded-full w-fit text-white text-sm'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Solutions
        </motion.span>
        <motion.h2 
          className='text-3xl md:text-4xl font-bold text-center'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Nos solutions Digitales
        </motion.h2>
        <motion.p 
          className='text-base md:text-lg max-w-xl text-center bg-gradient-to-b from-black to-black/60 inline-block text-transparent bg-clip-text'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Nous développons des écosystèmes digitaux sur mesure qui transforment les opérations terrain et stimulent votre croissance
        </motion.p>
      </motion.div>
      
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'
      >
        {/* Web - 2 colonnes sur desktop */}
        <motion.div 
          className="overflow-hidden rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          variants={itemVariants}
        >
          <motion.img 
            src='/WebsiteCreation.png' 
            alt='Création de site web' 
            className='w-full h-full object-cover' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        {/* SEO - 2 colonnes sur desktop */}
        <motion.div 
          className="overflow-hidden rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          variants={itemVariants}
        >
          <motion.img 
            src='/SeoOptimisation.png' 
            alt='Optimisation SEO' 
            className='w-full h-full object-cover' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        {/* App - 1 colonne sur desktop */}
        <motion.div 
          className="overflow-hidden rounded-lg col-span-1"
          variants={itemVariants}
        >
          <motion.img 
            src='/FieldMobileApp.png' 
            alt='Application mobile terrain' 
            className='w-full h-full object-cover' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        {/* Eco - 2 colonnes sur desktop */}
        <motion.div 
          className="overflow-hidden rounded-lg col-span-1 sm:col-span-1 lg:col-span-2"
          variants={itemVariants}
        >
          <motion.img 
            src='/Ecosystem.png' 
            alt='Écosystème digital' 
            className='w-full ' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
        
        {/* Dash - 1 colonne sur desktop */}
        <motion.div 
          className="overflow-hidden rounded-lg col-span-1"
          variants={itemVariants}
        >
          <motion.img 
            src='/Management.png' 
            alt='Tableau de bord' 
            className='w-full h-full object-cover' 
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OfferSection;